import { Box, Stack, Text, Image, Link, Skeleton, Heading } from "@chakra-ui/react"
import { FiArrowUpRight } from "react-icons/fi"
import HoverCardWrapper from "./HoverCardWrapper"

type Project = {
    title: string
    category: string
    imageUrl: string
    href: string
}

type ProjectCardProps = {
    project: Project
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
    return (
        <Stack gap={4}>
            <Box
                overflow="hidden"
                borderRadius="xl"
                // bg="gray.700"
                position="relative"

            >
                <Image
                    src={project.imageUrl}
                    alt={project.title}
                    objectFit="cover"
                    w="full"
                    h="full"
                />
                <HoverCardWrapper>
                    <Stack p={8} textAlign="right" >
                        <Heading textTransform="uppercase" >Projet</Heading>
                    </Stack>
                </HoverCardWrapper>
            </Box>

            <Stack gap={1}>
                <Text fontSize="xs" textTransform="uppercase" color="gray.400">
                    {project.category}
                </Text>
                <Link
                    href={project.href}
                    fontSize="lg"
                    fontWeight="semibold"
                    display="inline-flex"
                    alignItems="center"
                    gap="1"
                    color="white"
                    textDecoration="none"
                    _hover={{
                        textDecoration: "underline",
                    }}

                >
                    {project.title}
                    <Box as={FiArrowUpRight} boxSize={4} />
                </Link>
            </Stack>
        </Stack>
    )
}

export default ProjectCard
