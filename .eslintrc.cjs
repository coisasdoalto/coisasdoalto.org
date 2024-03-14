module.exports = {
  extends: ['mantine', 'plugin:@next/next/recommended', 'plugin:jest/recommended'],
  plugins: ['testing-library', 'jest'],
  overrides: [
    {
      files: ['**/?(*.)+(spec|test).[jt]s?(x)'],
      extends: ['plugin:testing-library/react'],
    },
  ],
  parserOptions: {
    project: './tsconfig.json',
  },
  rules: {
    'react/react-in-jsx-scope': 'off',
    'import/extensions': 'off',
    'import/order': [
      'error',
      {
        'alphabetize': {
          'order': 'asc',
          'caseInsensitive': true
        },
        'newlines-between': 'always',
        'groups': [
          'builtin',
          'external',
          'internal',
          'sibling',
          'parent',
          'index'
        ],
        'pathGroups': [
          {
            'pattern': 'react',
            'group': 'builtin',
            'position': 'before'
          },
          {
            'pattern': 'next',
            'group': 'builtin',
            'position': 'before'
          },
          {
            'pattern': '~/*',
            'group': 'internal'
          }
        ],
        'pathGroupsExcludedImportTypes': ['react', 'next']
      }
    ],
  },
};
