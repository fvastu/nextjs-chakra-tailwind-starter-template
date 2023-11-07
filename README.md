# Welcome to the NextJS TypeScript + ESLint + Prettier + Husky + Chakra UI + Tailwind CSS Setup!

[![Next.js](https://img.shields.io/badge/Next.js-v14.0.1-blue)](https://nextjs.org/)
[![Chakra UI](https://img.shields.io/badge/Chakra_UI-v2.4.1-blue)](https://chakra-ui.com/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v3.2.4-blue)](https://tailwindcss.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-v4.9.3-blue)](https://www.typescriptlang.org/)
[![Husky](https://img.shields.io/badge/Husky-v8.0.0-green)](https://github.com/typicode/husky)

## About

Are you looking to kickstart your web development journey with Next.js and TypeScript? Look no further! The nextjs-typescript-chakra-starter is here to make your life easier.

### 🚀 Supercharge Your Development

We've included a bunch of powerful tools to boost your productivity:

- **Chakra UI:** Create stunning and responsive user interfaces effortlessly.
- **Tailwind CSS:** Streamline your styling with utility-first CSS.
- **ESLint:** Catch and fix coding issues as you go.
- **ESLint Config Google:** Stay in line with Google's coding standards.
- **Prettier:** Automatically format your code to keep it clean and organized.
- **Husky:** Pre-commit hooks for a seamless development workflow.

### ⚡ Jumpstart Your Project

With this template, you can jump straight into your side project without worrying about complex setup. It's your passport to hassle-free development.

## Installation

To get started with this project, you can follow these steps:

1. 📦 Clone the repository: `git clone https://github.com/yourusername/nextjs-typescript-chakra-starter.git`
2. 📂 Navigate to the project folder: `cd nextjs-typescript-chakra-starter`
3. ⚙️ Install dependencies: `npm install`
4. 🚀 Run the development server: `npm run dev`

## Theming

Chakra UI is a versatile and customizable library for building user interfaces with ease. One of its standout features is theming, which allows you to tailor the look and feel of your application to suit your brand or style. This section will walk you through how theming works in Chakra UI and provide an example of changing the theme.

## Setting Up Chakra UI Theming

Chakra UI makes it easy to define and apply custom themes to your application. To get started, follow these steps:

1. **Create a Custom Theme**: In your project, create a custom theme file. You can use the `extendTheme` function to extend the default Chakra UI theme and add your custom styles and tokens. In your project, it might look something like this:

```javascript
import { extendTheme } from "@chakra-ui/react";
import { mode, StyleFunctionProps } from "@chakra-ui/theme-tools";

const customTheme = extendTheme({
  // Your custom theme configuration
  // ...
});

export default customTheme;
```

2. **Pass the theme to the provider**: After located the ChakraProvider, just provide the custom theme as prop:
   
```javascript
function MyApp({ Component, pageProps }: { Component: React.ComponentType; pageProps: Record<string, unknown> }) {
  return (
    <ChakraProvider theme={customTheme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}
```

3. **Toggle the change** You can simply change the theme using the function *toggleColorMode* from the useColorMode hook

```javascript
export function ThemeChanger() {
  const { colorMode, toggleColorMode } = useColorMode()
  return (
      <Button rounded="full" onClick={toggleColorMode}>
        Change to Theme {colorMode === 'light' ? 'Dark' : 'Light'}
      </Button>
  )
}
```

## Usage

You can customize and extend this starter template to build your web application. It includes a set of scripts to help with development, testing, and deployment. Some of the key scripts from the `package.json` include:

- `npm run dev`: Start the development server.
- `npm run build`: Build your application for production.
- `npm run start`: Start the production server.
- `npm test`: Run tests for your application.
- `npm run deploy`: Deploy your application using the `deploy.sh` script.
- `npm run start:dev`: Start the application in development mode.
- `npm run start:prod`: Start the application in production mode.
- `npm run check-types`: Check TypeScript types with tsc.
- `npm run check-format`: Check code formatting with Prettier.
- `npm run check-lint`: Check code linting with ESLint.
- `npm run format`: Format the code using Prettier.
- `npm run test-all`: Run all checks, linting, types, and build in one command.
- `npm run prepare`: Install Husky pre-commit hooks.
- `npm run test`: Run Jest tests.
- `npm run coverage`: Run Jest tests with coverage.
- `npm run clean`: Remove node modules and package-lock.json.

## Contributing

Feel free to contribute to this project by creating issues, proposing new features, or submitting pull requests. Your contributions are highly appreciated.

## License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT) - see the [LICENSE](LICENSE) file for details.

## Contact

If you have any questions or need assistance, you can reach out to [fvastu](https://github.com/fvastu).
