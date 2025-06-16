import { Box, Flex, Text, Link, VStack, HStack, Icon, Image } from '@chakra-ui/react';
import { FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { navlinks } from '../components/Navbar';
import { Link as ScrollLink } from "react-scroll"

const Footer: React.FC = () => {
    return (
        <Box
            as="footer"
            bg="black"
            color="white"
            py={{ base: 12, md: 20 }}
            fontFamily="'Inter', sans-serif"
        >
            <Flex
                direction={{ base: 'column', md: 'row' }}
                justify="space-between"
                align={{ base: 'flex-start', md: 'center' }}
                gap={12}
            >
                {/* Logo / Branding */}
                <VStack align="flex-start" gap={4}>
                    <HStack color="white" gap={0.5}>
                        <Image src="/Logo-S.svg" alt="logo" />
                        <Text fontSize="2xl" fontWeight="bold" textTransform="uppercase" letterSpacing={5}>amba Labs</Text>
                    </HStack>
                    <Text fontSize="sm" maxW="300px" opacity={0.7}>
                        Concepteurs de solutions numériques uniques. Pensé pour votre succès.
                    </Text>
                </VStack>

                {/* Navigation Links */}
                <VStack align="flex-start" gap={2}>
                    {navlinks.map(link =>
                        <ScrollLink
                            to={link.href}
                            smooth="true"
                            duration={500}
                            offset={-80}
                        >
                            <Link
                                key={link.label}
                                as="p"
                                fontSize="lg"
                                fontWeight="semibold"
                                display="inline-flex"
                                alignItems="center"
                                gap="1"
                                color="white"
                                textDecoration="none"
                                _hover={{
                                    textDecoration: "underline"
                                }}>{link.label}</Link>
                        </ScrollLink>
                    )}
                </VStack>

                {/* Social Media */}
                <HStack gap={4}>
                    <Link href="https://instagram.com" >
                        <Icon as={FaInstagram} boxSize={5} _hover={{ color: 'gray.400', transform: 'scale(1.1)' }} transition="0.2s" />
                    </Link>
                    <Link href="https://linkedin.com" >
                        <Icon as={FaLinkedin} boxSize={5} _hover={{ color: 'gray.400', transform: 'scale(1.1)' }} transition="0.2s" />
                    </Link>
                    <Link href="https://twitter.com" >
                        <Icon as={FaTwitter} boxSize={5} _hover={{ color: 'gray.400', transform: 'scale(1.1)' }} transition="0.2s" />
                    </Link>
                </HStack>
            </Flex>

            {/* Bottom Text */}
            <Text mt={16} fontSize="xs" opacity={0.5} textAlign="center">
                © {new Date().getFullYear()} Mamba Labs. Tous droits réservés.
            </Text>
        </Box>
    );
};

export default Footer;
