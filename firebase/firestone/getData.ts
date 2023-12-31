import { db } from "../config";
import { getFirestore, doc, getDoc } from "firebase/firestore";

type Props = {
  collection: string;
  id: string;
};

export default async function getDoument({ collection, id }: Props) {
  let docRef = doc(db, collection, id);

  let result = null;
  let error = null;

  try {
    result = await getDoc(docRef);
  } catch (e) {
    error = e;
  }

  return { result, error };
}
