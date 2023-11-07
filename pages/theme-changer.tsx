import { Box, Button, ChakraProps, useColorMode } from "@chakra-ui/react"

export function ThemeChanger(props: ChakraProps) {
  const { colorMode, toggleColorMode } = useColorMode()
  return (
    <Box {...props}>
      <Button rounded="full" onClick={toggleColorMode}>
        Change to Theme {colorMode === 'light' ? 'Dark' : 'Light'}
      </Button>
    </Box>
  )
}