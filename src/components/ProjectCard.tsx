import { Box, Stack, Text, Image, Link, Skeleton, Heading } from "@chakra-ui/react"
import { FiArrowUpRight } from "react-icons/fi"
import HoverCardWrapper from "./HoverCardWrapper"
import type { Project } from "../models/Projects"
import ProjectPage from "./ProjectPage"



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
                        <Heading textTransform="uppercase" >{project.title}</Heading>
                        <Text textAlign="right" >{project.tinyDescription}</Text>
                    </Stack>
                </HoverCardWrapper>
            </Box>

            <Stack gap={1}>
                <Text fontSize="xs" textTransform="uppercase" color="gray.400">
                    {project.category}
                </Text>
                <ProjectPage project={project} />
            </Stack>
        </Stack>
    )
}

export default ProjectCard
