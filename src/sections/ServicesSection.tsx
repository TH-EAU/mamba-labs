import { Box, Heading, Text, VStack,  Separator, Stack, SimpleGrid } from '@chakra-ui/react';
import type { Service } from '../models/Service';
import { serviceItems } from '../data/ServicesItems';

const ServiceItem: React.FC<Service> = ({ title, description }) => (
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
                {serviceItems.map((service, index) => (
                    <ServiceItem key={index} title={service.title} description={service.description} />
                ))}
            </Stack>
        </Box>
    );
};

export default ServicesSection;
