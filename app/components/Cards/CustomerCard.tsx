"use client";
import React, { useEffect, useState } from "react";
import { AddCustomerModalBtn } from "..";
import getCustomers from "@/firebase/firestone/customers/getCustomers";
import { Customer } from "@/firebase/firestone/types/dbTypes";

const CustomerCard = () => {
  const [customers, setCustomers] = useState<Customer[] | null>([]);
  console.log(
    "🚀 ~ file: CustomerCard.tsx:8 ~ CustomerCard ~ customers:",
    customers
  );
  useEffect(() => {
    getCustomerData();
  }, []);

  const getCustomerData = async () => {
    const { result, error } = await getCustomers();
    if (error) {
      return console.log(error);
    }
    setCustomers(result);
  };
  return (
    <div className="bg-base-200 flex flex-col">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl">Customer</h1>
        <AddCustomerModalBtn />
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
              <th>Phone</th>
              <th>Email</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {customers?.map((customer) => (
              <tr>
                <th>
                  <label>
                    <input type="checkbox" className="checkbox" />
                  </label>
                </th>
                <td>
                  <div className="font-bold">{customer.firstName}</div>
                </td>
                <td>{customer.phone}</td>
                <td>{customer.email}</td>
                <th>
                  <button className="btn btn-ghost btn-xs">details</button>
                </th>
              </tr>
            ))}
          </tbody>
          {/* foot */}
          <tfoot></tfoot>
        </table>
      </div>
    </div>
  );
};

export default CustomerCard;
