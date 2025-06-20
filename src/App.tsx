import { Container } from "@chakra-ui/react"
import Navbar from "./components/Navbar"
import PricingSection from "./sections/PriceSection"
import ProjectsSection from "./sections/ProjectSection"
import HeroSection from "./sections/HeroSection"
import ServicesSection from "./sections/ServicesSection"
import Footer from "./sections/Footer"
import ContactSection from "./sections/ContactSection"
import SuccessSection from "./sections/SuccessSection"
import TrustedBySection from "./sections/TrustedBySection"
import FadeInWrapper from "./components/FadeInWrapper"

function App() {

  return (
    <>
      <Container zIndex={2} color="white" >
        <Navbar />
        <HeroSection />
        <FadeInWrapper>
          <SuccessSection />
        </FadeInWrapper>
        {/* <FadeInWrapper>
          <TrustedBySection />
        </FadeInWrapper> */}
        <FadeInWrapper>
          <ProjectsSection />
        </FadeInWrapper>
        <FadeInWrapper>
          <ServicesSection />
        </FadeInWrapper>
        <FadeInWrapper>
          <PricingSection />
        </FadeInWrapper>
        <FadeInWrapper>
          <ContactSection />
        </FadeInWrapper>
        <Footer />
      </Container>



    </>
  )
}

export default App
