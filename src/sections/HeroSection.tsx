import { Box, Button, Heading, Link, Text, VStack, SimpleGrid } from '@chakra-ui/react';
import React from 'react';
import ShaderCanvas from '../components/ShaderCanvas';
import { Link as ScrollLink } from "react-scroll"

const HeroSection: React.FC = () => {
    return (
        <Box position="relative" width="100%" overflow="hidden" rounded="xl" pt={24}>
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
            >
                <Heading fontSize={['4xl', '7xl']} color="white">
                    Soyez Mamba,
                </Heading>
                <Heading fontSize={['4xl', '7xl']} fontWeight="1" color="white">
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
                        <Button variant="outline" colorScheme="teal" size="lg">
                            Nos réalisations
                        </Button>
                    </ScrollLink>
                </SimpleGrid>
                <Text fontSize="xs" color="gray.300" pt={4}>
                    Design inspired by{' '}
                    <Link href="https://www.shadertoy.com/view/dsXyzf" textDecoration="underline" color="gray.400">
                        purple-blue liquid gradient
                    </Link>
                </Text>
            </VStack>
        </Box>
    );
};

export default HeroSection;
