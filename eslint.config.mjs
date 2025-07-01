import globals from "globals";
import pluginReact from "eslint-plugin-react";
import json from "@eslint/json";
import markdown from "@eslint/markdown";
import css from "@eslint/css";
import { defineConfig } from "eslint/config";


export default defineConfig([
  { files: ["**/*.{js,mjs,cjs,jsx}"], languageOptions: { globals: {...globals.browser, ...globals.node} } },
  pluginReact.configs.flat.recommended,
  { files: ["**/*.json"], plugins: { json }, language: "json/json" },
  { files: ["**/*.md"], plugins: { markdown }, language: "markdown/commonmark" },
  { files: ["**/*.css"], plugins: { css }, language: "css/css" },
  {
    extends: ["eslint:recommended", "plugin:react/recommended", "prettier"],
    plugins: ["prettier"],
    rules: {
      "prettier/prettier": "error"
    }
  }
]);
