import computing from "@/data/queens-courses/computing.json";

export type Course = {
  code: string;
  title: string;
  terms: string[];
};

const coursesByFaculty: { [faculty: string]: Course[] } = {
  Business: [],
  Computing: computing,
};

export { coursesByFaculty };
