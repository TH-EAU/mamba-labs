import {
    Box,
    Text,
    Heading,
    Stack,
    useBreakpointValue,
} from "@chakra-ui/react"
import ProjectCard from "../components/ProjectCard"
import type { Project } from "../models/Projects"

const projects: Project[] = [
    {
        title: "Sequel Travel",
        category: "Travel Agency",
        imageUrl:
            "https://images.unsplash.com/photo-1726696513898-11473822d211?q=80&w=2574&auto=format&fit=crop",
        href: "#",
        tinyDescription: "un projet",
        description: "un project",
    },
    {
        title: "Sequel Travel",
        category: "Travel Agency",
        imageUrl:
            "https://images.unsplash.com/photo-1656772490183-0cd2c342ea24?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        href: "#",
        tinyDescription: "un projet",
        description: "un project",
    },
    {
        title: "Nelson Miller",
        category: "Manufacturing",
        imageUrl:
            "https://images.unsplash.com/photo-1656772490733-974467b0585f?q=80&w=2535&auto=format&fit=crop",
        href: "#",
        tinyDescription: "un projet",
        description: "un project",
    },
    {
        title: "Silverback Films",
        category: "Production Studio",
        imageUrl:
            "https://images.unsplash.com/photo-1621843031926-8231f312f0fa?q=80&w=2574&auto=format&fit=crop",
        href: "#",
        tinyDescription: "un projet",
        description: "un project",
    },
    {
        title: "Another Project",
        category: "Design",
        imageUrl:
            "https://images.unsplash.com/photo-1656772490150-665cc9721294?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        href: "#",
        tinyDescription: "un projet",
        description: "un autre project",
    },
]

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
                {projects.map((project, index) => (
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
