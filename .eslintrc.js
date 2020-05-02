const path = require('path');
module.exports = {
  extends: ['airbnb', 'prettier/@typescript-eslint', 'prettier/react'],
  plugins: ['react-hooks', 'prettier','@typescript-eslint'],
  env: {
    browser: true,
    node: true,
    jest: true,
  },
  settings: {
    'import/resolver': {
      node: {
        paths: [path.resolve(__dirname, './')],
        "extensions": [".js", ".jsx", ".ts", ".tsx"]
      },
      alias: {
        map: [
          ['routes', './routes'],
          ['static', './static'],
          ['components', './components'],
        ],
      },
    },
  },
  rules: {
    "import/extensions": [
      "error",
      "ignorePackages",
      {
        "js": "never",
        "jsx": "never",
        "ts": "never",
        "tsx": "never"
      }
    ],
    'react/jsx-filename-extension': 'off',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'jsx-a11y/control-has-associated-label': 0,
    'linebreak-style': 0,
    'semi-spacing': [2, { before: false, after: true }],
    'space-before-blocks': [2, 'always'],
    'import/no-extraneous-dependencies': 0,
    indent: [
      2,
      2,
      {
        SwitchCase: 1,
      },
    ],
    'no-unused-vars': 2,
    'no-console': 1,
    'no-use-before-define': 0,
    'no-underscore-dangle': [
      'error',
      {
        allow: ['_id'],
      },
    ],
    'comma-dangle': [2, 'always-multiline'],
    'prettier/prettier': 'error',
    'react/jsx-props-no-spreading': 0,
    'jsx-a11y/label-has-associated-control': 0,
    'jsx-a11y/anchor-is-valid': [
      'warn',
      {
        components: ['Link'],
        specialLink: ['hrefLeft', 'hrefRight'],
        aspects: ['invalidHref', 'preferButton'],
      },
    ],
    'jsx-a11y/click-events-have-key-events': 'off',
    'padding-line-between-statements': [
      'error',
      { blankLine: 'always', prev: '*', next: 'return' },
      { blankLine: 'always', prev: 'block', next: '*' },
      { blankLine: 'always', prev: 'block-like', next: '*' },
      { blankLine: 'always', prev: 'export', next: '*' },
    ],
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2020, // Allows for the parsing of modern ECMAScript features
    sourceType: "module", // Allows for the use of imports
    ecmaFeatures: {
      jsx: true // Allows for the parsing of JSX
    }
  },
};