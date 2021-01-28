import * as fs from 'fs'
import * as path from 'path'
// export interface DocgenConfig {
//   handlers?: any[]
//   resolver?: (ast: any, recast: any) => any
//   propFilter?: (prop: any) => boolean
//   searchPath: string
//   searchPatterns: string[]
// }

// export interface Menu {
//   name: string
//   route?: string
//   href?: string
//   menu?: Menu[]
// }

// export interface Argv {
//   /* io args */
//   root: string
//   base: string
//   src: string
//   gatsbyRoot: string | string[]
//   files: string | string[]
//   ignore: any[]
//   watchIgnore: string
//   public: string
//   dest: string
//   editBranch: string
//   config: string
//   /* bundler args */
//   debug: boolean
//   typescript: boolean
//   propsParser: boolean
//   host: string
//   port: number
//   native: boolean
//   notUseSpecifiers: boolean
//   open: null | boolean
//   /* template args */
//   title: string
//   description: string
//   /** slugify separator */
//   separator: string
// }

// export interface Config extends Argv {
//   docgenConfig: DocgenConfig
//   hastPlugins: any[]
//   mdPlugins: any[]
//   menu: Menu[]
//   plugins: Plugin[]
//   themesDir: string
//   mdxExtensions: string[]
//   filterComponents: (files: string[]) => string[]
// }

export const root = fs.realpathSync(process.cwd())

export const getRootDir = () => path.resolve(root)

export const isDev = process.env.NODE_ENV === 'development'
