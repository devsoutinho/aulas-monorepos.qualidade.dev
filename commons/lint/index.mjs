import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReactConfig from "eslint-plugin-react/configs/recommended.js";
import { fixupConfigRules } from "@eslint/compat";


export default [
  {
    languageOptions: { globals: {...globals.browser, ...globals.node} },
    rules: {
      "no-console": ["error", { allow: ["warn", "error"] }],
    }
  },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  {
    files: ["**/*.jsx"], languageOptions: { parserOptions: { ecmaFeatures: { jsx: true } } }
  },
  ...fixupConfigRules({
    ...pluginReactConfig,
    rules: {
      ...pluginReactConfig.rules,
      // 0 - Desliga a validação
      // 1 - Warn
      // 2 - Error
      "react/react-in-jsx-scope": 0,
    }
  }),
  {
    ignores: [
      "node_modules/*",
      ".next",
    ]
  }
];