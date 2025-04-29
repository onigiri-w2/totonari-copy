import TopPageHeader from "./_components/Header";
import { sectionIds } from "@/const";
import Hero from "./_components/sections/Hero";
import Footer from "@/components/Footer";
import ConceptSection from "./_components/sections/ConceptSection";
import SceneSection from "./_components/sections/SceneSection";
import ServiceSection from "./_components/sections/ServiceSection";
import ReviewSection from "./_components/sections/ReviewSection";
import PhotoGallery from "./_components/sections/PhotoGallerySection";
import FeatureSection from "./_components/sections/FeatureSection";
import PriceSection from "./_components/sections/PriceSection";
import ScheduleSection from "./_components/sections/ScheduleSection";
import InstagramSection from "./_components/sections/InstagramSection";
import FaqSection from "./_components/sections/FaqSection";
import ContactSection from "./_components/sections/ContactSection";
import { Metadata } from "next";


export const metadata: Metadata = {
  title: "totonari",
  description: "totonari（トトナリ）は、審査によって選ばれた男女8人による2泊3日の共同生活を提供する共同生活型恋愛サービスです。",
};
export default function Home() {
  return (
    <div>
      <header className="fixed z-20 top-0 inset-x-0">
        <TopPageHeader boundaryId={sectionIds.concept} />
      </header>
      <main>
        <div className="relative z-0">
          <Hero />
        </div>
        <div className="relative z-10 bg-primary">
          <ConceptSection />
          <SceneSection />
          <ServiceSection />
          <ReviewSection />
          <PhotoGallery />
          <FeatureSection />
          <PriceSection />
          <ScheduleSection />
          <InstagramSection />
          <FaqSection />
          <ContactSection />
        </div>
        <footer className="relative z-10">
          <Footer />
        </footer>
      </main>
    </div>
  );
}
