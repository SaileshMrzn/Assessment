import React, { useState } from "react";
import { signup } from "../api/auth";
import { toast } from "react-toastify";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = async () => {
    try {
      await signup({ username: email, password });
      toast.success("Account created successfully");
      setEmail("");
      setPassword("");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="h-screen w-screen flex items-center justify-center flex-col">
      {/* container */}
      <div className="bg-[#dadada] h-fit w-96 flex items-center flex-col py-8 px-2 rounded-lg">
        <h1 className="uppercase text-center text-3xl">Signup</h1>
        <form action="" className="w-full p-4">
          <div className="flex flex-col mb-10 gap-2">
            <label htmlFor="email">Email/Username</label>
            <input
              type="email"
              id="email"
              className="h-8 rounded-md p-2"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="email">Password</label>
            <input
              type="password"
              id="password"
              className="h-8 rounded-md p-2"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
        </form>
      </div>
      <button
        type="button"
        className="bg-[#dadada] w-96 rounded-lg mt-10 p-4 text-2xl"
        onClick={handleSignup}
      >
        Signup
      </button>
    </div>
  );
}
