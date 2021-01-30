import { join as joinPath } from 'path'
import { GetStaticProps } from 'next'
import docgen from './docgen'

const withStaticProps = (webpackContext: __WebpackModuleApi.RequireContext) => {
  const id = webpackContext.id
  const prefix = id.split(' ')[0]
  const keys = webpackContext.keys()
  const files = keys.map((key) => joinPath(prefix, key))

  const restoreKeys = ({ key, ...props }) => ({
    key: keys[files.findIndex((k) => k === key)],
    path: key,
    ...props,
  })

  const data = docgen(files)

  const getStaticProps: GetStaticProps = async () => {
    return {
      props: {
        docgen: {
          ...data,
          data: data.data.map(restoreKeys),
        },
      },
    }
  }
  return getStaticProps
}

export default withStaticProps
