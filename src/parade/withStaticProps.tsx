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

  // const modules = files.map(key => webpackContext(key).id)
  // const data = await docgen(files)

  const getStaticProps: GetStaticProps = async () => {
    return {
      props: {
        docgen: docgen(files).map(restoreKeys),
      },
    }
  }
  return getStaticProps
}

export default withStaticProps
