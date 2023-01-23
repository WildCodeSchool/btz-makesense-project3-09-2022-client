import React from "react";
import Link from "next/link";
import { FaFacebookF } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { AiOutlineYoutube } from "react-icons/ai";

export default function Footer() {
  return (
    <div className="h-[7%] w-full bg-white flex z-auto flex-row items-center ">
      <Link
        className="ml-2 mr-[20%] md:mr-[30%] lg:mr-[40%]"
        href="https://makesense.org/mentions-legales-donnees-personnelles/"
      >
        Legal Notice
      </Link>
      <div className="flex flex-row items-center ">
        <Link href="https://linktr.ee/makesenseSocialMedia">
          <FaFacebookF size={25} />
        </Link>{" "}
        <Link className="ml-2" href="https://linktr.ee/makesenseSocialMedia">
          <BsInstagram size={30} />
        </Link>
        <Link
          className="ml-2"
          href="https://www.youtube.com/channel/UC9AC_vydxKONO4EMQfsfMWQ"
        >
          <AiOutlineYoutube size={40} />
        </Link>{" "}
      </div>
    </div>
  );
}
