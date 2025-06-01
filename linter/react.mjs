import react from "eslint-plugin-react"
import reactHooks from "eslint-plugin-react-hooks"

export default [
  {
    files: ["**/*.ts", "**/*.tsx", "**/*.cts", "**/*.mts", "**/*.js", "**/*.jsx", "**/*.cjs", "**/*.mjs"],
    settings: {
      react: { version: "19.1.0" },
    },
    // plugins: {
    //   react,
    //   "react-hooks": reactHooks,
    // },

    rules: {
      ...react.configs.recommended.rules,
      ...react.configs["jsx-runtime"].rules,
      ...reactHooks.configs.recommended.rules,

      // React
      "react/react-in-jsx-scope": "off",
      "react/self-closing-comp": "error",
      "react/prop-types": "off",
      "react/display-name": "off",
      "react/no-children-prop": "off",
      "react/no-unescaped-entities": "off",
      "react/jsx-no-target-blank": "off",
      "react/no-array-index-key": "off",

      // Hooks
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "off",

      // a11y
      "jsx-a11y/click-events-have-key-events": "off",
      "jsx-a11y/no-noninteractive-element-interactions": "off",
      "jsx-a11y/no-static-element-interactions": "off",
      "jsx-a11y/label-has-associated-control": "off",
      "jsx-a11y/media-has-caption": "off",

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
