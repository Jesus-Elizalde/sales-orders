import firebase_app from "@/firebase/config";
import { getFirestore, collection, addDoc } from "firebase/firestore";

export type CustomerProps = {
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

const db = getFirestore(firebase_app);
export default async function addCustomerData(data: CustomerProps) {
  let result = null;
  let error = null;

  try {
    result = await addDoc(collection(db, "customers"), data);
  } catch (e) {
    error = e;
  }

  return { result, error };
}
