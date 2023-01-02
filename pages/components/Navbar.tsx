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

import useWindowSize from "../hooks/useWindowSize";

export default function Navbar() {
  const [isMenu, setIsMenu] = useState(false);

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
        <h1 className="font-bold font-sans ml-2 text-3xl">
          make
          <button
            type="button"
            aria-label="logo design"
            className="border-solid h-2 w-3 bg-yellow-400 rounded-t-lg"
          />
          sense
        </h1>
        {width > 768 && (
          <>
            <div className=" xs:hidden sm:hidden  md:flex flex-col justify-center align-middle items-center ">
              <Link href=" ">
                <FaHome />
                <p className="text-xs">Accueil</p>
              </Link>
            </div>
            <div className="sm:hidden  md:flex flex-col justify-center align-middle items-center ">
              <Link href=" ">
                <AiOutlineCalendar />
                <p className="text-xs">Mes Décisions</p>{" "}
              </Link>
            </div>
            <div className="sm:hidden md:flex flex-col justify-center align-middle items-center ">
              <Link href=" ">
                <CiFaceSmile />
                <p className="text-xs">Notifications</p>{" "}
              </Link>
            </div>
            <div className="sm:hidden  md:flex flex-col justify-center align-middle items-center ">
              <Link href="signIn">
                <AiOutlineLogout />

                <p className="text-xs">Log out</p>
              </Link>
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
          <Link href=" ">
            <CgProfile />
          </Link>
        </div>
      </div>
    </div>
  );
}
