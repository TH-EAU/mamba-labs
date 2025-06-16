import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { system } from './style/theme.ts'
import { Box, ChakraProvider } from '@chakra-ui/react'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ChakraProvider value={system} >
      <Box backgroundColor="black" >

        <App />
      </Box>
    </ChakraProvider>
  </StrictMode>,
)
