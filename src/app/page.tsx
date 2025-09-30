import VocalChatStyleHero from "@/components/VocalChatStyleHero/VocalChatStyleHero";
import WorkflowSection from "@/components/WorkflowSection/WorkflowSection";
import ComparisonSection from "@/components/ComparisonSection/ComparisonSection";
import ServicesSection from "@/components/ServicesSection/ServicesSection";
import FAQSectionNew from "@/components/FAQSectionNew/FAQSectionNew";
import CTASection from "@/components/CTASection/CTASection";

export default function Home() {
  return (
    <div>
      <VocalChatStyleHero />
      <WorkflowSection />
      <ComparisonSection />
      <ServicesSection />
      <FAQSectionNew />
      <CTASection />
    </div>
  );
}
