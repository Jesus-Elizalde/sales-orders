"use client";
import Link from "next/link";
import React from "react";
import NavbarCard from "../Cards/NavbarCard";
import { usePathname } from "next/navigation";
import {
  AiFillContacts,
  AiFillContainer,
  AiFillGold,
  AiFillHome,
} from "react-icons/ai";

const Routes = [
  {
    path: "/admin/dashboard",
    name: "Dashboard",
    icon: <AiFillHome />,
  },
  {
    path: "/admin/orders",
    name: "Orders",
    icon: <AiFillContainer />,
  },
  {
    path: "/admin/products",
    name: "Products",
    icon: <AiFillGold />,
  },
  {
    path: "/admin/customers",
    name: "Customers",
    icon: <AiFillContacts />,
  },
];

const SideNavBar = ({ children }: { children: React.ReactNode }) => {
  const pathName = usePathname();
  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center px-4 py-2">
        {/* Page content here */}
        <NavbarCard />
        {children}
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu w-80 min-h-full bg-base-200 text-base-content">
          {/* Sidebar content here */}
          <li>
            <Link href="/admin/dashboard" className="text-2xl">
              OrderSphere
            </Link>
          </li>
          {Routes.map((route) => (
            <li key={route.path}>
              <Link
                href={route.path}
                className={`${pathName === route.path ? "bg-primary" : ""}`}
              >
                {route.icon}
                {route.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SideNavBar;
