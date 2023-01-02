import React, { useState, ChangeEvent } from "react";
import axios from "axios";
import Navbar1 from "./components/Navbar1";

import Footer from "./components/Footer";

export default function signUp() {

 const [formState, setFormState] = useState({






    firstName: "",
    lastName: "",

    email: "",
    password: "",
  });

  const handleSubmit = () => {
    axios.post("http://localhost:4000/api/v1/auth/signup", {
      firstName: formState.firstName,
      lastName: formState.lastName,
      email: formState.email,

      password: formState.password,
    });
  };

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormState((state) => ({
      ...state,
      [e.target.name]: e.target.value,
    }));
  };

  return (

    <div className="w-screen h-screen">
      <Navbar1 />
      <div className="w-screen h-[86%] bg-[#70AF90] py-10">

       <div className="flex  flex-col  justify-center align-middle items-center shadow-md  rounded-[50px] space-y-3  bg-white p-28 w-1/2 md:w-[400px] h-1/2 border-2  my-32 mx-auto lg:w-[500px]">



     

          <h1 className="font-bold text-[#70AF90]  text-3xl">SignUp</h1>
          <input
            onChange={handleChange}
            type="text"
            id="firstName"
            name="firstName"
            value={formState.firstName}
            placeholder="Prénom"
            className="min-w-[200px] w-full h-6 border-b border-b-black "
          />
          <input
            onChange={handleChange}
            type="text"
            name="lastName"
            value={formState.lastName}
            id="lastName"
            placeholder="Nom"
            className=" min-w-[200px] w-full h-6 border-b border-b-black "
          />{" "}
          <input
            onChange={handleChange}
            type="text"
            name="email"
            value={formState.email}
            id="email"
            placeholder="Email"
            className="min-w-[200px] w-full h-6 border-b border-b-black "
          />{" "}
          <input
            onChange={handleChange}
            type="text"
            name="password"
            value={formState.password}
            id="password"
            placeholder="Mot de passe"
            className="min-w-[200px] w-full h-6 border-b border-b-black "
          />{" "}
          <button
            onClick={handleSubmit}
            type="button"
            className="min-w-[200px] w-full h-15 py-2  bg-[#E36164] rounded-2xl text-white"
          >
            {" "}
            Sign Up
          </button>
        </div>
      </div>

      <Footer />

    </div>
  );
}
