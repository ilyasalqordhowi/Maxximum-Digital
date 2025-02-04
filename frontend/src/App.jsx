import CallToAction from "./component/CallToAction";
import CaseStudies from "./component/CaseStudies";
import ContactUs from "./component/ContactUs";
import HeroSection from "./component/HeroSection";
import ServiceCard from "./component/ServiceCard";
import WorkingProcess from "./component/WorkingProcess";

function App() {
  return (
    <>
      <HeroSection />
      <ServiceCard />
      <CallToAction />
      <CaseStudies />
      <WorkingProcess />
      <ContactUs />
    </>
  );
}

export default App;
