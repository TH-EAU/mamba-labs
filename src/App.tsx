// import { Button } from "@chakra-ui/react"
import { Lumiflex, Novatrix } from "uvcanvas"
import ShaderCanvas from "./components/ShaderCanvas"
import { Container } from "@chakra-ui/react"
import Navbar from "./components/Navbar"

function App() {

  return (
    <>
      <Container >
        <Navbar />
        <ShaderCanvas />
      </Container>



    </>
  )
}

export default App
