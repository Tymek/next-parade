import { normalize } from 'path'

export const unixPath = (src: string): string => {
  return normalize(src).replace(/\\/g, '/')
}
