"use client";
import React, { useEffect } from "react";
import { useAuthContext } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import addData from "@/firebase/firebase/addData";

function Page() {
  const { user } = useAuthContext();
  const router = useRouter();

  useEffect(() => {
    if (user == null) router.push("/");
  }, [user]);

  const handleForm = async () => {
    const data = {
      name: "John snow",
      house: "Stark",
    };
    const { result, error } = await addData({
      colllection: "test",
      id: "user-ifsdf",
      data: { name: "John f", house: "Stark" },
    });

    if (error) {
      return console.log(error);
    }
  };

  return (
    <h1>
      Only logged in users can view this page
      <button onClick={handleForm}>click</button>
    </h1>
  );
}

export default Page;
