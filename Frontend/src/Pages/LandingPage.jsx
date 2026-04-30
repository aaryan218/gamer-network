import Header from "./components/Header";
import Hero from "./components/Hero";
import StatsGrid from "./components/StatsGrid";
import FeatureCards from "./components/FeatureCards";
import CommunitySection from "./components/CommunitySection";
import Footer from "./components/Footer";
import "./frontend.css";

function LandingPage() {
  return (
    <div className="landing-shell">
      <div className="landing-shell__container">
        <Header />
        <Hero />
        <StatsGrid />
        <FeatureCards />
        <CommunitySection />
        <Footer />
      </div>
    </div>
  );
}

export default LandingPage;
