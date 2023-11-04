"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import axios from "axios";
import {toast, Toaster} from "react-hot-toast";

function signupPage() {
  const router = useRouter();

  const [user, setUser] = useState({
    email: "",
    username: "",
    password: "",
  });

  const [buttonDisabled, setButtonDisabled] = useState(false);
  const [loading, setLoading] = useState(false);

  const onSignup = async () => {
    try {
      setLoading(true);
      const response = await axios.post("/api/users/signup", user);
      console.log(response.data);
      router.push("/login");
    } catch (error: any) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (user.email && user.username && user.password) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [user]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Toaster />
      {loading && <p>processing</p>}
      <input
        className="p-2 border text-black border-gray-300 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-gray-200 focus:border-transparent"
        type="email"
        placeholder="email"
        autoComplete="off"
        name="email"
        value={user.email}
        onChange={(e) => {
          setUser({ ...user, email: e.target.value });
        }}
      />
      <input
        className="p-2 border text-black border-gray-300 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-gray-200 focus:border-transparent"
        type="text"
        placeholder="username"
        autoComplete="off"
        name="username"
        value={user.username}
        onChange={(e) => {
          setUser({ ...user, username: e.target.value });
        }}
      />
      <input
        className="p-2 border text-black border-gray-300 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-gray-200 focus:border-transparent"
        type="password"
        placeholder="password"
        autoComplete="off"
        name="password"
        value={user.password}
        onChange={(e) => {
          setUser({ ...user, password: e.target.value });
        }}
      />
      <button
        className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-gray-200 focus:border-transparent"
        onClick={onSignup}
      >
        {buttonDisabled ? "Disabled" : "Signup"}
      </button>
      <Link href="/login">Visit Login Page</Link>
    </div>
  );
}

export default signupPage;
