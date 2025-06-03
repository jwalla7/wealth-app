import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  {
    ignores: [
      "**/node_modules/**",
      "**/.next/**",
      "**/out/**",
      "**/build/**",
      "**/dist/**",
      "**/.git/**",
      // Generated files patterns
      "generated/**",
      "generated/**/*",
      "**/generated/**",
      // Legacy patterns (can be removed after migration)
      "app/generated/**",
      "app/generated/**/*",
      "app/generated/**/*.js",
      "app/generated/**/*.ts",
      "app/generated/**/*.d.ts",
      "app/generated/prisma/**",
      "app/generated/prisma/**/*",
      "**/*.config.js",
      "**/*.config.mjs",
    ],
  },
  ...compat.extends("next/core-web-vitals", "next/typescript"),
];

export default eslintConfig;
