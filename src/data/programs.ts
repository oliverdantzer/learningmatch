export type Program = {
  name: string;
  competitiveAdmissionAverage: string;
  highSchoolPrerequisites: string[];
  canadianRanking: number;
  worldRanking: number;
  tuitionDomestic: string;
  tuitionInternational: string;
  additionalPrerequisites?: string;
  remainingPrerequisites?: string;
};

export const programs: Program[] = [
  {
    name: "Science",
    competitiveAdmissionAverage: "Low 80's",
    highSchoolPrerequisites: [
      "English 4U",
      "Advanced Functions 4U",
      "Calculus and Vectors 4U",
      "Two of Biology 4U, Chemistry 4U, or Physics 4U",
    ],
    remainingPrerequisites: "An additional 4U or 4M course",
    canadianRanking: 15,
    worldRanking: 284,
    tuitionDomestic: "$7,480.55",
    tuitionInternational: "$56,961.65",
  },
  {
    name: "Computing",
    competitiveAdmissionAverage: "Mid 80's",
    highSchoolPrerequisites: [
      "English 4U",
      "Advanced Functions 4U",
      "Calculus and Vectors 4U",
    ],
    remainingPrerequisites: "3 additional 4U or 4M courses",
    canadianRanking: 13,
    worldRanking: 245,
    tuitionDomestic: "$8,293.15",
    tuitionInternational: "$56,981.65",
  },
  {
    name: "Commerce",
    competitiveAdmissionAverage: "87+",
    highSchoolPrerequisites: [
      "English 4U (Min 80%)",
      "Calculus and Vectors 4U (Min 80%)",
      "An additional 4U Mathematics (Min 80%)",
    ],
    remainingPrerequisites: "3 additional 4U or 4M courses",
    additionalPrerequisites:
      "No more than two 4M courses from the same discipline.",
    canadianRanking: 2,
    worldRanking: 82,
    tuitionDomestic: "$17,756.88",
    tuitionInternational: "$61,581.18",
  },
  {
    name: "Engineering",
    competitiveAdmissionAverage: "High 80's",
    highSchoolPrerequisites: [
      "English 4U",
      "Advanced Functions 4U",
      "Calculus and Vectors 4U",
      "Chemistry 4U",
      "Physics 4U",
    ],
    canadianRanking: 11,
    worldRanking: 211,
    tuitionDomestic: "$13,424.76",
    tuitionInternational: "$61,550.18",
  },
];
