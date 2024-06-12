const reviews = [
  `
QUALITY
1.0
DIFFICULTY
5.0
CISC124
Dec 5th, 2023
For Credit: Yes
Attendance: Not Mandatory
Grade: C
Textbook: N/A
Exercise extreme caution! Engaging with this instructor poses a serious risk to your academic standing! His course is a substantial waste of time and resources! His grading system is unreasonably harsh, penalizing minor errors with zero scores, which is unjust and needs immediate address!
TOUGH GRADER
LECTURE HEAVY
TEST HEAVY`,

  `QUALITY
4.0
DIFFICULTY
3.0
CISC124
Jan 20th, 2024
For Credit: Yes
Attendance: Not Mandatory
Would Take Again: Yes
Grade: A+
Textbook: N/A
Projects are easy, and approachable. Really gained knowledge from this course, very appropriate Dr. Ma.`,

  `QUALITY
5.0
DIFFICULTY
2.0
CISC124
Jan 25th, 2024
For Credit: Yes
Attendance: Not Mandatory
Would Take Again: Yes
Textbook: N/A
course was well organized, and professor Ma was very helpful during labs
CARING
RESPECTED
ACCESSIBLE OUTSIDE CLASS`,
];

export type Review = {
  quality: number;
  difficulty: number;
  courseCode: string;
  date: string;
  forCredit: boolean;
  attendance: string;
  wouldTakeAgain: boolean;
  grade?: string;
  textbook?: string;
  comment: string;
  tags: string[];
};

export const parsedReviews: Review[] = reviews.map((review) => {
  const lines = review.split("\n").filter(Boolean); // filter(Boolean) is used to remove empty lines
  return {
    quality: parseFloat(lines[1]),
    difficulty: parseFloat(lines[3]),
    courseCode: lines[4],
    date: lines[5],
    forCredit: lines[6].split(": ")[1] === "Yes",
    attendance: lines[7].split(": ")[1],
    wouldTakeAgain: lines[8]?.split(": ")[1] === "Yes", // The '?' is used because some reviews don't have this line
    grade: lines[9]?.split(": ")[1], // The '?' is used because some reviews don't have this line
    textbook: lines[10]?.split(": ")[1], // The '?' is used because some reviews don't have this line
    comment: lines[11],
    tags: lines.slice(12),
  };
});
