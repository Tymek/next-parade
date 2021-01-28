// import * as fs from 'fs-extra'
import * as fs from 'fs-extra'
import * as path from 'path'
// import logger from 'signale'
import actualNameHandler from 'react-docgen-actual-name-handler'
import * as reactDocgen from 'react-docgen'

import { root, isDev } from './config'
import { unixPath } from './utils'
import { resolver } from './docz-docgen-resolver'
import externalProptypesHandler from './externalProptypesHandler'

export const jsParser = (files: string[]) => {
  const parseFilepathProps = (filepath: string) => {
    const fullpath = path.resolve(root, filepath)
    const handlers = reactDocgen.defaultHandlers.concat([
      externalProptypesHandler(filepath),
      actualNameHandler,
    ])

    try {
      const code = fs.readFileSync(fullpath, { encoding: 'utf-8' })
      const props = reactDocgen.parse(code, resolver, handlers)
      return { key: unixPath(filepath), value: props }
    } catch (err) {
      if (isDev) {
        console.error(`Error parsing static types`)
        throw new Error(err)
      }
      return null
    }
  }

  return files.map(parseFilepathProps).filter(Boolean)
}
