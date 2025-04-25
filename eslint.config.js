import js from "@eslint/js";
import eslintPluginAstro from "eslint-plugin-astro";
import turboPlugin from "eslint-plugin-turbo";
import tseslint from "typescript-eslint";

/**
 * @type {import("typescript-eslint").Linter.Config}
 * */
export default tseslint.config(
  js.configs.recommended,
  eslintPluginAstro.configs.recommended,
  {
    ignores: ["node_modules", ".turbo", ".astro", "dist"],
  },
  {
    languageOptions: {
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
  {
    extends: [
      tseslint.configs.recommendedTypeChecked,
      tseslint.configs.stylisticTypeChecked,
    ],
    files: ["**/*.ts"],
    plugins: {
      turbo: turboPlugin,
    },
    rules: {
      "turbo/no-undeclared-env-vars": "warn",
    },
  },
);
