import React from "react";

const SplashMainSection = () => {
  return (
    <div className="flex flex-col items-center text-center gap-9 ">
      <h1 className="text-4xl w-[33rem] tracking-wide">
        Navigating Sales, Simplifying Orders, Amplifying Success.
      </h1>
      <p className="text-md w-[30rem] text-center">
        OrderSphere Pro is a streamlined and user-friendly sales order website
        designed to empower businesses in efficiently managing their orders,
        products, and customer interactions. Seamlessly integrating cutting-edge
        technology, it offers a comprehensive platform for businesses of all
        sizes to effortlessly track and organize their sales operations.
      </p>
      <div className="flex gap-3">
        <button className="btn ">Demo</button>
        <button className="btn btn-primary ">Get Started</button>
      </div>
      <div className="mockup-window border bg-base-300 w-[33rem] h-[22rem]">
        <div className="flex justify-center px-4 py-16 h-full bg-base-200">
          App Demo
        </div>
      </div>
    </div>
  );
};

export default SplashMainSection;
