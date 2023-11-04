"use client";
import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import axios from "axios";
import {toast, Toaster} from "react-hot-toast";

function loginPage() {
  const router = useRouter();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);

  const onLogin = async () => {
    try {
      setLoading(true);
      const response = await axios.post("/api/users/login", user);
      console.log(response.data);
      toast.success("login success");
      router.push("/profile");
    } catch (error: any) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  const forgotPassword = async () => {
    await axios.post("/api/users/forgotpasswordemail", user);
    toast.success("Email Sent");
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Toaster />
      {loading && <p>processing</p>}
      <input
        className="p-2 border text-black border-gray-300 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-gray-200 focus:border-transparent"
        type="email"
        placeholder="email"
        name="email"
        value={user.email}
        onChange={(e) => {
          setUser({ ...user, email: e.target.value });
        }}
      />
      <input
        className="p-2 border text-black border-gray-300 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-gray-200 focus:border-transparent"
        type="password"
        placeholder="password"
        name="password"
        value={user.password}
        onChange={(e) => {
          setUser({ ...user, password: e.target.value });
        }}
      />
      <button
        className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-gray-200 focus:border-transparent"
        onClick={onLogin}
      >
        Login
      </button>
      <Link href="/signup">Visit Signup Page</Link>
      <button onClick={forgotPassword}>forgot password</button>
    </div>
  );
}

export default loginPage;
