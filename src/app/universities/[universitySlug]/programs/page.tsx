"use client";
import { programs, Program } from "@/data/programs";

export default function Universities() {
  return (
    <div>
      <ul className="grid grid-cols-4 gap-4 p-4">
        {programs.map((program: Program, index: number) => (
          <li key={index} className="">
            <ProgramTile program={program} />
          </li>
        ))}
      </ul>
    </div>
  );
}

function ProgramTile({ program }: { program: Program }) {
  return (
    <div className="p-4 bg-brand-dark text-brand-white flex flex-col justify-center gap-2">
      <h3 className="font-bold">{program.name}</h3>
      <p>Canadian ranking: #{program.canadianRanking}</p>
      <p>International ranking: #{program.worldRanking}</p>
      <p>
        Competitive admission average: {program.competitiveAdmissionAverage}
      </p>
      <p>Domestic tuition: {program.tuitionDomestic}</p>
      <p>International tuition: {program.tuitionInternational}</p>
      <h4 className="font-medium">Admission prerequisites:</h4>
      <ul>
        {[
          ...program.highSchoolPrerequisites,
          program.remainingPrerequisites,
          program.additionalPrerequisites,
        ].map((prerequisite: string | undefined, index: number) => {
          return prerequisite ? <li>{prerequisite}</li> : null;
        })}
      </ul>
    </div>
  );
}
