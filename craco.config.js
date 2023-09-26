const path = require(`path`);

module.exports = {
  webpack: {
    alias: {
      "@components": path.resolve(__dirname, "src/components"),
      "@hooks": path.resolve(__dirname, "src/hooks"),
      "@models": path.resolve(__dirname, "src/models"),
      "@modules": path.resolve(__dirname, "src/modules"),
      "@services": path.resolve(__dirname, "src/services"),
      "@store": path.resolve(__dirname, "src/store"),
    },
  },
  jest: {
    configure: {
      roots: ["<rootDir>/src"],
      testMatch: ["<rootDir>/src/**/*.{spec,test}.{js,jsx,ts,tsx}"],
    },
  },
};
