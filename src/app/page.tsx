import ProfileCard from "./compents/cv/ProfileCard";
import RightSidebarNav from "./compents/cv/RightSidebarNav";
import HeroSection from "./compents/cv/HeroSection";
import TimelineSection from "./compents/cv/TimelineSection";
import ServicesSection from "./compents/cv/ServicesSection";
import PortfolioSection from "./compents/cv/PortfolioSection";
import ContactSection from "./compents/cv/ContactSection";

export default function Home() {
  return (
    <main className="relative min-h-screen text-white max-w-[1440px] mx-auto px-4 md:px-8 lg:px-12">
      {/* 
        This div layout ensures the profile is on the left, 
        main content in the center, and the right navigation floats.
      */}
      <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 relative py-12">

        {/* Left Column: Fixed Profile Card */}
        <aside className="w-full lg:w-[380px] shrink-0 z-10 sticky top-12 self-start">
          <ProfileCard />
        </aside>

        {/* Center Content: Scrollable Sections */}
        <div className="flex-1 max-w-[800px] w-full z-10 pb-20">
          <HeroSection />
          <TimelineSection />
          <ServicesSection />
          <PortfolioSection />
          <ContactSection />
        </div>

      </div>

      {/* Right Column: Floating Navigation Nav */}
      <div className="hidden lg:block">
        <RightSidebarNav />
      </div>
    </main>
  );
}
