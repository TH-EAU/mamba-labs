import { Box } from "@chakra-ui/react"
import { keyframes } from "@emotion/react"
import { useEffect, useRef, useState, type ReactNode } from "react"

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`

const FadeInWrapper: React.FC<{ children: ReactNode }> = ({ children }) => {
    const ref = useRef<HTMLDivElement>(null)
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true)
                    observer.disconnect() // ne le déclenche qu'une fois
                }
            },
            { threshold: 0.1 }
        )

        if (ref.current) observer.observe(ref.current)

        return () => observer.disconnect()
    }, [])

    return (
        <Box
            ref={ref}
            opacity={isVisible ? 1 : 0}
            animation={isVisible ? `${fadeIn} 2s ease-out` : "none"}
        >
            {children}
        </Box>
    )
}

export default FadeInWrapper
