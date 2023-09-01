"use client";
import addCustomerData, {
  CustomerProps,
} from "@/firebase/firestone/customers/addCustomer";
import React, { useState } from "react";
import { GrAdd } from "react-icons/gr";
import { Modal } from "@/app/components";

const CustomerCard = () => {
  const [open, setOpen] = useState<boolean>(false);
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

  const handleModal = () => setOpen((prev) => !prev);
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
    <div className="bg-base-200 flex flex-col">
      {/* <Modal
        title="Add Customer"
        handleFnc={() =>
          handleAddCustomer({
            firstName,
            lastName,
            phone,
            email,
            status,
            address: { city, country, postalCode, state, street },
          })
        }
      >
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
      </Modal> */}
      <Modal open={open}>
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
      </Modal>
      <div className="flex items-center justify-between">
        <h1 className="text-3xl">Customer</h1>
        <button
          className="btn btn-primary "
          //   onClick={handleAddCustomer({ name, email, status, phone })}
          onClick={handleModal}
        >
          <GrAdd /> Add customer
        </button>
      </div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <th>Name</th>
              <th>Job</th>
              <th>Favorite Color</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <td>
                <div className="flex items-center space-x-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img
                        src="/tailwind-css-component-profile-2@56w.png"
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">Hart Hagerty</div>
                    <div className="text-sm opacity-50">United States</div>
                  </div>
                </div>
              </td>
              <td>
                Zemlak, Daniel and Leannon
                <br />
                <span className="badge badge-ghost badge-sm">
                  Desktop Support Technician
                </span>
              </td>
              <td>Purple</td>
              <th>
                <button className="btn btn-ghost btn-xs">details</button>
              </th>
            </tr>
            {/* row 2 */}
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <td>
                <div className="flex items-center space-x-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img
                        src="/tailwind-css-component-profile-3@56w.png"
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">Brice Swyre</div>
                    <div className="text-sm opacity-50">China</div>
                  </div>
                </div>
              </td>
              <td>
                Carroll Group
                <br />
                <span className="badge badge-ghost badge-sm">
                  Tax Accountant
                </span>
              </td>
              <td>Red</td>
              <th>
                <button className="btn btn-ghost btn-xs">details</button>
              </th>
            </tr>
            {/* row 3 */}
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <td>
                <div className="flex items-center space-x-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img
                        src="/tailwind-css-component-profile-4@56w.png"
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">Marjy Ferencz</div>
                    <div className="text-sm opacity-50">Russia</div>
                  </div>
                </div>
              </td>
              <td>
                Rowe-Schoen
                <br />
                <span className="badge badge-ghost badge-sm">
                  Office Assistant I
                </span>
              </td>
              <td>Crimson</td>
              <th>
                <button className="btn btn-ghost btn-xs">details</button>
              </th>
            </tr>
            {/* row 4 */}
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <td>
                <div className="flex items-center space-x-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img
                        src="/tailwind-css-component-profile-5@56w.png"
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">Yancy Tear</div>
                    <div className="text-sm opacity-50">Brazil</div>
                  </div>
                </div>
              </td>
              <td>
                Wyman-Ledner
                <br />
                <span className="badge badge-ghost badge-sm">
                  Community Outreach Specialist
                </span>
              </td>
              <td>Indigo</td>
              <th>
                <button className="btn btn-ghost btn-xs">details</button>
              </th>
            </tr>
          </tbody>
          {/* foot */}
          <tfoot>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Job</th>
              <th>Favorite Color</th>
              <th></th>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
};

export default CustomerCard;
