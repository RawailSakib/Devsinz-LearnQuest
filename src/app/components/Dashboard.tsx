"use client";
import React from "react";
import LectureItem from "../components/LectureItem";

const lectures = [
  {
    title: "Course 1: Introduction to Next.js",
    description: "Learn the basics of Next.js.",
    lectureId: "course-1",
    thumbnail: "/learn.png",
  },
  {
    title: "Course 2: Firebase Authentication",
    description: "Implement authentication using Firebase.",
    lectureId: "course-2",
    thumbnail: "/Learn1.png",
  },
  {
    title: "Course 3: Tailwind CSS Integration",
    description: "Style your app with Tailwind CSS.",
    lectureId: "course-3",
    thumbnail: "/Learn2.png",
  },
  {
    title: "Course 4: Basics of Javascript",
    description: "The Best way to learn development.",
    lectureId: "course-4",
    thumbnail: "/Learn3.png",
  },
  {
    title: "Course 5: Best tips and trick43s for marketing",
    description: "Best for digital marketing strategies",
    lectureId: "course-5",
    thumbnail: "/Learn4.png",
  },
  {
    title: "Course 6: Next.js Authentication",
    description: "Best and simple explained",
    lectureId: "course-6",
    thumbnail: "/nextauth.png",
  },
  {
    title: "Course 7:Build your portfolio website ",
    description: "Showcase your skills in new manner",
    lectureId: "course-7",
    thumbnail: "/portfolio.png",
  },
  {
    title: "Course 8:Become a freelancer",
    description: "Best strategies to utilies your skills to earn",
    lectureId: "course-8",
    thumbnail: "/freelancer.png",
  },
  {
    title: "Course 9:Mongo DB Setup ",
    description: "complete guide for setting up mongodb",
    lectureId: "course-9",
    thumbnail: "/Mongodb.png",
  },
];

const Dashboard = () => {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Your Courses</h1>
      <div className="bg-white shadow-md rounded transition duration-300 ease-in-out">
        {lectures.map((lecture) => (
          <LectureItem
            key={lecture.lectureId}
            title={lecture.title}
            description={lecture.description}
            lectureId={lecture.lectureId}
            thumbnail={lecture.thumbnail}
          />
        ))}
      </div>
    </div>
  );
};
export default Dashboard;
