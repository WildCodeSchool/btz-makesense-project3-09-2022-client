import { useState, ChangeEvent } from "react";
import Link from "next/link";
import { useAuth } from "../../src/context/UserContext";

import Navbar from "../../src/components/Navbar";
import Footer from "../../src/components/Footer";

export default function signin() {
  const { signIn } = useAuth();
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="w-screen h-screen">
      <Navbar />
      <div className="w-screen h-[86%] bg-[#196C84] mt-2 py-10">
        <div className="flex  flex-col  justify-center align-middle items-center shadow-md  rounded-[50px] space-y-3  bg-white p-28 w-1/2 md:w-[400px] h-1/2 border-2  my-32 mx-auto lg:w-[500px]">
          <h1 className="font-bold text-[#196C84] text-3xl min-w-[200px] text-center">
            Sign In
          </h1>
          <form>
            <input
              onChange={handleChange}
              value={credentials.email}
              type="text"
              id="email"
              name="email"
              placeholder="email"
              className="min-w-[200px] w-full h-6 border-b border-b-black my-1"
            />
            <input
              onChange={handleChange}
              value={credentials.password}
              type="password"
              name="password"
              id="password"
              placeholder="password"
              className="min-w-[200px] w-full h-6 border-b border-b-black my-2"
            />{" "}
            <p className="text-xs w-full min-w-[200px] text-center md:text-right my-2">
              <Link href="./renewpassword">Forgot password?</Link>
            </p>
            <button
              onClick={() =>
                signIn({
                  email: credentials.email,
                  password: credentials.password,
                })
              }
              type="button"
              className="min-w-[200px] w-full h-15 py-2  bg-[#E36164] rounded-2xl text-white"
            >
              {" "}
              Sign In
            </button>
          </form>
          <p className="min-w-[200px] text-center">
            <Link href="./signup">Sign Up</Link>
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}
