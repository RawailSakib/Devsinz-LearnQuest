"use client";
import React, { useState } from "react";
import { login, googleLogin } from "@/firebase/auth";
import { useRouter } from "next/navigation";

const AuthForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    try {
      await login({ email, password });
      router.push("/Dashboard");
    } catch (err: any) {
      if (err.code === "auth/wrong-password") {
        setError("Incorrect password. Please try again.");
      } else if (err.code === "auth/user-not-found") {
        setError("No user found with this email.");
      } else if (err.code === "auth/invalid-email") {
        setError("Invalid email format.");
      } else {
        setError("Failed to login. Please check your credentials.");
      }
      console.error("Error logging in:", err);
    }
  };

  const handleGoogleLogin = async () => {
    setError(null);

    try {
      await googleLogin();
      router.push("/Dashboard");
    } catch (err) {
      setError("Failed to login with Google.");
      console.error("Error logging in with Google:", err);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <form onSubmit={handleLogin} className="bg-white p-6 rounded shadow-md">
        <h2 className="text-2xl font-bold mb-4">Sign In</h2>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-2 mb-4 border border-gray-300 rounded"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-2 mb-4 border border-gray-300 rounded"
        />
        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
        >
          Login
        </button>

        {error && <div className="text-red-500 text-center mt-4">{error}</div>}

        <button
          type="button"
          onClick={handleGoogleLogin}
          className="flex items-center justify-center w-full p-2 rounded mt-4"
        >
          <img src="/google.png" alt="Google Icon" className="w-5 h-5 mr-2" />
          Sign in with Google
        </button>
        <button
          type="button"
          onClick={handleGoogleLogin}
          className="flex items-center justify-center w-full mt-4"
        >
          <img src="/facebook.png" alt="Google Icon" className="w-5 h-5 mr-2" />
          Sign in with Facebook
        </button>
      </form>
    </div>
  );
};

export default AuthForm;
