import { Heading, HStack, Link, Text } from "@chakra-ui/react"

const Navbar: React.FC = () => {
    return (
        <HStack justify="space-between" pt={5} pb={5} >
            <Heading>Mamba Labs</Heading>
            <HStack color="gray.500" >
                <Link href="#" variant="underline" >Nos solutions</Link>
                <Link href="#" variant="underline">A propos</Link>
                <Link href="#" variant="underline">A propos</Link>
            </HStack>
        </HStack>
    )
}

export default Navbar