import FeaturedCourses from "@/components/FeaturedCourses";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Instructors from "@/components/Instructors";
import MusicSchoolTestiMonials from "@/components/TestimonialsCards";
import UpcomingWebinars from "@/components/UpcomingWebinars";
// import WhyChooseUs from "@/components/WhyChooseUs";

export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.95] antialiased bg-grid-white/[0.02]">
      <HeroSection />
      <FeaturedCourses />
      {/* <WhyChooseUs /> */}
      <MusicSchoolTestiMonials />
      <UpcomingWebinars />
      <Instructors />
      <Footer />
    </main>
  );
}
