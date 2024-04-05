"use client";
import Link from "next/link";
import courseData from "../data/music_courses.json";
import { BackgroundGradient } from "./ui/background-gradient";
interface Course {
  id: number;
  title: string;
  slug: string;
  description: string;
  price: number;
  instructor: string;
  isFeatured: boolean;
}
function FeaturedCourses() {
  const featuredCourses: Course[] = courseData.courses.filter(
    (course: Course) => course.isFeatured
  );
  return (
    <div className="bg-gray-900 py-12">
      <div className="w-full flex flex-col items-center">
        <h2 className="text-teal-600  tracking-wide uppercase font-bold text-base">
          FEATURED COURSES
        </h2>

        <p className="text-3xl font-extrabold tracking-tight mt-2 text-white leading-8 md:text-4xl">
          Learn With THe Best
        </p>
        <div className="mt-10 w-full">
          <div className="grid grid-cols-1 gap-8 justify-center  sm:grid-cols-2 lg:grid-cols-3">
            {featuredCourses.map((course) => (
              <div key={course.id} className="flex justify-center">
                <BackgroundGradient className="flex overflow-hidden p-2 flex-col items-center max-w-sm h-full rounded-[22px] bg-black">
                  <h3 className="text-2xl text-center font-bold mb-4 text-slate-50">
                    {course.title}
                  </h3>
                  <div className="flex flex-col  items-center w-full flex-grow">
                    <p className=" text-xl text-center font-medium text-slate-400">
                      {course.description}
                    </p>
                    <p className="mt-4">
                      <span className="text-slate-200 text-xl">
                        Instructor :{" "}
                      </span>
                      {course.instructor}
                    </p>

                    <p className="mt-2">
                      Price:
                      <span className="animate-pulse text-yellow-400 font-bold">
                        {new Intl.NumberFormat("en-US", {
                          style: "currency",
                          currency: "USD",
                        }).format(course.price)}
                      </span>
                    </p>
                  </div>
                  <Link
                    className=" bg-gradient-to-b mt-2 from-gray-50 to-gray-300 text-slate-900 rounded-md font-medium px-2 py-1"
                    href={`/courses${course.slug}`}
                  >
                    Learn More
                  </Link>
                </BackgroundGradient>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-20 text-center">
          <Link
            className="bg-gradient-to-b from-gray-50 to-gray-400 text-slate-900 py-1 px-2 font-medium  rounded-sm "
            href={"/courses"}
          >
            View All Courses
          </Link>
        </div>
      </div>
    </div>
  );
}
export default FeaturedCourses;
