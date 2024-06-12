"use client";
import { useState, useRef } from "react";
import { Course } from "@/app/lib/courses";
import Image from "next/image";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import Link from "next/link";
import { ImGit } from "react-icons/im";

export function FacultyDropdown({
  faculty,
  courses: courses,
}: {
  faculty: string;
  courses: Course[];
}) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="w-full">
      <div
        className="w-full p-6 bg-brand-light text-brand-white flex gap-2 items-center hover:cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        {faculty} <span>{isOpen ? <FaChevronUp /> : <FaChevronDown />}</span>
      </div>
      {isOpen && (
        <ul className="grid grid-cols-3 gap-4">
          {courses.map((course: Course, index) => {
            return (
              <li key={index}>
                <CourseButton course={course} />
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}

function CourseButton({ course }: { course: Course }) {
  const score = useRef(Math.random() * 3 + 2);
  return (
    <div className="p-4 bg-brand-dark text-brand-white flex flex-col justify-center gap-2 h-full">
      <h3 className="font-bold">{course.code}</h3>
      <h3>{course.title}</h3>
      <Link href={"/universities/queens/courses/CISC-204"}>
        <div>View prereqs, coreqs, and user reviews</div>
      </Link>
    </div>
  );
}
