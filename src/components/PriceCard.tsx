import { Box, Stack, Text, HStack, Button } from "@chakra-ui/react"
import type { ReactNode } from "react"
import { FiCheck } from "react-icons/fi"


type Plan = {
    title: string
    subtitle: string
    price: string
    features: string[]
    buttonLabel: string
}

type PriceCardProps = {
    isHighlight?: boolean
    plan: Plan
}

const PriceCard = ({ isHighlight = false, plan }: PriceCardProps): ReactNode => {
    return (
        <Stack
            bg={isHighlight ? "accent" : "white"}
            color={isHighlight ? "white" : "fg.default"}
            borderRadius="xl"
            p="6"
            boxShadow="md"
            position="relative"
            justify="space-between"
        >
            {isHighlight && (
                <Box
                    position="absolute"
                    top="4"
                    right="4"
                    bg="whiteAlpha.200"
                    fontSize="sm"
                    px="3"
                    py="1"
                    borderRadius="md"
                    fontWeight="bold"
                >
                    Populaire
                </Box>
            )}

            {/* Title & Subtitle */}
            <Stack gap="1" mb="4">
                <Text fontWeight="bold" fontSize="lg">
                    {plan.title}
                </Text>
                <Text fontSize="sm" opacity="0.8">
                    {plan.subtitle}
                </Text>
            </Stack>

            {/* Price */}
            <Text fontSize="3xl" fontWeight="bold">
                <Box as="span" textDecoration="line-through" fontSize="md" mr="2">
                    €{plan.price}
                </Box>
                €{plan.price} <Box as="span" fontSize="md">HT</Box>
            </Text>

            {/* Features */}
            <Stack mt="4" gap="3" fontSize="sm">
                <Text fontWeight="semibold" mb="1">
                    Inclus
                </Text>
                {plan.features.map((feature, i) => (
                    <HStack key={i} align="start">
                        <Box as={FiCheck} boxSize="4" color={isHighlight ? "white" : "accent"} mt="1" />
                        <Text>{feature}</Text>
                    </HStack>
                ))}
            </Stack>

            {/* CTA */}
            <Button
                mt="6"
                w="full"
                bg={isHighlight ? "white" : "accent"}
                color={isHighlight ? "accent" : "white"}
                fontWeight="bold"
                borderRadius="xl"
                _hover={{
                    opacity: 0.9,
                }}
            >
                {plan.buttonLabel}
            </Button>
        </Stack>
    )
}

export default PriceCard
