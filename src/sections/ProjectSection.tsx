import {
    Box,
    Text,
    Heading,
    Stack,
    useBreakpointValue,
} from "@chakra-ui/react"
import ProjectCard from "../components/ProjectCard"
import { projectItems } from "../data/ProjectItems"



export default function ProjectsGallery() {
    const columnCount = useBreakpointValue({ base: 1, sm: 2, md: 3 })

    return (
        <Box id="projects" as="section" py={{ base: 12, md: 20 }}>
            <Stack gap={4} mt={5} mb={24}>
                <Heading fontSize={{ base: "3xl", md: "5xl" }}>Nos solutions</Heading>
                <Text>
                    Nos solutions sur mesure répondant à vos exigences et adaptées à vos
                    objectifs business sur le web.
                </Text>
            </Stack>

            <Box
                style={{
                    columnCount: columnCount,
                    columnGap: "32px",
                }}
            >
                {projectItems.map((project, index) => (
                    <Box
                        key={index}
                        breakInside="avoid"
                        mb="32px"
                    >
                        <ProjectCard project={project} />
                    </Box>
                ))}
            </Box>
        </Box>
    )
}
