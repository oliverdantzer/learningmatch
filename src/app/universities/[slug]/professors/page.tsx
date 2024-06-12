import { professorsByFaculty } from "@/app/lib/professors";
import { FacultyDropdown } from "./facultyDropdown";

export default function Professors() {
  return (
    <div className="w-full">
      {Object.keys(professorsByFaculty).map(
        (faculty: string, index: number) => {
          return (
            <FacultyDropdown
              key={index}
              faculty={faculty}
              professors={professorsByFaculty[faculty]}
            />
          );
        }
      )}
    </div>
  );
}
