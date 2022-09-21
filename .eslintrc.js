const statements = ['if', 'for', 'while', 'do', 'switch', 'try', 'class', 'function']
const statementsVariables = ['const', 'let', 'var']
const importAlphabetize = { 'order': 'asc' } // * Alphabetize imports
const importOrder = [
  'type', // * import type
  'builtin',  // * import react
  'external', // * import from node_modules
  'internal', // * import from src
  'parent', // * import from parent folder
  'sibling', // * import from sibling folder
  'index', // * import from index
  'object' // * import from object
]

module.exports = {
  'root': true,
  'env': {
    'browser': true,
    'es2021': true,
    'jest': true,
    'node': true
  },
  'extends': [
    'plugin:json/recommended',
    'eslint:recommended',
    'plugin:jest/recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier'
  ],
  'parser': '@typescript-eslint/parser',
  'parserOptions': {
    'ecmaFeatures': {
      'jsx': true
    },
    'ecmaVersion': 'latest',
    'sourceType': 'module'
  },
  'plugins': ['react', 'react-hooks', '@typescript-eslint', 'prettier', 'import', 'jest'],
  'settings': {
    'react': {
      'version': 'detect'
    },
    'import/resolver': {
      'typescript': {}
    }
  },
  'rules': {
    'camelcase': 'error',
    'keyword-spacing': 'off',
    'no-console': ['warn', { 'allow': ['warn', 'error'] }],
    'no-duplicate-imports': 'off',
    'no-empty-function': 'off',
    'quotes': ['error', 'single'],
    'react/prop-types': 'off',
    'react/react-in-jsx-scope': 'off',
    'spaced-comment': 'error',
    'padding-line-between-statements': 'off'
  },
  'overrides': [
    {
      'files': ['**/*.stories.*'],
      'rules': {
        'import/no-anonymous-default-export': 'off'
      }
    },
    {
      'files': ['*.ts', '*.tsx'],
      'parser': '@typescript-eslint/parser',
      'parserOptions': {
        'project': './tsconfig.json'
      },
      'plugins': ['@typescript-eslint'],
      'rules': {
        '@typescript-eslint/consistent-type-imports': 'error',
        '@typescript-eslint/keyword-spacing': 'error',
        '@typescript-eslint/no-explicit-any': 'warn', // * Do not use `any` type
        '@typescript-eslint/no-unused-vars': 'warn', // * Unused variables
        '@typescript-eslint/padding-line-between-statements': [
          'error',
          { 'blankLine': 'always', 'prev': '*', 'next': 'return' }, // * always add a blank line before return
          { 'blankLine': 'always', 'prev': statementsVariables, 'next': statements }, // * always add a blank line before variable statements
          { 'blankLine': 'always', 'prev': statements, 'next': statementsVariables }, // * always add a blank line after variable statements
          { 'blankLine': 'always', 'prev': statements, 'next': '*' }, // * always add a blank line after statements
          { 'blankLine': 'always', 'prev': '*', 'next': statements } // * always add a blank line before statements
        ],
        'import/no-duplicates': 'error', // * Do not import duplicates
        'import/order': [
          'error',
          {
            'alphabetize': importAlphabetize, // * Alphabetize imports
            'newlines-between': 'always', // * always add a blank line between imports
            'pathGroups': [
              {
                'pattern': 'react',
                'group': 'builtin',
                'position': 'before'
              }
            ],
            'pathGroupsExcludedImportTypes': ['react'], // * Do not group react imports
            'groups': importOrder
          }
        ]
      }
    }
  ]
}
