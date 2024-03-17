# Coisas do Alto

> Uma coletânea de artigos cristãos sobre as Coisas do Alto

## Content scripts

### Dependencies

- [pandoc](https://pandoc.org/) - Universal markup converter. [See instalation instructions.](https://github.com/jgm/pandoc/blob/main/INSTALL.md)

### Scripts

- `yarn tsx scripts/convertDocxToMarkdown.ts` - Transform all `.docx` files in `data` folder to Markdown files in `_posts`

## Mantine Next.js template

This is a template for [Next.js](https://nextjs.org/) app router + [Mantine](https://mantine.dev/).
If you want to use pages router instead, see [next-pages-template](https://github.com/mantinedev/next-pages-template).

### Features

This template comes with the following features:

- [PostCSS](https://postcss.org/) with [mantine-postcss-preset](https://mantine.dev/styles/postcss-preset)
- [TypeScript](https://www.typescriptlang.org/)
- [Storybook](https://storybook.js.org/)
- [Jest](https://jestjs.io/) setup with [React Testing Library](https://testing-library.com/docs/react-testing-library/intro)

### npm scripts

#### Build and dev scripts

- `dev` – start dev server
- `build` – bundle application for production
- `analyze` – analyzes application bundle with [@next/bundle-analyzer](https://www.npmjs.com/package/@next/bundle-analyzer)

#### Testing scripts

- `typecheck` – checks TypeScript types
- `prettier:check` – checks files with Prettier
- `jest` – runs jest tests
- `jest:watch` – starts jest watch
- `test` – runs `jest`, `prettier:check`, `lint` and `typecheck` scripts

#### Other scripts

- `storybook` – starts storybook dev server
- `storybook:build` – build production storybook bundle to `storybook-static`
