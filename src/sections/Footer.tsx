import { Box, Flex, Text, Link, VStack, HStack, Icon } from '@chakra-ui/react';
import { FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer: React.FC = () => {
    return (
        <Box
            as="footer"
            bg="black"
            color="white"
            px={{ base: 6, md: 16 }}
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
                    <Text fontSize="2xl" fontWeight="bold" textTransform="uppercase" letterSpacing={5} >
                        Mamba Labs
                    </Text>
                    <Text fontSize="sm" maxW="300px" opacity={0.7}>
                        Concepteurs de solutions numériques uniques. Pensé pour votre succès.
                    </Text>
                </VStack>

                {/* Navigation Links */}
                <VStack align="flex-start" gap={2}>
                    <Link href="#about" fontSize="sm" _hover={{ opacity: 1 }} opacity={0.7} transition="all 0.3s">
                        À propos
                    </Link>
                    <Link href="#shop" fontSize="sm" _hover={{ opacity: 1 }} opacity={0.7} transition="all 0.3s">
                        Boutique
                    </Link>
                    <Link href="#contact" fontSize="sm" _hover={{ opacity: 1 }} opacity={0.7} transition="all 0.3s">
                        Contact
                    </Link>
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
