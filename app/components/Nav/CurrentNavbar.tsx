"use client";
import { usePathname } from "next/navigation";
import React from "react";

import path from "path";
import Navbar from "./Navbar";
import SideNavBar from "./SideNavBar";

const CurrentNavbar = ({ children }: { children: React.ReactNode }) => {
  const pathName = usePathname();
  return (
    <>
      {!pathName.includes("admin") ? (
        <>
          <Navbar />
          {children}
        </>
      ) : (
        <SideNavBar>{children}</SideNavBar>
      )}
    </>
  );
};

export default CurrentNavbar;
