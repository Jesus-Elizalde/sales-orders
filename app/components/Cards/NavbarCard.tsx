import signout from "@/firebase/auth/signout";
import React from "react";

const NavbarCard = () => {
  const handleLogout = async () => {
    const { result, error } = await signout();
    if (error) {
      return console.log(error);
    }

    // else successful
    console.log(result);
  };

  return (
    <div className="navbar bg-base-200 rounded-md">
      <div className="flex-1">
        <label
          htmlFor="my-drawer-2"
          className="btn btn-primary drawer-button btn-sm lg:hidden"
        >
          Open
        </label>
        <input
          type="text"
          placeholder="Type here"
          className="input input-bordered w-full max-w-xs input-sm"
        />
      </div>
      <div className="flex-none">
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full bg-primary">
              <p className="">User</p>
            </div>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a className="justify-between">
                Profile
                <span className="badge">New</span>
              </a>
            </li>
            <li>
              <a>Settings</a>
            </li>
            <li>
              <button onClick={handleLogout}>Logout</button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavbarCard;
