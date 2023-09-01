"use client";
import React, { FormEvent } from "react";
import signIn from "@/firebase/auth/signin";
import { useRouter } from "next/navigation";
import { FcGoogle } from "react-icons/fc";
import googleSignIn from "@/firebase/auth/googlesignin";

function Page() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const router = useRouter();

  const handleLogin = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const { result, error } = await signIn(email, password);

    if (error) {
      return console.log(error);
    }

    // else successful
    console.log(result);
    return router.push("/admin");
  };

  const handleGoogleLogin = async () => {
    const { result, error } = await googleSignIn();

    if (error) {
      return console.log(error);
    }
    console.log(result);
    return router.push("/admin");
  };
  return (
    <>
      <div className="flex h-[90vh]">
        <div className="w-1/2"></div>
        <div className="w-1/2 flex justify-center items-center bg-base-300">
          <div className="w-96 flex flex-col items-center">
            <h1 className="text-2xl font-bold">Login into your account</h1>
            <p>Enter your Email below to Login into your account</p>

            <form onSubmit={handleLogin} className="w-full mt-2">
              <div className="flex flex-col gap-4 w-full">
                <input
                  type="email"
                  className="input input-bordered w-full input-sm"
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  name="email"
                  id="email"
                  placeholder="example@mail.com"
                />
                <input
                  type="password"
                  className="input input-bordered w-full input-sm"
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  name="password"
                  id="password"
                  placeholder="password"
                />
                <button className="btn w-full btn-primary" type="submit">
                  Login with Email
                </button>
              </div>
            </form>
            <div className="divider uppercase">Or Continue with</div>
            <button className="btn w-full" onClick={handleGoogleLogin}>
              <FcGoogle />
              Google
            </button>
            <p>By clicking continue, you agree to our</p>
            <p>
              <span className="underline">Terms of Service</span> and{" "}
              <span className="underline">Privacy Policy</span>.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Page;
