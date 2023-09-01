import addCustomerData, {
  AddCustomerProps,
} from "@/firebase/firestone/customers/addCustomer";
import { error } from "console";
import React, { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

type AddCustomerFormProps = {
  handleModal: () => void;
};

const AddCustomerForm = ({ handleModal }: AddCustomerFormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<AddCustomerProps>();

  const onSubmit: SubmitHandler<AddCustomerProps> = (data: AddCustomerProps) =>
    handleAddCustomer(data);

  const handleAddCustomer = async (data: AddCustomerProps) => {
    const { result, error } = await addCustomerData(data);
    if (error) {
      return console.log(error);
    }
    console.log(result);
    handleModal();
  };
  return (
    <div>
      <h1>Add Customer</h1>
      <p>Fill out the form below to add a new customer.</p>
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

export default AddCustomerForm;
