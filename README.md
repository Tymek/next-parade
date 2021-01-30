# 🚩 Parade!

Lightweight UI component stories and documentation showcase for [Next.js](https://nextjs.org/).<br />
Is Storybook and Docz too bloated for you? I'm working on a simple alternative.

> ⚠️ Pre-alpha: This is a proof-of-concept.

## Usage

```bash
npm install next-parade
yarn add next-parade
```

Configure and render it on the page:

```js
// ./pages/index.js
import parade from 'next-parade'
import withStaticProps from 'next-parade/props'

const context = require.context('../src/components', true, /\.js/) // relative path and regex
export default parade(context)
export const getStaticProps = withStaticProps(context, 'src/components') // context and "absolute" path
```

By convention React Component should be the default export from a file.

### Advanced example

```tsx
// ./pages/showcase.tsx
import { GetStaticProps } from 'next'
import parade from 'next-parade'
import withStaticProps from 'next-parade/props'
import styles from '../styles/Home.module.css'

const context = require.context('../components', true, /\/[A-Z]\w\.tsx/)
const ComponentsParade = parade(context)

const Home = ({ ...props }) => (
  <div className={styles.container}>
    <ComponentsParade {...props} title="Styleguide" style={{ maxWidth: '600px' }} />
  </div>
)

export default Home

export const getStaticProps: GetStaticProps = async (context) => {
  const output = withStaticProps(context, 'components')
  return {
    ...output,
    props: {
      ...output.props,
      // additional props and overrides
    },
  }
}

```

## Development

```bash
npm run dev
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

This project is using itself for documentation.

## Roadmap

- license info (MIT? 0BSD?)
- CI
- editable props
- parse markdown
- order of elements (sort)
- add "last build" to website
