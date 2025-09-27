import CommunityCards from "@/components/CommunityCards/CommunityCards";
import EarlyLifeProfile from "@/components/EarlyLifeProfile/earlylifeprofile";
import FAQSection from "@/components/FAQSection/FAQSection";
import HeroSection from "@/components/HeroSection/hero";
import HowToPlay from "@/components/HowToPlay/howtoplay";
import MarketingSkillsPage from "@/components/MarketingSkills/marketingskills";
import SuccessStoriesSection from "@/components/SuccessStoriesSection/SuccessStoriesSection";
import Image from "next/image";
import GrandmasCourse from "@/components/GrandmasCourse/GrandmasCourse";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <HowToPlay />
      <MarketingSkillsPage />
      <EarlyLifeProfile />
      <GrandmasCourse />
      <SuccessStoriesSection />
      <CommunityCards />
      <FAQSection />
    </div>
  );
}
