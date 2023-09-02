import addCustomerData from "@/firebase/firestone/customers/addCustomer";
import editCustomerData from "@/firebase/firestone/customers/editCustomer";
import { Customer } from "@/firebase/firestone/types/dbTypes";
import { error, log } from "console";
import React, { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

type EditCustomerFormProps = {
  handleModal: () => void;
  customerData: Customer;
  customerId: string;
};

const EditCustomerForm = ({
  handleModal,
  customerData,
  customerId,
}: EditCustomerFormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Customer>();

  const onSubmit: SubmitHandler<Customer> = (data: Customer) =>
    handleEditCustomer({ id: customerId, data });

  const handleEditCustomer = async ({
    id,
    data,
  }: {
    id: string;
    data: Customer;
  }) => {
    console.log("handle sumbit", data, id);

    const fullData = { ...data, id };

    const { result, error } = await editCustomerData(fullData);
    if (error) {
      return console.log(error);
    }
    console.log(result);
    handleModal();
  };
  return (
    <div>
      <h1>Edit Customer</h1>
      <p>Fill out the form below to edit customer.</p>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid grid-cols-2 gap-2">
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">First Name:</span>
              {errors.firstName && (
                <span className="label-text-alt">Required</span>
              )}
            </label>
            <input
              defaultValue={customerData.firstName}
              {...register("firstName", { required: true })}
              className={`input input-bordered w-full ${
                errors.firstName?.type && "input-error"
              }`}
            />
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Last Name:</span>
              {errors.lastName && (
                <span className="label-text-alt">Required</span>
              )}
            </label>
            <input
              defaultValue={customerData.lastName}
              {...register("lastName", { required: true })}
              className={`input input-bordered w-full ${
                errors.lastName?.type && "input-error"
              }`}
            />
          </div>

          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Phone:</span>
            </label>
            <input
              defaultValue={customerData.phone || ""}
              {...register("phone")}
              className={`input input-bordered w-full ${
                errors.phone?.type && "input-error"
              }`}
            />
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Email:</span>
            </label>
            <input
              defaultValue={customerData.email || ""}
              {...register("email")}
              className={`input input-bordered w-full ${
                errors.email?.type && "input-error"
              }`}
            />
          </div>

          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Street:</span>
            </label>
            <input
              defaultValue={
                customerData.address ? customerData.address.street : ""
              }
              {...register("address.street")}
              className={`input input-bordered w-full ${
                errors.address?.street?.type && "input-error"
              }`}
            />
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">City:</span>
            </label>
            <input
              defaultValue={
                customerData.address ? customerData.address.city : ""
              }
              {...register("address.city")}
              className={`input input-bordered w-full ${
                errors.address?.city?.type && "input-error"
              }`}
            />
          </div>

          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">State:</span>
            </label>
            <input
              defaultValue={
                customerData.address ? customerData.address.state : ""
              }
              {...register("address.state")}
              className={`input input-bordered w-full ${
                errors.address?.state?.type && "input-error"
              }`}
            />
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Postal Code:</span>
            </label>
            <input
              defaultValue={
                customerData.address ? customerData.address.postalCode : ""
              }
              {...register("address.postalCode")}
              className={`input input-bordered w-full ${
                errors.address?.postalCode?.type && "input-error"
              }`}
            />
          </div>
        </div>

        <div>
          <button className="btn btn-error" onClick={handleModal} type="button">
            Close
          </button>
          <button className="btn btn-primary" type="submit">
            Add Customer
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditCustomerForm;
