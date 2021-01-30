import { resolve } from 'path'
import { GetStaticProps } from 'next'
import docgen from './docgen'

const withStaticProps = (
  webpackContext: __WebpackModuleApi.RequireContext,
  root: string = './',
) => {
  const keys = webpackContext.keys().map((key) => resolve(root, key))

  const data = docgen(keys)

  const getStaticProps: GetStaticProps = async () => {
    return {
      props: {
        docgen: data,
      },
    }
  }
  return getStaticProps
}

export default withStaticProps
