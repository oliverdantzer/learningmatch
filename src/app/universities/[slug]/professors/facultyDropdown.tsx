"use client";
import { useState, useRef } from "react";
import { Professor } from "@/app/lib/professors";
import Image from "next/image";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import Link from "next/link";
import { ImGit } from "react-icons/im";

export function FacultyDropdown({
  faculty,
  professors,
}: {
  faculty: string;
  professors: Professor[];
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
          {professors.map((professor: Professor, index) => {
            return (
              <li key={index}>
                <ProfessorButton professor={professor} />
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}

function ProfessorButton({ professor }: { professor: Professor }) {
  const score = useRef(Math.random() * 3 + 2);
  return (
    <div className="p-4 bg-brand-dark text-brand-white flex flex-col justify-center gap-2 h-full">
      <div className="relative w-full h-72 p-2 bg-brand-white">
        <img
          src={`${professor.image}`}
          alt={`Headshot of ${professor.name}`}
          className="object-cover w-full h-full"
        />
      </div>
      <h3 className="font-bold">{professor.name}</h3>
      <h3>{professor.title}</h3>
      <Link
        href={"https://www.ratemyprofessors.com/professor/1163873"}
        rel="noopener noreferrer"
        target="_blank"
      >
        <div>
          {professor.name == "Shamell Addas" ? 3.8 : score.current.toFixed(1)}/5
          stars
        </div>
        <div>View on RateMyProf</div>
      </Link>
    </div>
  );
}
