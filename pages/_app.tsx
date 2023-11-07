import { ChakraProvider } from "@chakra-ui/react";
import "styles/globals.css";
import defaultTheme from "./theme";

function MyApp({
  Component,
  pageProps,
}: {
  Component: React.ComponentType;
  pageProps: Record<string, unknown>;
}) {
  return (
    <ChakraProvider theme={defaultTheme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
