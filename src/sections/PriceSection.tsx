import {
    Box,
    Text,
    SimpleGrid,
    VStack,
    Heading,
} from "@chakra-ui/react"
import PriceCard from "../components/PriceCard"

type Plan = {
    title: string
    subtitle: string
    price: string
    features: string[]
    buttonLabel: string
    highlighted?: boolean
}

const plans: Plan[] = [
    {
        title: "Mamba Impact",
        subtitle:
            "Attirez, convertissez vos visiteurs et propulsez votre taux de conversion.",
        price: "599",
        features: [
            "Un design captivant",
            "Un message clair et percutant",
            "Un CTA irrésistible",
            "Un aimant à leads qualifiés",
        ],
        buttonLabel: "Décuplez votre impact",
    },
    {
        title: "Mamba Influence",
        subtitle:
            "Devenez influenceur, partagez votre expertise et tissez des liens durables.",
        price: "699",
        features: [
            "Un contenu de qualité",
            "Un canal de communication privilégié",
            "Une communauté engagée",
            "Un référencement optimisé",
        ],
        buttonLabel: "Boostez votre visibilité",
    },
    {
        title: "Mamba Vitrine",
        subtitle:
            "Exhibez votre savoir-faire, attirez tous les regards et convertissez vos visiteurs.",
        price: "1599",
        features: [
            "Un design élégant et moderne",
            "Une présentation engageante de Vous",
            "Une mise en avant de vos services",
            "Une identité de marque renforcée",
        ],
        buttonLabel: "Débloquez votre plein potentiel",
        highlighted: true,
    },
    {
        title: "Mamba E-commerce",
        subtitle:
            "Vendez 24/7, décuplez votre chiffre avec un site à la pointe de l’innovation.",
        price: "2999",
        features: [
            "Une expérience d’achat fluide",
            "Une expérience client optimale",
            "Un catalogue de produits attractif",
            "Une portée plus large et illimitée",
        ],
        buttonLabel: "Atteignez le summum",
    },
]

const PricingSection = () => {
    return (
        <Box py="16" as="section" id="price" >
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
            <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} gap={16} mx="auto">
                {plans.map((plan, index) => {
                    const isHighlight = plan.highlighted
                    return (
                        <PriceCard key={index} plan={plan} isHighlight={isHighlight} />
                    )
                })}
            </SimpleGrid>
        </Box>
    )
}

export default PricingSection