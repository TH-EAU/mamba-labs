import {
    Box,
    Text,
    Heading,
    SimpleGrid,
} from "@chakra-ui/react"
import ProjectCard from "../components/ProjectCard"

type Project = {
    title: string
    category: string
    imageUrl: string
    href: string
}

const projects: Project[] = [
    {
        title: "Sequel Travel",
        category: "Travel Agency",
        imageUrl: "https://images.unsplash.com/photo-1726696513898-11473822d211?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        href: "#",
    },
    {
        title: "Nelson Miller",
        category: "Manufacturing",
        imageUrl: "https://images.unsplash.com/photo-1656772490733-974467b0585f?q=80&w=2535&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        href: "#",
    },
    {
        title: "Silverback Films",
        category: "Production Studio",
        imageUrl: "https://images.unsplash.com/photo-1621843031926-8231f312f0fa?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        href: "#",
    },
]

export default function ProjectsGrid() {
    return (
        <Box as="section" py={{ base: 12, md: 20 }} px={{ base: 6, md: 16 }} >
            <Box mt={5} mb={24} >
                <Heading size="5xl" >Nos solutions</Heading>
                <Text>Nos solutions sur mesure répondant à vos exigences et adaptées à vos objectifs business sur le web.</Text>
            </Box>
            <SimpleGrid columns={{ base: 1, md: 2 }} gap={12}>
                {projects.map((project, index) => (
                    <ProjectCard project={project} key={index} />
                ))}
            </SimpleGrid>
        </Box>
    )
}
