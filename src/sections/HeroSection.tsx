import { Box, Button, Heading, Link, Text, VStack, SimpleGrid, Container } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import ShaderCanvas from '../components/ShaderCanvas';
import { Link as ScrollLink } from "react-scroll"
import FadeInWrapper from '../components/FadeInWrapper';

const HeroSection: React.FC = () => {
    const [offsetY, setOffsetY] = useState(0)

    useEffect(() => {
        const handleScroll = () => setOffsetY(window.scrollY)

        window.addEventListener('scroll', handleScroll)

        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <Box position="relative" width="100%" overflow="hidden" rounded="xl" >
            <Box position="absolute" top={0} left={0} w="100%" overflow="hidden" >
                <Box transform={`translateY(${offsetY * 0.2}px)`}>

                    <ShaderCanvas />
                </Box>
            </Box>
            <FadeInWrapper>
                <Container maxW="3xl">

                    <VStack

                        gap={6}
                        align="center"
                        justify="center"
                        height="600px"
                        px={6}
                        textAlign="center"
                        position="relative"
                        zIndex={1}
                        _before={{
                            position: "absolute",
                            content: '""',
                            width: "600px",
                            height: "200px",
                            backgroundColor: "black",
                            zIndex: -1,
                            top: "20%",
                            filter: "blur(40px)",
                            opacity: .5,

                        }}
                    >
                        <Heading fontSize={['4xl', '7xl']} color="white" pb={[0, 6]} lineHeight={1} >
                            Soyez Mamba, Soyez Performant.
                        </Heading>

                        <Text fontSize={['sm', 'md']} color="gray.200">
                            Des sites web sur mesure, élégants et pensés pour la performance.
                        </Text>
                        <SimpleGrid gap={4} pt={4} columns={[1, 2]}>
                            <Button colorScheme="teal" size="lg">
                                Travaillons ensemble
                            </Button>
                            <ScrollLink
                                to="projects"
                                smooth="true"
                                duration={500}
                                offset={-80}
                            >
                                <Button variant="outline" colorScheme="teal" size="lg" color="white">
                                    Nos réalisations
                                </Button>
                            </ScrollLink>
                        </SimpleGrid>
                        <Text fontSize="xs" color="gray.300" pt={4}>
                            On conçoit avec vous un site rapide, élégant et
                            <Link href="https://www.shadertoy.com/view/dsXyzf" textDecoration="underline" color="gray.400">
                                taillé pour votre succès
                            </Link>
                        </Text>
                    </VStack>
                </Container>
            </FadeInWrapper>
        </Box>
    );
};

export default HeroSection;
