"use client";

import axios from "axios";
import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";

export default function ForgotPasswordPage() {
  const [token, setToken] = useState("");
  const [newPass, setNewPass] = useState("");

  const updatePassword = async () => {
    try {
      await axios.post("/api/users/forgotpassword", { token, newPass });
      toast.success("updated")
    } catch (error: any) {
      throw new Error(error.message);
    }
  };

  useEffect(() => {
    const urlToken = window.location.search.split("=")[1];
    setToken(urlToken || "");
  }, []);

  return (
    <div>
      <Toaster/>
      <input
        className="text-black"
        type="password"
        name="pass"
        value={newPass}
        onChange={(e) => {
          setNewPass(e.target.value);
        }}
      />
      <button onClick={updatePassword}>submit</button>
    </div>
  );
}
