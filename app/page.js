import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Statistics from "@/components/Statistics";
import FinancialServices from "@/components/FinancialServices";
import DigitalSolutions from "@/components/DigitalSolutions";
import ReadyToExperience from "@/components/ReadyToExperience";
import EnterpriseFinancialSystems from "@/components/EnterpriseFinancialSystems";
import ShariahFramework from "@/components/ShariahFramework";
import SahaypayDigitalWallet from "@/components/SahaypayDigitalWallet";
import BankingTechnology from "@/components/BankingTechnology";
import Leadership from "@/components/Leadership";
import FreeTools from "@/components/FreeTools";
import FinancedProjects from "@/components/FinancedProjects";
import TrustedPartners from "@/components/TrustedPartners";
import RaysStory from "@/components/RaysStory";
import CustomerSuccessStories from "@/components/CustomerSuccessStories";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-[#F8F8F8]">
      <Navigation />
      <main className="flex-1">
        <Hero />
        <Statistics />
        <FinancialServices />
        <DigitalSolutions />
        <ReadyToExperience />
        <EnterpriseFinancialSystems />
        <ShariahFramework />
        <SahaypayDigitalWallet />
        <BankingTechnology />
        <Leadership />
            <FreeTools />
            <FinancedProjects />
            <TrustedPartners />
            <RaysStory />
            <CustomerSuccessStories />
          </main>
          <Footer />
    </div>
  );
}
