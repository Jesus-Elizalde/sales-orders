import firebase_app, { db } from "@/firebase/config";
import { getFirestore, collection, addDoc } from "firebase/firestore";

export type AddCustomerProps = {
  firstName: string;
  lastName: string;
  email: string | null;
  phone: string | null;
  address: {
    street: string;
    city: string;
    state: string;
    postalCode: string;
    country: string;
  } | null;
  status: "active" | "inactive";
};

export default async function addCustomerData(data: AddCustomerProps) {
  let result = null;
  let error = null;

  try {
    result = await addDoc(collection(db, "customers"), data);
  } catch (e) {
    error = e;
  }

  return { result, error };
}
