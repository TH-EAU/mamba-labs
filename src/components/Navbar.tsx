import {
    Box,
    Container,
    HStack,
    IconButton,
    Link,
    Text,
    Image,
    VStack,
    useBreakpointValue,
    Portal,
    CloseButton,
    Button,
    Kbd,
    For,
} from "@chakra-ui/react"
import { Link as ScrollLink } from "react-scroll"
import { FiMenu } from "react-icons/fi"
import {
    Drawer,
    DrawerTrigger,
    DrawerBackdrop,
    DrawerPositioner,
    DrawerContent,
    DrawerHeader,
    DrawerBody,
    DrawerCloseTrigger,
} from "@chakra-ui/react"

export const navlinks = [
    {
        label: "Nos réalisations",
        href: "projects",
    },
    {
        label: "Nos services",
        href: "services",
    },
    {
        label: "Contact",
        href: "contact",
    },
]

const Navbar: React.FC = () => {
    const isMobile = useBreakpointValue({ base: true, md: false })

    return (
        <Box position="fixed" top={0} left={0} width="full" zIndex={99} >
            <Container px={[4, 16]} py={4} backdropFilter="blur(2px)">
                <HStack justify="space-between">
                    {/* Logo */}
                    <HStack color="white" gap={0.5}>
                        <Image src="/Logo-S.svg" alt="logo" />
                        {!isMobile && <Text fontSize="2xl" fontWeight="bold" textTransform="uppercase" letterSpacing={5}>
                            amba Labs
                        </Text>}
                    </HStack>

                    {/* Desktop Links */}
                    {!isMobile && (
                        <HStack color="white" gap={8}>
                            {navlinks.map((link) => (
                                <ScrollLink
                                    key={link.label}
                                    to={link.href}
                                    smooth={true}
                                    duration={500}
                                    offset={-80}
                                >
                                    <Link
                                        fontSize="lg"
                                        fontWeight="semibold"
                                        textDecoration="none"
                                        _hover={{ textDecoration: "underline" }}
                                        cursor="pointer"
                                        color="white"
                                    >
                                        {link.label}
                                    </Link>
                                </ScrollLink>
                            ))}
                        </HStack>
                    )}

                    {/* Mobile Drawer Trigger */}
                    {isMobile && (
                        <Drawer.Root>
                            <DrawerTrigger asChild>
                                <IconButton
                                    aria-label="Open menu"
                                    variant="ghost"
                                    color="white"
                                >
                                    <FiMenu />
                                </IconButton>
                            </DrawerTrigger>

                            <Portal>
                                <DrawerBackdrop />
                                <DrawerPositioner>
                                    <DrawerContent
                                        bg="black"
                                        color="white"
                                        height="100vh"
                                        borderTopRadius="md"
                                        maxHeight="100vh"
                                        // Ici placement bottom "manuellement"
                                        style={{
                                            position: "fixed",
                                            bottom: 0,
                                            left: 0,
                                            right: 0,
                                            width: "100%",
                                            maxWidth: "100%",
                                            margin: "0 auto",
                                            display: "flex",
                                            flexDirection: "column",
                                        }}
                                    >
                                        <DrawerHeader>
                                            <HStack justifyContent="space-between">
                                                <Text fontSize="xl" fontWeight="bold" textTransform="uppercase">
                                                    Menu
                                                </Text>
                                                <DrawerCloseTrigger asChild>
                                                    <CloseButton size="sm" />
                                                </DrawerCloseTrigger>
                                            </HStack>
                                        </DrawerHeader>
                                        <DrawerBody>
                                            <VStack gap={8} mt={4}>
                                                {navlinks.map((link) => (
                                                    <ScrollLink
                                                        key={link.label}
                                                        to={link.href}
                                                        smooth={true}
                                                        duration={500}
                                                        offset={-80}
                                                    >
                                                        {/** Important : on peut mettre cursor pointer pour un lien cliquable */}
                                                        <Link
                                                            fontSize="2xl"
                                                            fontWeight="bold"
                                                            _hover={{ textDecoration: "underline" }}
                                                            cursor="pointer"
                                                        >
                                                            {link.label}
                                                        </Link>
                                                    </ScrollLink>
                                                ))}
                                            </VStack>
                                        </DrawerBody>
                                    </DrawerContent>
                                </DrawerPositioner>
                            </Portal>
                        </Drawer.Root>
                    )}
                </HStack>
            </Container>
        </Box>
    )
}

export default Navbar
