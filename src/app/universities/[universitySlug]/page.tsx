import Link from "next/link";
import Image from "next/image";

export default function Queens() {
  return (
    <div className="flex-grow p-4 text-brand-white">
      <h2 className="text-2xl font-bold mb-4">Queens University Overview</h2>
      <ul>
        <li>Acceptance Rate: 42%</li>
        <li>International Student Percentage: 15%</li>
        <li>Student to Faculty Ratio: 12:1</li>
        <li>Number of Majors: 70+</li>
        <li>Worldwide ranking: 400</li>
        <li>Canadian ranking: 12</li>
      </ul>
    </div>
  );
}
