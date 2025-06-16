import { Box, CloseButton, Container, Drawer, Link, SimpleGrid, Image, Stack, Heading, Text } from "@chakra-ui/react"
import type { Project } from "../models/Projects"
import { FiArrowUpRight } from "react-icons/fi"

const ProjectPage: React.FC<{ project: Project }> = ({ project }) => {
    return (
        <Drawer.Root size="full">
            <Drawer.Trigger asChild>
                <Link
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
                    }}
                >
                    {project.title}
                    <Box as={FiArrowUpRight} boxSize={4} />
                </Link>
            </Drawer.Trigger>
            <Drawer.Positioner>
                <Drawer.Content backgroundColor="black" >
                    <Drawer.Header>
                        <Drawer.Title>
                            {project.title}
                        </Drawer.Title>
                    </Drawer.Header>
                    <Drawer.Body>
                        <Container>
                            <SimpleGrid columns={[1, 2]} gap={8}>
                                <Image
                                    src={project.imageUrl}
                                    alt={project.title}
                                    objectFit="cover"
                                    w="full"
                                    h="full"
                                />
                                <Stack>
                                    <Heading
                                        fontSize={{ base: "3xl", md: "5xl" }}
                                        textTransform="uppercase"
                                        letterSpacing="widest"
                                    >{project.title}</Heading>
                                    <Text>{project.description} </Text>
                                </Stack>
                            </SimpleGrid>
                        </Container>
                    </Drawer.Body>
                    <Drawer.CloseTrigger asChild>
                        <CloseButton size="sm" />
                    </Drawer.CloseTrigger>
                </Drawer.Content>
            </Drawer.Positioner>
        </Drawer.Root>
    )
}

export default ProjectPage