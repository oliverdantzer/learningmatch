import computing from "@/data/queens-courses/computing.json";

export type Course = {
  code: string;
  title: string;
  description: string;
  terms: string[];
  prerequisites: string[];
};

const coursesByFaculty: { [faculty: string]: Course[] } = {
  Business: [],
  Computing: computing,
};

export { coursesByFaculty };
