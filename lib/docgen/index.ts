import { existsSync } from 'fs-extra'
import { resolve } from 'path'
import { jsParser } from './javascript'
import { tsParser } from './typescript'
// import { isDev, root } from './config'
import { root } from './config'

const docgen = (files?: string[]) => {
  console.log('>>> root:', root)
  console.log('>>> __dirname:', __dirname)
  console.log('>>> __filename:', __filename)
  console.log('>>> require.main.id:', require.main.id)
  console.log('>>> require.main.path:', require.main.path)
  console.log('>>> cwd:', process.cwd())
  const tsconfig = resolve(root, 'tsconfig.json')
  const typescript = !!existsSync(tsconfig)
  // if (typescript && isDev) {
  //   console.log(`Using TypeScript. Config found at ${tsconfig}`)
  // }

  const tsFiles = files.filter((file) => file.match(/\.(tsx|ts)$/))
  const jsFiles = files.filter((file) => file.match(/\.(js|jsx|mjs)$/))

  const data = typescript
    ? tsParser(tsFiles, tsconfig).concat(jsParser(jsFiles))
    : jsParser(jsFiles)

  return { typescript, tsFiles, jsFiles, data }
}

export default docgen
