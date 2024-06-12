import { coursesByFaculty } from "@/app/lib/courses";
import { FacultyDropdown } from "./coursesDropdown";

export default function Professors() {
  return (
    <div className="w-full">
      {["business", "computing"].map((faculty: string, index: number) => {
        return (
          <FacultyDropdown
            key={index}
            faculty={faculty}
            courses={coursesByFaculty[faculty]}
          />
        );
      })}
    </div>
  );
}
