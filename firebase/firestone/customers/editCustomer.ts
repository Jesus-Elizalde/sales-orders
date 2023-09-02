import { db } from "@/firebase/config";
import { collection, doc, updateDoc } from "firebase/firestore";
import { Customer } from "../types/dbTypes";

export default async function editCustomerData(data: Customer) {
  let docRef = doc(db, "customers", data.id);
  let result = null;
  let error = null;

  try {
    result = await updateDoc(docRef, {
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      phone: data.phone,
      address: data.address,
    });
  } catch (e) {
    error = e;
  }

  return { result, error };
}
