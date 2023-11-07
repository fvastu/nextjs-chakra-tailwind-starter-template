import { extendTheme } from "@chakra-ui/react";
import { mode, StyleFunctionProps } from "@chakra-ui/theme-tools";

const breakpoints = {
  xs: "30em",
  sm: "40em",
  md: "52em",
  lg: "64em",
  xl: "80em",
};

const theme = extendTheme({
  semanticTokens: {
    colors: {
      text: {
        default: "#16161D",
        _dark: "#ade3b8",
      },
      heroGradientStart: {
        default: "#7928CA",
        _dark: "#e3a7f9",
      },
      heroGradientEnd: {
        default: "#FF0080",
        _dark: "#fbec8f",
      },
      secondaryBG: {
        default: "rgb(248, 248, 249)",
        _dark: "rgb(19, 22, 26)",
      },
      cellBG: {
        default: "white",
        _dark: "rgb(39, 40, 43)",
      },
      headerColor: {
        default: "rgb(179, 181, 185)",
        _dark: "rgb(91, 94, 109)",
      },
    },
    radii: {
      button: "12px",
    },
  },
  styles: {
    global: (props: StyleFunctionProps) => ({
      body: {
        bg: mode("#F4F4F4", "black")(props), // Updated background color
      },
    }),
  },
  colors: {
    black: "#111317", // Darker black color
    primary: "#FF6B6B", // Changed primary color
    deleteRed: "#E75B8D", // Changed deleteRed color
    metloBlue: "#3F72AF", // Changed metloBlue color
  },
  components: {
    Button: {
      baseStyle: {
        borderWidth: "1px",
        borderColor: "gray.300",
      },
      variants: {
        base: {},
        unstyled: {
          borderWidth: "0",
        },
        link: {
          borderWidth: "0",
        },
        create: {
          borderWidth: "0px",
          bg: "metloBlue",
          color: "#FFFFFF",
          _hover: {
            bg: "#29447E", // Darker hover color
            color: "#FFFFFF",
            _disabled: {
              bg: "metloBlue",
              color: "#FFFFFF",
              opacity: 0.5,
            },
          },
          _active: {
            bg: "metloBlue",
            color: "#FFFFFF",
          },
          _disabled: {
            bg: "metloBlue",
            color: "#FFFFFF",
            opacity: 0.5,
          },
        },
        delete: {
          borderWidth: "0px",
          bg: "deleteRed",
          color: "#FFFFFF",
          _hover: {
            bg: "#C40F15",
            color: "#FFFFFF",
            _disabled: {
              bg: "#C93D44",
              color: "#FFFFFF",
              opacity: 0.5,
            },
          },
          _active: {
            bg: "deleteRed",
            color: "#FFFFFF",
          },
          _disabled: {
            bg: "deleteRed",
            color: "#FFFFFF",
            opacity: 0.5,
          },
        },
        createSecondary: {
          bg: "#FFFFFF",
          color: "metloBlue",
          border: "1px",
          _hover: {
            bg: "metloBlue",
            color: "#FFFFFF",
          },
        },
        deleteSecondary: {
          bg: "#FFFFFF",
          color: "deleteRed",
          border: "1px",
          _hover: {
            bg: "deleteRed",
            color: "#FFFFFF",
          },
        },
      },
    },
  },
  breakpoints,
});

export default theme;
