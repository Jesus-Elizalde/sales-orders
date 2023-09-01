import firebase_app from "@/firebase/config";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import { Customer } from "../types/dbTypes";

const db = getFirestore(firebase_app);
export default async function getCustomers() {
  let result = null;
  let error = null;

  try {
    const docs = await getDocs(collection(db, "customers"));
    result = docs.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    })) as Customer[];
  } catch (e) {
    error = e;
  }

  return { result, error };
}
