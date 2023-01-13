import React from "react";
import Link from "next/link";

export default function SideBar() {
  return (
    <div className="h-[300px] w-1/4 float-right  bg-[#063944] rounded-l-[70px] flex flex-col justify-around items-end pr-5 text-lg text-yellow-400">
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          {" "}
          <Link href="/">My Projects</Link>
        </li>
        <li>
          <Link href="/"> My Notifications</Link>
        </li>
        <li>
          {" "}
          <Link href="/"> My Profile</Link>
        </li>
        <li>
          {" "}
          <Link href="/">Log Out</Link>
        </li>
      </ul>
    </div>
  );
}
