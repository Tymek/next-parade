import { existsSync } from 'fs-extra'
import { resolve } from 'path'
import { jsParser } from './javascript'
import { tsParser } from './typescript'
// import { isDev, root } from './config'
import { root } from './config'

const docgen = (files?: string[]) => {
  const tsconfig = resolve(root, 'tsconfig.json')
  const typescript = !!existsSync(tsconfig)
  // if (typescript && isDev) {
  //   console.log(`Using TypeScript. Config found at ${tsconfig}`)
  // }

  const tsFiles = files.filter(file => file.match(/\.(tsx|ts)$/))
  const jsFiles = files.filter(file => file.match(/\.(js|jsx|mjs)$/))

  return typescript
    ? tsParser(tsFiles, tsconfig).concat(jsParser(jsFiles))
    : jsParser(jsFiles)
}

export default docgen
