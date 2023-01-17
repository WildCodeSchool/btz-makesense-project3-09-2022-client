import { useState, useEffect } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { FaHome } from "react-icons/fa";
import {
  AiOutlineCalendar,
  AiOutlineClose,
  AiOutlineLogout,
} from "react-icons/ai";
import { CiFaceSmile } from "react-icons/ci";
import { CgProfile } from "react-icons/cg";
import Link from "next/link";
import { useAuth } from "../context/UserContext";

import useWindowSize from "../hooks/useWindowSize";
import SideBar from "./SideBar";

export default function Navbar() {
  const [isMenu, setIsMenu] = useState(false);
  const { signOut } = useAuth();

  const { width } = useWindowSize();

  useEffect(() => {
    if (width < 768) {
      setIsMenu(false);
    } else {
      setIsMenu(true);
    }
  }, [width]);
  return (
    <div className="h-[7%] w-full bg-white">
      <div className="flex justify-end ">
        <button type="button" className="font-sans text-xs mr-2">
          FR
        </button>{" "}
        <button type="button" className="font-sans text-xs mr-2">
          EN
        </button>{" "}
        <button type="button" className="font-sans text-xs mr-2">
          ES
        </button>
      </div>
      <div className="flex flex-row justify-between mt-2 mr-2">
        <Link href="/">
          <h1 className="font-bold font-sans ml-2 text-3xl">
            make
            <button
              type="button"
              aria-label="logo design"
              className="border-solid h-2 w-3 bg-yellow-400 rounded-t-lg"
            />
            sense
          </h1>
        </Link>
        {width > 768 && (
          <>
            <div className=" xs:hidden sm:hidden  md:flex flex-col justify-center align-middle items-center ">
              <Link href="/">
                <FaHome />
                <p className="text-xs">Home</p>
              </Link>
            </div>
            <div className="sm:hidden  md:flex flex-col justify-center align-middle items-center ">
              <Link href="/decisionpage">
                <AiOutlineCalendar />
                <p className="text-xs">My Decisions</p>{" "}
              </Link>
            </div>
            <div className="sm:hidden md:flex flex-col justify-center align-middle items-center ">
              <Link href="/statuspage">
                <CiFaceSmile />
                <p className="text-xs">Notifications</p>{" "}
              </Link>
            </div>
            <div className="sm:hidden  md:flex flex-col justify-center align-middle items-center ">
              <button type="button" onClick={() => signOut()}>
                <AiOutlineLogout />

                <p className="text-xs">Log out</p>
              </button>
            </div>
          </>
        )}
        <div className="h-10 w-10 flex flex-row  items-center">
          {isMenu ? (
            <button type="button" onClick={() => setIsMenu(false)}>
              <RxHamburgerMenu />
            </button>
          ) : (
            <button type="button" onClick={() => setIsMenu(true)}>
              <AiOutlineClose />
            </button>
          )}
          <Link href="/profile">
            <CgProfile />
          </Link>
        </div>
      </div>
      {!isMenu && <SideBar />}
    </div>
  );
}
