import { Box } from "@chakra-ui/react"
import type { ReactNode } from "react"

const HoverCardWrapper: React.FC<{ children: ReactNode }> = ({ children }) => {
    return (
        <Box
            background="linear-gradient(143deg,rgba(0, 0, 0, 0) 20%, rgba(0, 0, 0, 0.34) 59%, rgba(0, 0, 0, 0.51) 79%)"
            backgroundPosition="0% 0%"
            backgroundSize="300% 300%"
            overflow="hidden"
            transition="1.8s ease"
            cursor="pointer"
            _hover={{
                backgroundPosition: "100% 100%",
                zIndex: 9,
                backdropFilter: "blur(8px)"
            }}
            h="full"
            w="full"
            position="absolute"
            top={0}
        >
            <Box h="full" w="100%" zIndex={10} opacity={0} transition="1s" _hover={{ opacity: 1 }} >
                {children}
            </Box>
        </Box>
    )
}

export default HoverCardWrapper