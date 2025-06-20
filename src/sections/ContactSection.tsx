import {
    Box,
    Stack,
    Heading,
    Text,
    Link,
} from "@chakra-ui/react"
import { FiMail } from "react-icons/fi"

const ContactSection: React.FC = () => {

    return (
        <Box id="contact" as="section" bg="black" color="white" py={{ base: 20, md: 32 }}>
            <Stack gap={16} w="full" >
                {/* Titre */}
                <Stack gap={4}>
                    <Heading
                        fontSize={{ base: "3xl", md: "5xl" }}>
                        Travaillons ensemble
                    </Heading>
                    <Text fontSize="lg" opacity={0.7}>
                        Que vous ayez une idée en tête ou que vous ayez besoin d’inspiration, n’hésitez pas à nous contacter. Nous sommes disponibles pour discuter, créer, et collaborer.
                    </Text>
                </Stack>

                {/* Lien direct par e-mail */}
                <Box>
                    <Link
                        href="mailto:hello@mamba-atelier.com"
                        fontSize={["md", "2xl"]}
                        fontWeight="medium"
                        _hover={{ textDecoration: "underline", opacity: 0.8 }}
                        display="inline-flex"
                        alignItems="center"
                        gap={2}
                        color="white"
                    >
                        <FiMail />
                        mamba.labs@protonmail.com
                    </Link>
                </Box>
            </Stack>
        </Box>
    )
}

export default ContactSection
