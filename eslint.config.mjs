import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    rules: {
      "@typescript-eslint/no-unused-vars": [
        "error",
        {
          argsIgnorePattern: "^_|^params$",
          varsIgnorePattern: "^_|^SearchParams$",
          caughtErrorsIgnorePattern: "^_",
        },
      ],
      "@typescript-eslint/no-explicit-any": [
        "error",
        {
          ignoreRestArgs: true,
          fixToUnknown: false,
        },
      ],
    },
  },
  {
    files: [
      "**/app/dashboard/page.tsx",
      "**/app/project/[projectId]/delivery/page.tsx",
      "**/app/project/[projectId]/social/page.tsx",
      "**/app/project/[projectId]/policy/page.tsx",
      "**/app/project/[projectId]/page.tsx",
      "**/app/project/[projectId]/overview/page.tsx",
      "**/app/project/[projectId]/integrity/page.tsx",
      "**/app/project/[projectId]/environment/page.tsx",
    ],
    rules: {
      "@typescript-eslint/no-explicit-any": "off",
    },
  },
];

export default eslintConfig;
