import { fixupConfigRules } from "@eslint/compat"
import { FlatCompat } from "@eslint/eslintrc"
import js from "@eslint/js"
import nx from "@nx/eslint-plugin"
import { dirname } from "path"
import { fileURLToPath } from "url"

import baseConfig from "../../eslint.config.mjs"
import eslintConfigA11Y from "../../linter/a11y.mjs"
import eslintImportSortConfig from "../../linter/import-sort.mjs"
import eslintReactConfig from "../../linter/react.mjs"

const compat = new FlatCompat({
  baseDirectory: dirname(fileURLToPath(import.meta.url)),
  recommendedConfig: js.configs.recommended,
})

export default [
  ...fixupConfigRules(compat.extends("next")),
  ...fixupConfigRules(compat.extends("next/core-web-vitals")),
  ...baseConfig,
  ...eslintReactConfig,
  ...eslintImportSortConfig,
  ...eslintConfigA11Y,
  ...nx.configs["flat/react-typescript"],
  {
    ignores: [".next/**/*"],
  },
]
