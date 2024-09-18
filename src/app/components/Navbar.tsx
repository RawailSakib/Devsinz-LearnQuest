"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { signOut } from "firebase/auth";
import { auth } from "@/firebase/config";
import { User } from "firebase/auth";

const Navbar = () => {
  const router = useRouter();
  const [user, setUser] = useState<User | null>(null); // Specify the type for user
  const [userName, setUserName] = useState("");

  useEffect(() => {
    const fetchUserData = async () => {
      const currentUser = auth.currentUser;
      if (currentUser) {
        setUser(currentUser);
        if (currentUser.displayName) {
          setUserName(currentUser.displayName);
        }
      }
    };

    fetchUserData();
  }, []);

  const handleLogout = async () => {
    try {
      console.log("Attempting to log out...");
      await signOut(auth);
      console.log("Logout successful");
      router.push("/Login");
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };

  return (
    <nav className="bg-gray-800 p-4 flex items-center justify-between">
      {/* Left side: Learn Quest logo or link */}
      <div>
        <Link href="/" className="text-white text-2xl font-bold">
          Learn Quest
        </Link>
      </div>

      {/* Center: Search bar */}
      <div className="flex-1 mx-4">
        <input
          type="text"
          placeholder="Search..."
          className="w-full p-2 rounded bg-gray-700 text-white"
        />
      </div>
      <div className="flex items-center space-x-4">
        <Link href="/profile">
          <div className="flex items-center">
            <img
              src="/pic.jpg"
              alt="Profile Icon"
              className="w-10 h-10 rounded-full"
            />
            {userName && (
              <div className="ml-2 text-white">
                <p>{userName}</p>
              </div>
            )}
          </div>
        </Link>
        <button
          onClick={handleLogout}
          className="text-white bg-transparent border-none cursor-pointer font-bold 
             transition duration-300 ease-in-out transform hover:scale-105 
             hover:text-blue-400 focus:outline-none"
        >
          Logout
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
