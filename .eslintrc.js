module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'airbnb-base',
    'plugin:react/recommended',
    'plugin:prettier/recommended',
    'prettier'
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: ['react'],
  rules: {
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto'
      }
    ],
    'func-names': 'off',
    'import/extensions': 'off',
    'import/no-extraneous-dependencies': 'off',
    'import/no-unresolved': 'off',
    'no-case-declarations': 'off',
    'no-console': 'off',
    'no-shadow': 'off',
    'no-unused-vars': 'off',
    'no-useless-return': 'off',
    'react/react-in-jsx-scope': 'off',
    'spaced-comment': 'off'
  },
  root: true
};
