module.exports = {
  root: true,
  env: {
    es6: true,
    jest: true,
    node: true,
    browser: true,
    commonjs: true,
    serviceworker: true,
  },
  parser: '@typescript-eslint/parser',
  plugins: [
    '@typescript-eslint',
    'eslint-plugin-react-native',
    'react',
    'react-hooks',
    'import',
    'eslint-plugin-import-helpers',
  ],
  extends: [
    '@react-native-community/eslint-config',
    'airbnb-typescript',
    'plugin:import/typescript',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'prettier',
  ],
  rules: {
    'no-console': 'error',
    'prettier/prettier': 'error',
    'no-void': 'off',

    'no-magic-numbers': [
      'error',
      {
        ignore: [
          -1, 0, 0.05, 0.125, 0.25, 0.5, 0.7, 0.8, 0.12, 1, 1.5, 2, 2.5, 3, 3.5, 4, 5, 5.5, 6, 6.5, 7, 8, 8.5, 9, 9.5,
          10, 11, 12, 13, 14, 15, 16, 17, 17.5, 18.5, 19, 20, 22, 25, 26, 28, 30, 34, 38, 40, 47, 56, 90, 100, 300,
        ],
      },
    ],

    'import/extensions': 'off',
    'import/prefer-default-export': 'off',
    'import-helpers/order-imports': [
      'error',
      {
        newlinesBetween: 'always',
        groups: [
          ['module', '/^@env/'],
          '/^@(atom|asset|component|enum|hook|context|localization|screen|store|theme|type|util/)/',
          ['parent', 'sibling', 'index'],
        ],
        alphabetize: { order: 'asc', ignoreCase: true },
      },
    ],
    'no-restricted-imports': ['error', { paths: ['investo-model'] }],
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: ['**/*.stories.tsx'],
      },
    ],
    'prefer-destructuring': [
      'error',
      {
        VariableDeclarator: {
          array: true,
          object: false,
        },
        AssignmentExpression: {
          array: true,
          object: true,
        },
      },
      {
        enforceForRenamedProperties: false,
      },
    ],

    '@typescript-eslint/no-unsafe-assignment': 'warn',
    '@typescript-eslint/no-unsafe-call': 'warn',
    '@typescript-eslint/no-unsafe-return': 'warn',
    '@typescript-eslint/no-unsafe-member-access': 'warn',
    '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/array-type': ['error', { default: 'array' }],
    '@typescript-eslint/strict-boolean-expressions': ['error', { allowString: false, allowNumber: false }],
    '@typescript-eslint/naming-convention': [
      'error',
      {
        selector: 'variable',
        format: ['camelCase', 'PascalCase', 'UPPER_CASE'],
      },
      {
        selector: 'variable',
        types: ['boolean'],
        format: ['PascalCase'],
        prefix: ['is', 'should', 'has', 'can'],
      },

      {
        selector: 'parameter',
        format: ['strictCamelCase'],
        leadingUnderscore: 'allow',
        filter: {
          regex: '(Icon|Component|testID)$',
          match: false,
        },
      },
      {
        selector: 'memberLike',
        format: ['camelCase', 'PascalCase'],
      },
      {
        selector: 'enumMember',
        format: ['PascalCase', 'UPPER_CASE'],
      },
      {
        selector: 'typeLike',
        format: ['PascalCase'],
      },
      {
        selector: 'class',
        format: ['PascalCase'],
        suffix: ['Class'],
      },
      {
        selector: 'typeAlias',
        format: ['PascalCase'],
        suffix: ['Type'],
      },
      {
        selector: 'enum',
        format: ['PascalCase'],
        suffix: ['Enum', 'Selector'],
      },
      {
        selector: 'interface',
        format: ['PascalCase'],
        suffix: ['Interface'],
        filter: {
          regex: '(Props|ProcessEnv)$',
          match: false,
        },
      },
      {
        selector: 'typeParameter',
        format: ['camelCase', 'UPPER_CASE'],
      },
    ],

    'react/react-in-jsx-scope': 'off',
    'react-hooks/exhaustive-deps': 'warn',
  },
  parserOptions: {
    project: ['./tsconfig.json'],
    sourceType: 'module',
    ecmaVersion: 2021,
    tsconfigRootDir: __dirname,
    ecmaFeatures: {
      jsx: true,
    },
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
};
