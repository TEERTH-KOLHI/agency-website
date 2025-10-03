import VocalChatStyleHero from "@/components/VocalChatStyleHero/VocalChatStyleHero";
import WorkflowSection from "@/components/WorkflowSection/WorkflowSection";
import ComparisonSection from "@/components/ComparisonSection/ComparisonSection";
import ServicesSection from "@/components/ServicesSection/ServicesSection";
import FAQSectionNew from "@/components/FAQSectionNew/FAQSectionNew";
import CTASection from "@/components/CTASection/CTASection";
import Review from "@/components/Review/review";
import IndustrySolutions from "@/components/industry-solutions/industry-solutions";
import FlowChart from "@/components/FlowChart/FlowChart";

export default function Home() {
  return (
    <div>
      <VocalChatStyleHero />
      <FlowChart />
      <WorkflowSection />
      <ComparisonSection />
      <ServicesSection />
      <IndustrySolutions />
      <FAQSectionNew />
      <Review />
      <CTASection />
    </div>
  );
}
