import { db } from "@/firebase/config";
import { collection, addDoc } from "firebase/firestore";
import { Customer } from "../types/dbTypes";

export default async function addCustomerData(data: Customer) {
  let result = null;
  let error = null;

  try {
    result = await addDoc(collection(db, "customers"), data);
  } catch (e) {
    error = e;
  }

  return { result, error };
}
