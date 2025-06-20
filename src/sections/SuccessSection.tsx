import { Box, Heading, VStack, Text, SimpleGrid, Image, Stack, Slider, useBreakpoint, useBreakpointValue } from "@chakra-ui/react"
import { useEffect, useState } from "react"

const marks = [
    { value: 0, label: "" },
    { value: 500, label: "Contact" },
    { value: 1000, label: "Développement" },
    { value: 2000, label: "Tests" },
    { value: 3000, label: "Livraison" },
]

const SuccessSection = () => {
    const [offsetY, setOffsetY] = useState(0)
    const isMobile = useBreakpointValue({ base: true, md: false })


    useEffect(() => {
        const handleScroll = () => setOffsetY(window.scrollY)

        window.addEventListener('scroll', handleScroll)
        console.log(offsetY)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <Box as="section" mt={20} py={{ base: 12, md: 20 }}>
            <SimpleGrid columns={[1, 2]} gap={8} alignItems="flex-start" position="relative" h="550vh">

                <VStack position="sticky" top={20} h="100vh" gap={4} align="left" mb={24}>
                    <Heading size="xl" fontWeight="extralight" color="brand.400" >
                        Votre succès
                    </Heading>
                    <Heading
                        display={offsetY > 300 ? "block" : "none"}
                        lineHeight={1}
                        fontSize={{ base: "3xl", md: "5xl" }}>
                        Notre priorité
                    </Heading>
                    <Text maxW="2xl" >
                        Plongez dans une aventure partagée dès la conception de votre projet web avec un chef de projet dédié, assurant une parfaite cohésion et une comphérension absolue de vos besoins.
                    </Text>
                    <Box>
                        {/* <Text color="brand.400" >Timeline {offsetY}</Text> */}
                        <Slider.Root colorPalette="yellow" min={500} max={3000} value={[offsetY]}>
                            <Slider.Control>
                                <Slider.Track>
                                    <Slider.Range />
                                </Slider.Track>
                                <Slider.Thumbs >
                                    <Slider.DraggingIndicator
                                        layerStyle="fill.solid"
                                        top="6"
                                        rounded="sm"
                                        px="1.5"
                                    >
                                        <Slider.ValueText />
                                    </Slider.DraggingIndicator>
                                </Slider.Thumbs>

                                <Slider.Marks marks={marks} />
                            </Slider.Control>
                        </Slider.Root>
                    </Box>
                </VStack>

                <Stack pl={[0, 24]} position="relative" h={["350vh", "550vh"]} gap="100vh">
                    <Image
                        position="sticky"
                        top={[380, 20]}
                        src={`${import.meta.env.BASE_URL}/Lego.svg`}
                        alt="a boat"
                        rounded="2xl"
                        zIndex={9}
                        w={300}
                    />

                    <Image
                        position="sticky"
                        top={[440, 140]}
                        src={`${import.meta.env.BASE_URL}/Lego.svg`}
                        alt="a boat"
                        rounded="2xl"
                        zIndex={8}
                        w={300}
                    />
                    <Image
                        position="sticky"
                        top={[500, 200]}
                        src={`${import.meta.env.BASE_URL}/Lego.svg`}
                        alt="a boat"
                        rounded="2xl"
                        zIndex={7}
                        w={300}
                    />
                    {!isMobile && <Image
                        position="sticky"
                        top={[0, 260]}
                        src={`${import.meta.env.BASE_URL}/Lego.svg`}
                        alt="a boat"
                        rounded="2xl"
                        zIndex={6}
                        w={300}
                    />}
                </Stack>


            </SimpleGrid>
        </Box>
    )
}

export default SuccessSection
