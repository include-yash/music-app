import { ContactUs } from "./components/ContactUs";
import FeaturedCourses from "./components/FeaturedCourses";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import Instructors from "./components/Instructors";
import MusicSchoolTestimonial from "./components/TestimonialCards";
import UpcomingWebinars from "./components/UpcomingWebinars";
import WhyChooseUs from "./components/WhyChooseUs";

export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
    

    <HeroSection>

    </HeroSection>

    <FeaturedCourses>

    </FeaturedCourses>

    <WhyChooseUs/>
    <MusicSchoolTestimonial/>
    <UpcomingWebinars/>
    <Instructors/>
    
    <Footer/>
    </main>
  );
}
