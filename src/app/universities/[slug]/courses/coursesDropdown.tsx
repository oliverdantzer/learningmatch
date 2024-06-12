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
  console.log(typeof courses);
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
      <div className="flex gap-4 items-center">
        <h3 className="font-bold">{course.code}</h3>
        {course.terms.map((term: string, index: number) => {
          return (
            <div
              key={index}
              className="p-2 bg-brand-white text-brand-light border-2 border-brand-dark"
            >
              {term}
            </div>
          );
        })}
      </div>
      <h3>{course.title}</h3>
      {course.prerequisites.length > 0 && (
        <div className="flex flex-wrap gap-2">
          Prerequisites:
          {course.prerequisites.map((code: string, index: number) => {
            return (
              <div key={index} className="text-nowrap font-bold">
                {code}
              </div>
            );
          })}
        </div>
      )}
      <Link
        className="p-2 border-2 border-brand-white"
        href={"/universities/queens/courses/CISC-204"}
      >
        <div>User reviews</div>
      </Link>
    </div>
  );
}
