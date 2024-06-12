import { parsedReviews, Review } from "@/data/cisc-124-ratemyprof";
import { coursesByFaculty } from "@/app/lib/courses";
import { notFound } from "next/navigation";

export default function Course({ params }: { params: { courseSlug: string } }) {
  const decodedCourse = decodeURIComponent(params.courseSlug);
  console.log(decodedCourse);
  const course = coursesByFaculty["Computing"].find(
    (course) => course.code.toLowerCase() === decodedCourse.toLowerCase()
  );
  if (!course) {
    notFound();
  }
  return (
    <div className="bg-brand-light text-brand-white">
      <div className="flex gap-4 items-center">
        <h3 className="font-bold text-xl">{course.code}</h3>
        {course.terms.map((term: string, index: number) => {
          return (
            <div
              key={index}
              className="p-2 bg-brand-white text-brand-light border-2 border-brand-dark"
            >
              {term}
            </div>
          );
        })}
      </div>
      <h3 className="font-bold text-lg">{course.title}</h3>
      <p>{course.description}</p>
      {course.prerequisites.length > 0 && (
        <div className="flex flex-wrap gap-2">
          Prerequisites:
          {course.prerequisites.map((code: string, index: number) => {
            return (
              <div key={index} className="text-nowrap font-bold">
                {code}
              </div>
            );
          })}
        </div>
      )}
      <h2 className="text-xl font-bold">Reviews</h2>
      <ul className="grid grid-cols-2 gap-4 p-4">
        {parsedReviews.map((review: Review, index: number) => (
          <li key={index} className="">
            <ReviewTile review={review} />
          </li>
        ))}
      </ul>
    </div>
  );
}

function ReviewTile({ review }: { review: Review }) {
  return (
    <div className="border p-4 rounded-md flex gap-4">
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <div>Quality</div>{" "}
          <div className="p-2 bg-brand-white text-brand-dark">
            {review.quality}
          </div>
        </div>
        <div className="flex flex-col gap 2">
          <div>Difficulty</div>{" "}
          <div className="p-2 bg-brand-white text-brand-dark">
            {review.difficulty}
          </div>
        </div>
      </div>
      <div>
        <h3>{review.date}</h3>
        <p className="font-bold">{`"${review.comment}"`}</p>
        <p>Attendance: {review.attendance}</p>
        <p>Would Take Again: {review.wouldTakeAgain ? "Yes" : "No"}</p>
        {review.grade && <p>Grade: {review.grade}</p>}
        {review.textbook && <p>Textbook: {review.textbook}</p>}
        <ul className="flex gap-2">
          {review.tags.map((tag, index) => (
            <li className="p-2 bg-brand-white text-brand-dark" key={index}>
              {tag}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
