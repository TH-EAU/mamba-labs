import { Box, Flex, Image, Text } from "@chakra-ui/react"
import { keyframes } from "@emotion/react"

const logos = [
    "/vite.svg",
    "/react.svg",
    "/Logo-S.svg",
    "/vite.svg",
    "/react.svg",
    "/Logo-S.svg"
]

const scroll = keyframes`
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
`

const TrustedBySection: React.FC = () => {
    return (
        <Box as="section" bg="black" py={20} px={{ base: 6, md: 20 }} overflow="hidden">
            <Text
                textAlign="center"
                fontSize={{ base: "md", md: "lg" }}
                textTransform="uppercase"
                color="white"
                mb={10}
                letterSpacing="widest"
                opacity={0.8}
            >
                Ils nous font confiance
            </Text>

            <Box overflow="hidden" position="relative" w="100%">
                <Flex
                    as="div"
                    minW="200%" // 2x la largeur pour créer une vraie boucle
                    animation={`${scroll} 40s linear infinite`}
                >
                    {[...logos, ...logos].map((logo, idx) => (
                        <Flex
                            key={idx}
                            justify="center"
                            align="center"
                            flex="0 0 auto"
                            px={10}
                        >
                            <Image
                                src={logo}
                                alt={`Logo ${idx}`}
                                h={{ base: 8, md: 10 }}
                                objectFit="contain"
                                opacity={0.7}
                                _hover={{ opacity: 1 }}
                                transition="opacity 0.3s"
                            />
                        </Flex>
                    ))}
                </Flex>
            </Box>
        </Box>
    )
}

export default TrustedBySection
