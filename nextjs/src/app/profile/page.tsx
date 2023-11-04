"use client";

import axios from "axios";
import { toast, Toaster } from "react-hot-toast";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { set } from "mongoose";

export default function ProfilePage() {
  const router = useRouter();
  const [user, setUser] = useState("nothing");
  const logout = async () => {
    try {
      await axios.get("api/users/logout");
      toast.success("Loggged Out");
      router.push("/login");
    } catch (error: any) {
      console.log(error.message);
    }
  };

  const getUserInfo = async () => {
    const res = await axios.get("api/users/info");
    setUser(res.data._id);
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 font-bold">
      <Toaster />
      <h1>Profile</h1>
      <h3>{user === "nothing" ? "Nothing" : <Link href={`/profile/${user}`}>{ user }</Link>}</h3>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 mt-4 rounded"
        onClick={logout}
      >
        LOGOUT
      </button>
      <button
        className="bg-purple-500 hover:bg-purple-700 text-white py-2 px-4 mt-4 rounded"
        onClick={getUserInfo}
      >
        Get User Info
      </button>
    </div>
  );
}
