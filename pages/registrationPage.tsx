import React from "react";

export default function registrationPage() {
  return (
    <div className="w-screen h-screen bg-[#70AF90] py-10">
      <div className="flex  flex-col  justify-center align-middle items-center shadow-md  rounded-[50px] space-y-3  bg-white p-28 w-1/2 h-1/2 border-2  my-32 mx-auto">
        <h1 className="font-bold text-[#70AF90]  text-3xl">Inscription</h1>
        <input
          type="text"
          id="firstName"
          name="firstName"
          placeholder="Prénom"
          className="w-full h-6 border-b border-b-black "
        />
        <input
          type="text"
          name="lastName"
          id="lastName"
          placeholder="Nom"
          className="w-full h-6 border-b border-b-black "
        />{" "}
        <input
          type="text"
          name="UserName"
          id="UserName"
          placeholder="Nom d'utilisateur"
          className="w-full h-6 border-b border-b-black "
        />{" "}
        <input
          type="text"
          name="email"
          id="email"
          placeholder="Email"
          className="w-full h-6 border-b border-b-black "
        />{" "}
        <input
          type="text"
          name="password"
          id="password"
          placeholder="Mot de passe"
          className="w-full h-6 border-b border-b-black "
        />{" "}
        <button
          type="button"
          className="w-full h-15 py-2  bg-[#E36164] rounded-2xl text-white"
        >
          {" "}
          {`S'inscrire`}
        </button>
      </div>
    </div>
  );
}
