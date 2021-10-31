# 🚩 Parade!

Lightweight UI component stories and documentation showcase for [Next.js](https://nextjs.org/).

> ⚠️ Pre-alpha: This is a proof-of-concept. You will be disappointed!

**Why?**<br/>
It's easy and **_fast_**.<br/>
No additional steps in CI/CD.<br/>
No need to align webpack config.

## Usage

```bash
npm install next-parade
yarn add next-parade
```

Configure and render it on a page:

```js
// ./pages/index.js
import parade from "next-parade";
import withStaticProps from "next-parade/props";

const context = require.context("../src/components", true, /\.js/); // ❗ relative path and regex
export default parade(context);
export const getStaticProps = withStaticProps(context, "src/components"); // path from project root
```

By convention React Component should be the default export from a file.

`children` props require annotation.

## Prior art

- [Storybook](https://github.com/storybookjs/storybook/tree/master/app/react) - runs on top of 'create-react-app'
- [Docz](https://github.com/doczjs/docz/stargazers/) - runs on Gatsby. It's where I copied `lib/docgen` from
- [Styleguidist](https://github.com/styleguidist/react-styleguidist) - looks slim and promising. I did not have the opportunity use it nor to dive in it's code yet.

Idea behind this project is to prove that something simillar can be done on Next.js

## Development

```bash
npm run dev
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Roadmap

- ~~live edit props~~
- source code preview/copy
- parse markdown
- order of elements (sort)
- add "last build" to website

### Advanced example

```tsx
// ./pages/showcase.tsx
import { GetStaticProps } from "next";
import parade from "next-parade";
import withStaticProps from "next-parade/props";
import styles from "../styles/Home.module.css";

const context = require.context("../components", true, /\/[A-Z]\w\.tsx/);
const ComponentsParade = parade(context);

const Home = ({ ...props }) => (
  <div className={styles.container}>
    <ComponentsParade
      {...props}
      title="Styleguide"
      style={{ maxWidth: "600px" }}
    />
  </div>
);

export default Home;

export const getStaticProps: GetStaticProps = async (context) => {
  const output = withStaticProps(context);
  return {
    ...output,
    props: {
      ...output.props,
      // additional props and overrides
    },
  };
};
```
