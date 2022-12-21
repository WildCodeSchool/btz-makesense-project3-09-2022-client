import React from "react";

export default function signin() {
  return (
    <div className="w-screen h-screen bg-[#196C84] py-10">
      <div className="flex  flex-col  justify-center align-middle items-center shadow-md  rounded-[50px] space-y-3  bg-white p-28 w-1/2 h-1/2 border-2  my-32 mx-auto">
        <h1 className="font-bold text-[#196C84]  text-3xl">Connexion</h1>
        <input
          type="text"
          id="email"
          name="email"
          placeholder="email"
          className="w-full h-6 border-b border-b-black "
        />
        <input
          type="text"
          name="password"
          id="password"
          placeholder="Mot de passe"
          className="w-full h-6 border-b border-b-black "
        />{" "}
        <p className="text-xs text-right w-full">Mot de passe oubliéé?</p>
        <button
          type="button"
          className="w-full h-15 py-2  bg-[#E36164] rounded-2xl text-white"
        >
          {" "}
          Envoyer
        </button>
        <p>{`S'inscrire`}</p>
      </div>
    </div>
  );
}
