export default {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 12,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ["react", "@typescript-eslint"],
  rules: {
    "react/react-in-jsx-scope": "off", // Не потрібний для React 17+
    "semi": ["error", "always"],
  },
  settings: {
    react: {
      version: "detect", // Автоматичне визначення версії React
    },
  },
};
