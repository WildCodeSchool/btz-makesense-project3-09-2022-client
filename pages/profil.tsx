/* eslint-disable import/no-extraneous-dependencies */
import React from "react";
import Link from "next/link";
import { AiOutlineCloudUpload } from "react-icons/ai";
// import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";
// eslint-disable-next-line import/order

export default function profil() {
  return (
    <div className="w-screen h-screen">
      {/* <Navbar /> */}
      <div className="w-screen h-full bg-[#C62E43] px-5 py-3 flex flex-col mt-5 md:flex-row-reverse ">
        <div className="flex flex-col justify-center items-center shadow-md  rounded-[50px] space-y-3  bg-white p-28 w-1/2 md:w-[400px]  h-1/2 border-2 my-auto mx-auto lg:w-[500px] ">
          <h1 className="font-bold text-[#C62E43] min-w-[200px] text-center text-3xl">
            Mes coordonnées
          </h1>
          <input
            type="text"
            id="email"
            name="email"
            placeholder="email"
            className="w-full h-6 border-b text-center border-b-black min-w-[200px]"
          />
          <button
            type="button"
            className="w-full h-15 py-2 min-w-[200px] bg-[#E36164] rounded-2xl text-white"
          >
            {" "}
            Mise à jour
          </button>
          <input
            type="text"
            name="password"
            id="password"
            placeholder="Mot de passe"
            className="w-full h-6 min-w-[200px] border-b border-b-black "
          />
          <input
            type="text"
            name="password"
            id="password"
            placeholder="Confirmer mot de passe"
            className="w-full h-6 min-w-[200px] border-b border-b-black "
          />

          <button
            type="button"
            className="w-full h-15 py-2 min-w-[200px] bg-[#E36164] rounded-2xl text-white"
          >
            {" "}
            Mise à jour
          </button>
          <p>
            <Link href="./">{}</Link>
          </p>
        </div>
        <div className="flex flex-col justify-center  items-center shadow-md  rounded-[50px] space-y-3 bg-white p-28 m-100 w-1/2 md:w-[400px] h-1/2 mr-3 border-2  my-auto mx-auto lg:w-[500px] mr-3">
          <h1 className="font-bold text-[#C62E43]  text-3xl">Photo</h1>
          <div className="wrapper">
            <AiOutlineCloudUpload size={120} />
          </div>
          <button
            type="button"
            className="w-full h-15 py-2  bg-[#C62E43] min-w-[200px] rounded-2xl text-white"
          >
            {" "}
            Enregistrer
          </button>
        </div>
      </div>
      {/* <Footer /> */}
    </div>
  );
}
