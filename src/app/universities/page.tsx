"use client";
import Image from "next/image";
import { universities, University } from "@/data/universities";
import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

export default function Universities() {
  let [universitiesSorted, setUniversitiesSorted] = useState(universities);
  function sortUniversities() {
    setUniversitiesSorted([...universities].sort(() => Math.random() - 0.5));
  }
  const sortingMetrics = [
    "Overall",
    "Research",
    "Teaching",
    "International outlook",
  ];
  const byProgram = [
    "Overall",
    "Business",
    "Engineering",
    "Computer Science",
    "Medicine",
    "Law",
    "Arts",
    "Science",
    "Mathematics",
    "Nursing",
  ];

  return (
    <div>
      <ul className="flex text-brand-white bg-brand-dark p-2 gap-4">
        <li className="flex items-center gap-2">
          By metric:
          <SortDropdown
            metrics={sortingMetrics}
            sortUniversities={sortUniversities}
          />
        </li>
        <li className="flex items-center gap-2">
          By program:
          <SortDropdown
            metrics={byProgram}
            sortUniversities={sortUniversities}
          />
        </li>
      </ul>
      <ul className="grid grid-cols-4 gap-4 p-4">
        {universitiesSorted.map((university: University, index: number) => (
          <li key={index} className="">
            <UniversityButton university={university} number={index + 1} />
          </li>
        ))}
      </ul>
    </div>
  );
}

function SortDropdown({
  metrics,
  sortUniversities,
}: {
  metrics: string[];
  sortUniversities: () => void;
}) {
  const [currentMetric, setCurrentMetric] = useState("Overall");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  return (
    <div className="relative bg-brand-light rounded-lg">
      <button
        onClick={() => setDropdownOpen(!dropdownOpen)}
        className="p-4 hover:cursor-pointer flex gap-2 items-center"
      >
        {currentMetric} <FaChevronDown />
      </button>
      {dropdownOpen && (
        <ul className="absolute top-12 left-0 z-10 bg-brand-light gap-2 border-2 border-brand-dark">
          {metrics.map((metric) => (
            <li
              key={metric}
              className="hover:cursor-pointer p-2"
              onClick={() => {
                setCurrentMetric(metric);
                setDropdownOpen(false);
                sortUniversities();
              }}
            >
              {metric}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

function UniversityButton({
  university,
  number,
}: {
  university: University;
  number: number;
}) {
  return (
    <a
      href={`/universities/${university.id}`}
      className="p-4 bg-brand-dark text-brand-white flex flex-col justify-center gap-2"
    >
      <div className="relative w-40 h-32 p-2 bg-brand-white">
        <Image
          src={`/university-logos/${university.id}.png`}
          alt={`Logo of ${university.name}`}
          className="object-contain"
          fill
        />
      </div>
      <h3 className="font-bold">
        #{number}: {university.name}
      </h3>
    </a>
  );
}
