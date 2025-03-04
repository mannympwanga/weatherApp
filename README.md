# Weather App

This is a weather application built using React and Vite. It provides real-time weather updates and forecasts for various locations.

## Features

- Real-time weather updates
- Interactive map to select locations
- Theme toggle for light and dark modes
- Error handling for network issues

## Getting Started

These instructions will help you set up and run the project on your local machine for development and testing purposes.

### Prerequisites

Ensure you have the following installed on your system:

- Node.js (version 14 or later)
- npm (Node Package Manager)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/mannympwanga/weatherApp.git

2. Navigate to the project directory: 
   ```
   cd weather-app
3. Install the dependencies: 
   ``` 
   npm install
### Running the Application
To start the development server, run:
```
npm run dev
```
This will start the Vite development server, and you can view the application in your browser at http://localhost:5173.

### Building for Production
To build the application for production, run:

```npm run build```

The production-ready files will be generated in the dist directory.

### Libraries and Tools Used
- React: A JavaScript library for building user interfaces.
- Vite: A fast development build tool for modern web projects.
- Axios: For making HTTP requests.
- TypeScript: For type safety and better development experience.

### Assumptions
- The application assumes a stable internet connection for fetching weather data.
- The weather API used is assumed to be reliable and provides accurate data.
- The application is designed to work on modern browsers that support ES6 and above.

### Troubleshooting
- Failed to Resolve Import: Ensure that all import paths are correct and that the files exist in the specified locations.
- Missing Semicolon Error: Ensure all your TypeScript and JavaScript files have proper syntax, including semicolons where necessary.

## Contributing
Contributions are welcome! Please fork the repository and submit a pull request for any improvements or bug fixes.


### Acknowledgments
Thanks to the Vite and React communities for their excellent tools and documentation.

Make sure to replace `https://github.com/yourusername/weather-app.git` with the actual URL of your repository if you plan to share it publicly. Adjust the features, libraries, tools, and assumptions sections to better fit your project's specifics.


# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config({
  extends: [
    // Remove ...tseslint.configs.recommended and replace with this
    ...tseslint.configs.recommendedTypeChecked,
    // Alternatively, use this for stricter rules
    ...tseslint.configs.strictTypeChecked,
    // Optionally, add this for stylistic rules
    ...tseslint.configs.stylisticTypeChecked,
  ],
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config({
  plugins: {
    // Add the react-x and react-dom plugins
    'react-x': reactX,
    'react-dom': reactDom,
  },
  rules: {
    // other rules...
    // Enable its recommended typescript rules
    ...reactX.configs['recommended-typescript'].rules,
    ...reactDom.configs.recommended.rules,
  },
})
```
