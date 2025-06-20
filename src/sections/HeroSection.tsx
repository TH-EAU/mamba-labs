import { Box, Button, Heading, Link, Text, VStack, SimpleGrid } from '@chakra-ui/react';
import React from 'react';
import ShaderCanvas from '../components/ShaderCanvas';
import { Link as ScrollLink } from "react-scroll"

const HeroSection: React.FC = () => {
    return (
        <Box position="relative" width="100%" overflow="hidden" rounded="xl" pt={22}>
            <Box position="absolute" top={0} left={0} w="100%">
                <ShaderCanvas />
            </Box>
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
                    content:'""',
                    width: "600px",
                    height: "200px",
                    backgroundColor: "black",
                    zIndex: -1,
                    top: "20%",
                    filter: "blur(40px)",
                    opacity: .5

                }}
            >
                <Heading fontSize={['4xl', '7xl']} color="white" pb={[0, 6]} lineHeight={1} >
                    Soyez Mamba,
                </Heading>
                <Heading fontSize={['4xl', '7xl']} fontWeight="1" lineHeight={1} color="white">
                    Soyez <Text as="span" fontWeight="100"  > Performant</Text>
                </Heading>

                <Text fontSize={['sm', 'md']} color="gray.200">
                    Rapide. Précis. Puissant.
                </Text>
                <SimpleGrid gap={4} pt={4} columns={[1, 2]}>
                    <Button colorScheme="teal" size="lg">
                        Obtenez un Audit gratuit
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
                    Design  by{' '}
                    <Link href="https://www.shadertoy.com/view/dsXyzf" textDecoration="underline" color="gray.400">
                        mamba labs
                    </Link>
                </Text>
            </VStack>
        </Box>
    );
};

export default HeroSection;
