// import { Button } from "@chakra-ui/react"
import { Lumiflex, Novatrix } from "uvcanvas"
import ShaderCanvas from "./components/ShaderCanvas"
import { Container } from "@chakra-ui/react"
import Navbar from "./components/Navbar"
import PricingSection from "./sections/PriceSection"
import ProjectsSection from "./sections/ProjectSection"
import HeroSection from "./sections/HeroSection"
import ServicesSection from "./sections/ServicesSection"
import Footer from "./sections/Footer"

function App() {

  return (
    <>
      <Container zIndex={2} color="white" >
        <Navbar />
        <HeroSection />
        <ProjectsSection />
        <ServicesSection />
        <PricingSection />
        <Footer />
      </Container>



    </>
  )
}

export default App
