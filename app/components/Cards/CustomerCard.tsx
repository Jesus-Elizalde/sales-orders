"use client";
import React, { useState } from "react";
import { AddCustomerModalBtn } from "..";
import { Customer } from "@/firebase/firestone/types/dbTypes";
import { useCollection } from "react-firebase-hooks/firestore";
import { collection, getFirestore } from "firebase/firestore";
import { db } from "@/firebase/config";

const CustomerCard = () => {
  const [value, loading, error] = useCollection(collection(db, "customers"), {
    snapshotListenOptions: { includeMetadataChanges: true },
  });
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
            {value?.docs.map((doc) => {
              const customer = doc.data() as Customer;
              return (
                <tr key={customer.id}>
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
              );
            })}
          </tbody>
          {/* foot */}
          <tfoot></tfoot>
        </table>
      </div>
    </div>
  );
};

export default CustomerCard;
