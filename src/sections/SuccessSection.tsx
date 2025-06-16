import { Box, Heading, VStack, Text, SimpleGrid, Image } from "@chakra-ui/react"

const SuccessSection = () => {
    return (
        <Box as="section" py={{ base: 12, md: 20 }}>
            <SimpleGrid columns={[1, 2]} gap={8} >
                <Image
                    src="https://images.unsplash.com/photo-1656772490672-03e5be859a28?q=80&w=1674&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="a boat"
                    rounded="2xl"
                />
                <VStack gap={4} align="left" mb={24}>
                    <Heading size="xl" >
                        Votre succès
                    </Heading>
                    <Heading
                        fontSize={{ base: "3xl", md: "5xl" }}>
                        Notre priorité
                    </Heading>
                    <Text maxW="2xl" >
                        Plongez dans une aventure partagée dès la conception de votre projet web avec un chef de projet dédié, assurant une parfaite cohésion et une comphérension absolue de vos besoins.
                    </Text>
                </VStack>
            </SimpleGrid>
        </Box>
    )
}

export default SuccessSection
