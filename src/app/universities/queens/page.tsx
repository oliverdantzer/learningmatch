import Link from "next/link";
import Image from "next/image";

export default function Queens() {
  return (
    <div className="flex h-full">
      <nav className="bg-brand-light text-brand-white py-4 w-56">
        <div className="relative w-full h-32 p-2">
          <Image
            src={`/university-logos/queens.png`}
            alt={`Logo of queens`}
            className="object-contain"
            fill
          />
        </div>
        <ul className="flex flex-col p-4 font-bold gap-4">
          <li>
            <Link href="/programs">Programs</Link>
          </li>
          <li>
            <Link href="/courses">Courses</Link>
          </li>
          <li>
            <Link href="/professors">Professors</Link>
          </li>
          <li>
            <Link href="/residences">Residences</Link>
          </li>
          <li>
            <Link href="/resources">Resources</Link>
          </li>
        </ul>
      </nav>
      <div className="flex-grow p-4 bg-brand-light text-brand-white">
        <div className="relative w-full h-56 p-2">
          <Image
            src={`/university-bgs/queens.webp`}
            alt={`Logo of queens`}
            className="object-cover"
            fill
          />
        </div>
        <h2 className="text-2xl font-bold mb-4">Queens University</h2>
        <ul>
          <li>Acceptance Rate: 42%</li>
          <li>International Student Percentage: 15%</li>
          <li>Student to Faculty Ratio: 12:1</li>
          <li>Number of Majors: 70+</li>
          <li>Worldwide ranking: 400</li>
          <li>Canadian ranking: 12</li>
        </ul>
      </div>
    </div>
  );
}
