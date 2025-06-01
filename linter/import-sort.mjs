export default [
  {
    files: ["**/*.ts", "**/*.tsx", "**/*.cts", "**/*.mts", "**/*.js", "**/*.jsx", "**/*.cjs", "**/*.mjs"],
    rules: {
      // Import
      "import/export": "error",
      "import/first": "error",
      "import/no-duplicates": "error",
      "import/newline-after-import": "error",
      "import/no-empty-named-blocks": "error",
      "import/no-useless-path-segments": "off",
      "import/no-unresolved": "off",
      "import/namespace": "off",
      "import/no-anonymous-default-export": "off",
    },
  },
]
