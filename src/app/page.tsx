import { ContactUs } from "./components/ContactUs";
import FeaturedCourses from "./components/FeaturedCourses";
import Footer from "./components/Footer";
import HeroSection from "@/app/components/HeroSection"
import Instructors from "./components/Instructors";
import MusicSchoolTestimonial from "./components/TestimonialCards";
import  FocusCards  from "./components/FocusCard";
import UpcomingWebinars from "./components/UpcomingWebinars";
import WhyChooseUs from "./components/WhyChooseUs";
import ModelCard from "./components/ModelCard"
import {NavbarDemo} from "@/app/components/Navbar"
import Models from "@/app/components/Models"


export default function Home() {
  return (
    
    <main className="min-h-screen bg-white/[0.96] antialiased bg-grid-white/[0.02]">
    <NavbarDemo/>
    <HeroSection/>

    

    <div className="space-y-12 px-6">
  {/* Section 1 */}
  <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
    <div className="w-full md:w-1/2">
      <Models />
    </div>
    <div className="w-full md:w-1/2 text-center md:text-left">
      <img
        src="/path/to/image1.jpg"
        alt="Description 1"
        className="w-full h-auto mb-4 rounded-lg"
      />
      
    </div>
  </div>

  {/* Section 2 */}
  <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
    <div className="w-full md:w-1/2">
      <Models />
    </div>
    <div className="w-full md:w-1/2 text-center md:text-left">
      <img
        src="/path/to/image2.jpg"
        alt="Description 2"
        className="w-full h-auto mb-4 rounded-lg"
      />
    </div>
  </div>
  <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
    <div className="w-full md:w-1/2">
      <Models />
    </div>
    <div className="w-full md:w-1/2 text-center md:text-left">
      <img
        src="D:\projects\music-app\src\app\images\AlexNet.png"
        alt="AlexNet"
        className="w-full h-auto mb-4 rounded-lg"
      />
      
    </div>
  </div>
  <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
    <div className="w-full md:w-1/2">
      <Models />
    </div>
    <div className="w-full md:w-1/2 text-center md:text-left">
      <img
        src="D:\projects\music-app\src\app\images\InceptionV3.png"
        alt="InceptionV3"
        className="w-full h-auto mb-4 rounded-lg"
      />
      
    </div>
  </div>
</div>



    
    
    <MusicSchoolTestimonial/>
    
    <Instructors/>
    
    <Footer/>
    </main>
  );
}
