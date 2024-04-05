import Link from "next/link";
import { Spotlight } from "./ui/Spotlight";

function HeroSection() {
  return (
    <div className="flex h-auto w-full md:h-[40rem] flex-col justify-center items-center relative py-10 md:py-0 rounded-md overflow-hidden mx-auto">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />{" "}
      <div className="p-4 w-full text-center relative z-10">
        <h1 className="mt-20 md:mt-0 text-4xl md:text-7xl bg-clip-text bg-gradient-to-b font-bold from-neutral-50 text-transparent to-neutral-400">
          Master The Art Of The Music
        </h1>
        <p className="mt-4 font-normal text-base text-neutral-300 max-w-lg mx-auto md:text-lg">
          Dive into comprehensive music courses and transform your music journey
          today, whether you are beginner you looking to refine your skills,join
          us to unlock your true potential.
        </p>
        <div className="mt-4">
          <Link href={"/courses"}>Explore Courses</Link>
        </div>
      </div>
    </div>
  );
}
export default HeroSection;
