const path = require("path");
const rootSrc = process.cwd();

const extendLocalRules = process.env.ESLINT_RULES_DEV || undefined;

const filter = (/** @type string */ item) => !item.includes("typescript");

const plugins = [
    "@typescript-eslint",
    "prettier",
    "simple-import-sort",
    "import",
    "unused-imports",
    "json-files",
    "eslint-plugin-eslint-comments",
];

const eslintExtends = [
    "react-app",
    "airbnb-typescript",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
    "prettier",
    "prettier/@typescript-eslint",
];

const baseRules = {
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/no-unused-vars": "off",
    "@typescript-eslint/camelcase": "off",
    "@typescript-eslint/naming-convention": ["off"],
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/interface-name-prefix": "off",
    "prettier/prettier": "error",
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "off",
    "react/react-in-jsx-scope": "off",
    "react/display-name": "off",
    "react/jsx-uses-react": "off",
    "react/jsx-filename-extension": [1, { extensions: [".ts", ".tsx", ".js", ".jsx"] }],
    "react/jsx-props-no-spreading": 0,
    "react/prop-types": 0,
    "react/require-default-props": 0,
    "no-unreachable": "error",
    "no-console": [
        "error",
        {
            allow: ["error"],
        },
    ],
    "no-debugger": "error",
    "no-use-before-define": "off",
    "eslint-comments/no-unlimited-disable": "error",
    "eslint-comments/no-unused-disable": "error",
    "simple-import-sort/exports": "error",
    "simple-import-sort/imports": [
        "error",
        {
            groups: [
                ["^react.*", "^[a-zA-Z].*"],
                ["^@(.*|$)"],
                ["^\\.\\.(?!/?$)", "^\\.\\./?$"],
                ["^\\./(?=.*/)(?!/?$)", "^\\.(?!/?$)", "^\\./?$"],
                ["^.+\\.json$"],
                ["^.+\\.s?css$"],
            ],
        },
    ],
    "import/first": "error",
    "import/no-duplicates": "error",
    "unused-imports/no-unused-imports-ts": "error",
    "unused-imports/no-unused-vars-ts": [
        "error",
        {
            vars: "all",
            varsIgnorePattern: "^_",
            args: "after-used",
            argsIgnorePattern: "^_",
        },
    ],
};

const strictRules = {
    "@typescript-eslint/prefer-regexp-exec": 0,
    "@typescript-eslint/ban-ts-comment": 2,
    "@typescript-eslint/no-unused-vars": "off",
    "@typescript-eslint/no-use-before-define": "error",
    "@typescript-eslint/no-redeclare": "error",
};

let extendRules = {};

if (extendLocalRules) {
    const extendLocalRulesPath = path.resolve(rootSrc, extendLocalRules);
    const extendRulesData = require(extendLocalRulesPath);

    if (typeof extendRulesData === "object") {
        extendRules = extendRulesData;
    }
}

const rules = {
    ...baseRules,
    ...extendRules,
    ...strictRules,
};

module.exports = {
    parser: "@typescript-eslint/parser",
    parserOptions: {
        ecmaVersion: 6,
        sourceType: "module",
        ecmaFeatures: {
            jsx: true,
            experimentalObjectRestSpread: true,
        },
    },
    plugins: plugins.filter(filter),
    extends: eslintExtends.filter(filter),
    rules,
};