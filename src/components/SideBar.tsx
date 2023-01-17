import React from "react";
import Link from "next/link";
import { useAuth } from "../context/UserContext";

export default function SideBar() {
  const { signOut } = useAuth();
  return (
    <div className="h-[80%] absolute right-0 w-48 float-right  bg-[#063944] rounded-l-[70px] flex flex-col justify-around items-end pr-5 text-lg text-yellow-400">
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          {" "}
          <Link href="/decisionpage">My Decisions</Link>
        </li>
        <li>
          <Link href="/createdecision"> My Notifications</Link>
        </li>
        <li>
          {" "}
          <Link href="/profile"> My Profile</Link>
        </li>
        <li>
          {" "}
          <button type="button" onClick={() => signOut()}>
            Log Out
          </button>
        </li>
      </ul>
    </div>
  );
}
