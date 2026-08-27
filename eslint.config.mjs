import next from 'eslint-config-next';
import prettier from 'eslint-config-prettier/flat';
import unicorn from 'eslint-plugin-unicorn';

/** @type {import('eslint').Linter.Config[]} */
const config = [
  {
    ignores: ['.next/**', 'out/**', 'build/**', 'next-env.d.ts']
  },
  ...next,
  {
    // eslint-plugin-react's "detect" path calls context.getFilename(), removed in
    // ESLint 10, so the version is pinned explicitly to skip that lookup.
    settings: { react: { version: '19.2' } },
    plugins: { unicorn },
    rules: {
      'no-unused-vars': [
        'error',
        {
          args: 'after-used',
          caughtErrors: 'none',
          ignoreRestSiblings: true,
          vars: 'all'
        }
      ],
      'prefer-const': 'error',
      'react-hooks/exhaustive-deps': 'error',
      'unicorn/filename-case': [
        'error',
        {
          case: 'kebabCase'
        }
      ]
    }
  },
  // Must stay last so it can switch off rules that conflict with Prettier.
  prettier
];

export default config;
