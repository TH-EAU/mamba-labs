import { Box, Grid, Heading, Text, VStack, HStack, Icon, Separator, Stack, SimpleGrid } from '@chakra-ui/react';
// import { CheckCircleIcon } from '@chakra-ui/icons';
import { motion } from 'framer-motion';

const MotionBox = motion(Box);

interface ServiceItemProps {
    title: string;
    description: string;
}

const services: ServiceItemProps[] = [
    {
        title: 'Discovery & Strategy',
        description: 'We identify your needs, your users, and how to align tech and design for maximum impact.',
    },
    {
        title: 'Design System & UI',
        description: 'We craft consistent and scalable UI components, building a foundation for product evolution.',
    },
    {
        title: 'Web & App Development',
        description: 'We turn interfaces into functional experiences with clean, maintainable code.',
    },
    {
        title: 'Prototyping & Testing',
        description: 'Validate quickly. We design and build prototypes that can be tested and iterated on.',
    },
    {
        title: 'Performance Optimization',
        description: 'Speed matters. We make sure your product loads fast and runs smoothly on all devices.',
    },
    {
        title: 'Ongoing Support',
        description: 'We stay available post-launch for updates, scaling, and strategic consulting.',
    },
];

const ServiceItem: React.FC<ServiceItemProps> = ({ title, description }) => (
    <Stack gap={16} pt={16} transition=".5s" _hover={{ gap: 20, pt: 20 }}>
        <SimpleGrid columns={[1, 2]} >
            <Heading>{title}</Heading>
            <Text textAlign="right" >{description}</Text>
        </SimpleGrid>
        <Separator />
    </Stack>
);

const ServicesSection: React.FC = () => {
    return (
        <Box id="services" as="section" py={{ base: 12, md: 20 }}  >
            <VStack gap={4} align="left" mb={24}>
                <Heading size="xl" >
                    Nos valeurs & services
                </Heading>
                <Heading
                    fontSize={{ base: "3xl", md: "5xl" }}>
                    Nos Services
                </Heading>
                <Text maxW="2xl" >
                    Nous vous offrons des solutions digitales sur mesure, performantes et parfaitement adaptées à vos besoins.
                </Text>
            </VStack>
            <Stack>
                {services.map((service, index) => (
                    <ServiceItem key={index} title={service.title} description={service.description} />
                ))}
            </Stack>
        </Box>
    );
};

export default ServicesSection;
