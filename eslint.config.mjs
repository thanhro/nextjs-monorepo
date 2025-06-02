import js from "@eslint/js"
import nx from "@nx/eslint-plugin"
import eslintConfigPrettier from "eslint-config-prettier"
import eslintPluginPrettier from "eslint-plugin-prettier"
import simpleImportSort from "eslint-plugin-simple-import-sort"
import globals from "globals"

export default [
  ...nx.configs["flat/base"],
  ...nx.configs["flat/typescript"],
  ...nx.configs["flat/javascript"],
  {
    ignores: [
      "**/dist",
      "node_modules",
      ".next",
      "dist",
      "out",
      "build",
      "public",
      "tsconfig.json",
      // "*.config.js",
      "*.lock",
      "README.md",
      "**/vite.config.*.timestamp*",
      "**/vitest.config.*.timestamp*",
    ],
  },
  {
    files: ["**/*.ts", "**/*.tsx", "**/*.js", "**/*.jsx"],
    rules: {
      "@nx/enforce-module-boundaries": [
        "error",
        {
          enforceBuildableLibDependency: true,
          allow: ["^.*/eslint(\\.base)?\\.config\\.[cm]?js$", "ui", "utils"],
          depConstraints: [
            {
              sourceTag: "*",
              onlyDependOnLibsWithTags: ["*"],
            },
          ],
        },
      ],
    },
  },

  eslintConfigPrettier,
  {
    files: ["**/*.ts", "**/*.tsx", "**/*.cts", "**/*.mts", "**/*.js", "**/*.jsx", "**/*.cjs", "**/*.mjs"],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        ecmaVersion: "latest",
        ecmaFeatures: { jsx: true },
        sourceType: "module",
      },
    },
    plugins: {
      "simple-import-sort": simpleImportSort,
      prettier: eslintPluginPrettier,
    },

    rules: {
      ...js.configs.recommended.rules,

      // General
      "no-var": "error",
      eqeqeq: "error",
      "no-console": "warn",
      "arrow-body-style": "off",
      camelcase: "off",
      "no-undef": "off",
      "no-unused-vars": ["error", { args: "after-used", argsIgnorePattern: "^_" }],

      // TypeScript-specific
      "@typescript-eslint/no-unused-vars": [
        "error",
        {
          args: "all",
          argsIgnorePattern: "^_",
          varsIgnorePattern: "^_",
        },
      ],
      "@typescript-eslint/no-explicit-any": 0,

      // Sort
      "simple-import-sort/imports": "error",
      "simple-import-sort/exports": "error",

      // Prettier
      "prettier/prettier": "error",
    },
  },
]
