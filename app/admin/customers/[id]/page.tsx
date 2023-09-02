"use client";
import EditCustomerModalBtn from "@/app/components/Buttons/EditCustomerModalBtn";
import { db } from "@/firebase/config";
import { Customer } from "@/firebase/firestone/types/dbTypes";
import { collection, doc } from "firebase/firestore";
import React from "react";
import { useDocument } from "react-firebase-hooks/firestore";

export default function Page({ params }: { params: { id: string } }) {
  const [value, loading, error] = useDocument(doc(db, "customers", params.id));
  console.log("🚀 ~ file: page.tsx:8 ~ Page ~ value:", value);

  return (
    <div>
      <p>
        {error && <strong>Error: {JSON.stringify(error)}</strong>}
        {loading && <span>Document: Loading...</span>}
        {value && (
          <div>
            <EditCustomerModalBtn
              data={value?.data() as Customer}
              customerId={value.id}
            />
            <span>Document: {JSON.stringify(value.data())}</span>
          </div>
        )}
      </p>
    </div>
  );
}
