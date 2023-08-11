import Link from "next/link";
import React from "react";

const NavBar = () => {
  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <Link href="/" className="btn btn-ghost normal-case text-xl">
          Nature Nurtures
        </Link>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link href="/">Sign Up</Link>
          </li>
          <li>
            <Link href="./Login">Sign In</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
