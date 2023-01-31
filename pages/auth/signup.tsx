import React, { useState, ChangeEvent } from "react";
import axios from "axios";
import { useRouter } from "next/router";

import Footer from "../../src/components/Footer";
import axiosInstance from "../../util/axiosInstances";

export default function signUp() {
  const { push } = useRouter();
  const [formState, setFormState] = useState({
    firstName: "",
    lastName: "",

    email: "",
    password: "",
  });

  const handleSubmit = () => {
    axiosInstance.post("/auth/signup", {
      firstName: formState.firstName,
      lastName: formState.lastName,
      email: formState.email,

      password: formState.password,
    });
    push("/auth/signin");
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
        </div>
      </div>
      <div className="w-screen h-[86%] bg-[#70AF90] mt-2 py-10">
        <div className="flex  flex-col  justify-center align-middle items-center shadow-md  rounded-[50px] space-y-3  bg-white p-28 w-1/2 md:w-[400px] h-1/2 border-2  my-32 mx-auto lg:w-[500px]">
          <h1 className="font-bold text-[#70AF90]  text-3xl">SignUp</h1>
          <input
            onChange={handleChange}
            type="text"
            id="firstName"
            name="firstName"
            value={formState.firstName}
            placeholder="first name"
            className="min-w-[200px] w-full h-6 border-b border-b-black "
          />
          <input
            onChange={handleChange}
            type="text"
            name="lastName"
            value={formState.lastName}
            id="lastName"
            placeholder="last name"
            className=" min-w-[200px] w-full h-6 border-b border-b-black "
          />{" "}
          <input
            onChange={handleChange}
            type="text"
            name="email"
            value={formState.email}
            id="email"
            placeholder="email"
            className="min-w-[200px] w-full h-6 border-b border-b-black "
          />{" "}
          <input
            onChange={handleChange}
            type="text"
            name="password"
            value={formState.password}
            id="password"
            placeholder="password"
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
