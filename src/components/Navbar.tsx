import { HStack, Text } from "@chakra-ui/react"

const Navbar: React.FC = () => {
    return (
        <HStack justify="space-between" >
            <Text>Mamba Labs</Text>
            <HStack >
                <Text>A propos</Text>
                <Text>A propos</Text>
                <Text>A propos</Text>
            </HStack>
        </HStack>
    )
}

export default Navbar