"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

const Profile = () => {
  const [name, setName] = useState("");
  const [education, setEducation] = useState("");
  const [age, setAge] = useState("");
  const [profileImage, setProfileImage] = useState("/pic.jpg"); // Default image
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    router.push("/Dashboard");
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Edit Profile</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block mb-1">
            Name
          </label>
          <input
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="border p-2 w-full"
          />
        </div>
        <div>
          <label htmlFor="education" className="block mb-1">
            Education
          </label>
          <input
            id="education"
            type="text"
            value={education}
            onChange={(e) => setEducation(e.target.value)}
            className="border p-2 w-full"
          />
        </div>
        <div>
          <label htmlFor="age" className="block mb-1">
            Age
          </label>
          <input
            id="age"
            type="number"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            className="border p-2 w-full"
          />
        </div>
        <div>
          <label htmlFor="profileImage" className="block mb-1">
            Profile Image URL
          </label>
          <input
            id="profileImage"
            type="text"
            value={profileImage}
            onChange={(e) => setProfileImage(e.target.value)}
            className="border p-2 w-full"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded"
        >
          Save Changes
        </button>
      </form>

      <div className="mt-8 flex items-center">
        <img
          src={"/pic.jpg"}
          alt="Profile"
          className="w-16 h-16 rounded-full"
        />
        {name && (
          <div className="ml-4">
            <p className="text-xl font-semibold">{name}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Profile;
