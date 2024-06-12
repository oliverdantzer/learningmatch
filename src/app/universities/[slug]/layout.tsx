import Link from "next/link";
import Image from "next/image";
import { ReactNode } from "react";
import { universities } from "@/data/universities";
import { notFound } from "next/navigation";

export default function Layout({
  children,
  params,
}: {
  children: ReactNode;
  params: { slug: string };
}) {
  const university = universities.find(
    (university) => university.id === params.slug
  );
  if (!university) notFound();
  return (
    <div className="flex flex-col">
      <div className="h-56 overflow-hidden relative">
        <div className="relative blur-sm w-[110%] h-[110%]">
          <Image
            src={`/university-bgs/${params.slug}.webp`}
            alt={`Logo of ${university.name}`}
            className="object-cover"
            fill
          />
        </div>
        <div className="absolute top-1/2 left-8 transform -translate-y-1/2">
          <div className="flex gap-8 items-center">
            <div className="w-32 h-32 p-4 bg-brand-white shadow-xl">
              <div className="relative w-full h-full">
                <Image
                  src={`/university-logos/${params.slug}.png`}
                  alt={`Logo of ${university.name}`}
                  className="object-contain"
                  fill
                />
              </div>
            </div>
            <div className="flex flex-col text-brand-white drop-shadow-2xl">
              <h2 className="font-bold">{university.name}</h2>
              <h2>Kingston, Ontario</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="flex">
        <nav className="bg-brand-light text-brand-white py-4 w-56 h-full">
          <ul className="flex flex-col p-4 font-bold gap-4">
            <li>
              <Link href={`/universities/${params.slug}`}>Overview</Link>
            </li>
            <li>
              <Link href={`/universities/${params.slug}/programs`}>
                Programs
              </Link>
            </li>
            <li>
              <Link href={`/universities/${params.slug}/courses`}>Courses</Link>
            </li>
            <li>
              <Link href={`/universities/${params.slug}/professors`}>
                Professors
              </Link>
            </li>
            <li>
              <Link href={`/universities/${params.slug}/residences`}>
                Residences
              </Link>
            </li>
            <li>
              <Link href={`/universities/${params.slug}/resources`}>
                Resources
              </Link>
            </li>
          </ul>
        </nav>
        {children}
      </div>
    </div>
  );
}
