"use client";
import Link from "next/link";
import React from "react";

const LectureItem = ({ title, description, lectureId, thumbnail }: any) => {
  return (
    <div className="flex items-center p-4 border-b">
      <img
        src={thumbnail}
        alt={title}
        className="w-24 h-16 object-cover mr-4 rounded"
      />
      <div>
        <Link href={`/lecture/${lectureId}`}>
          <h2 className="text-xl font-semibold hover:text-blue-500">{title}</h2>
        </Link>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};

export default LectureItem;
