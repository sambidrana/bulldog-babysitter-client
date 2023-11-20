import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className="border-b-4 p-6">
      <ul>
        <div>
          <li>Logo</li>
        </div>

        <div>
          <Link className="navLink" href="/">Home</Link>
          <Link className="navLink" href="/about">About</Link>
        </div>
      </ul>
    </nav>
  );
};

export default Navbar;
