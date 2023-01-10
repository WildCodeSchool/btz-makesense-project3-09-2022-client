import { ChangeEvent, FormEvent, useState } from "react";
import Link from "next/link";
import Navbar from "../../src/components/Navbar";
import Footer from "../../src/components/Footer";

async function signIn(credentials: { email: string; password: string }) {
  return fetch("http://localhost:4080/api/v1/auth/signin", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credentials),
  }).then((data) => data.json());
}

export default function signin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const token = await signIn({
      email,
      password,
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
          <form onSubmit={handleSubmit}>
            <input
              onChange={(e) => setEmail(e.target.value)}
              type="text"
              id="email"
              name="email"
              placeholder="email"
              className="min-w-[200px] w-full h-6 border-b border-b-black "
            />
            <input
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setPassword(e.target.value)
              }
              type="text"
              name="password"
              id="password"
              placeholder="Mot de passe"
              className="min-w-[200px] w-full h-6 border-b border-b-black "
            />{" "}
            <p className="text-xs w-full min-w-[200px] text-center md:text-right">
              <Link href="./renewpassword">Forgot password?</Link>
            </p>
            <button
              type="button"
              className="min-w-[200px] w-full h-15 py-2  bg-[#E36164] rounded-2xl text-white"
            >
              {" "}
              Sign In
            </button>
          </form>
          <p className="min-w-[200px] text-center">
            <Link href="/signup">Sign Up</Link>
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}
