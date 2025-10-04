
'use client'
import React, { useState } from "react";
import { LogIn, Lock, Mail ,User} from "lucide-react";
import { FaGoogle ,FaFacebook,FaApple} from "react-icons/fa";

function Login() {

  

  const [[password], setPassword] = useState("");
  const [identification, setIndentification] = useState("");
  const [error, setError] = useState("");

  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSignIn = () => {
    if (!email || !password) {
      setError("Please enter both email and password.");
      return;
    }
    if (!validateEmail(email)) {
      setError("Please enter a valid email address.");
      return;
    }
    setError("");
    alert("Sign in successful! (Demo)");
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-white rounded-xl z-1">
      <div className="w-full max-w-sm   rounded-3xl shadow-xl  p-8 flex flex-col items-center border  text-black">
        <div className="flex items-center justify-center w-14 h-14 rounded-2xl bg-white mb-6 ">
          <LogIn className="w-7 h-7 text-black" />
        </div>
        <h2 className="text-2xl font-semibold mb-2 text-center">
          Sign in with email
        </h2>

        <div className="w-full flex flex-col gap-3 mb-2">
          <div className="relative">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
              <Mail className="w-4 h-4" />
            </span>
            <input
              placeholder="Email or Username"
              type="text"
              value={identification}
              className="w-full pl-10 pr-3 py-2 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-200 bg-gray-50 text-black text-sm"
              onChange={(e) => setIndentification(e.target.value)}
            />
          </div>
          <div className="relative">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
              <Lock className="w-4 h-4" />
            </span>
            <input
              placeholder="Password"
              type="password"
              value={password}
              className="w-full pl-10 pr-10 py-2 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-200 bg-gray-50 text-black text-sm"
              onChange={(e) => setPassword(e.target.value)}
            />

            <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 cursor-pointer text-xs select-none"></span>
          </div>
          <div className="w-full flex justify-end">
            {error && (
              <div className="text-sm text-red-500 text-left">{error}</div>
            )}
            <button className="text-xs hover:underline font-medium">
              Forgot password?
            </button>
          </div>
        </div>

        <div>
          <a href="/signup" className="text-xs hover:underline font-medium">Don{"'"}t have an account</a>
        </div>

        <button
          onClick={handleSignIn}
          className="w-full bg-gradient-to-b from-gray-700 to-gray-900 text-white font-medium py-2 rounded-xl shadow hover:brightness-105 cursor-pointer transition mb-4 mt-2"
        >
          Get Started
        </button>

        <div className="flex items-center w-full my-2 justify-center">
          <span className="mx-2 text-xs text-gray-400">Or sign in with</span>
        </div>
        <div className="flex gap-3 w-full justify-center mt-2">
          <button className="flex items-center justify-center w-12 h-12 rounded-xl border">
            <FaGoogle />
          </button>
          <button className="flex items-center justify-center w-12 h-12 rounded-xl border">
            <FaFacebook />
          </button>
          <button className="flex items-center justify-center w-12 h-12 rounded-xl border">
            <FaApple />
          </button>
        </div>
      </div>
    </div>
  );
};



export default Login