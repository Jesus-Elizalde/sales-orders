import addCustomerData, {
  CustomerProps,
} from "@/firebase/firestone/customers/addCustomer";
import React, { useState } from "react";

type AddCustomerFormProps = {
  handleModal: () => void;
};

const AddCustomerForm = ({ handleModal }: AddCustomerFormProps) => {
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [street, setStreet] = useState<string>("");
  const [city, setCity] = useState<string>("");
  const [state, setState] = useState<string>("");
  const [postalCode, setPostalCode] = useState<string>("");
  const [country, setCountry] = useState<string>("");
  const [status, setStatus] = useState<"active" | "inactive">("active");

  const handleAddCustomer = async ({
    firstName,
    lastName,
    address,
    email,
    phone,
    status,
  }: CustomerProps) => {
    const { result, error } = await addCustomerData({
      firstName,
      lastName,
      email,
      phone,
      address,
      status,
    });
    if (error) {
      return console.log(error);
    }
    console.log(result);
    handleModal();
  };
  return (
    <div>
      <h1>Add Customer</h1>
      <div className="flex gap-3">
        <div className="flex flex-col gap-3">
          <input
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            type="text"
            placeholder="First Name"
            className="input input-bordered w-full "
          />
          <input
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            type="text"
            placeholder="Phone"
            className="input input-bordered w-full "
          />
          <input
            value={street}
            onChange={(e) => setStreet(e.target.value)}
            type="text"
            placeholder="Street"
            className="input input-bordered w-full "
          />
          <input
            value={state}
            onChange={(e) => setState(e.target.value)}
            type="city"
            placeholder="State"
            className="input input-bordered w-full "
          />
        </div>
        <div className="flex flex-col gap-3">
          <input
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            type="text"
            placeholder="Last Name"
            className="input input-bordered w-full "
          />
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="text"
            placeholder="Email"
            className="input input-bordered w-full "
          />
          <input
            value={city}
            onChange={(e) => setCity(e.target.value)}
            type="text"
            placeholder="City"
            className="input input-bordered w-full "
          />
          <input
            value={postalCode}
            onChange={(e) => setPostalCode(e.target.value)}
            type="text"
            placeholder="Postal Code"
            className="input input-bordered w-full "
          />
        </div>
      </div>
      <div>
        <button className="btn btn-error" onClick={handleModal}>
          Close
        </button>
        <button
          className="btn btn-primary"
          onClick={() =>
            handleAddCustomer({
              email,
              firstName,
              lastName,
              phone,
              status,
              address: { city, country, postalCode, state, street },
            })
          }
        >
          Add Customer
        </button>
      </div>
    </div>
  );
};

export default AddCustomerForm;
