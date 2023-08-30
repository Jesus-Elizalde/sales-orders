import firebase_app from "../config";
import { getFirestore, doc, setDoc } from "firebase/firestore";

type Props = {
  colllection: string;
  id: string;
  data: any;
};

const db = getFirestore(firebase_app);
export default async function addData({ colllection, id, data }: Props) {
  let result = null;
  let error = null;

  try {
    result = await setDoc(doc(db, colllection, id), data, {
      merge: true,
    });
  } catch (e) {
    error = e;
  }

  return { result, error };
}
