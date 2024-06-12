import computing from "@/data/queens-professors/computing.json";
import business from "@/data/queens-professors/business.json";

export type Professor = {
  name: string;
  title: string;
  image: string;
};

const professorsByFaculty: { [faculty: string]: Professor[] } = {
  Business: business,
  Computing: computing,
};

export { professorsByFaculty };
