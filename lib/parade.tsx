import * as React from 'react'
import { Fragment } from 'react'
import type { FC } from 'react'
import Head from 'next/head'
import dynamic, { DynamicOptions } from 'next/dynamic'
import ComponentWrapper from './components/ComponentWrapper'
import type ValueType from './docgen/valueType'

const parade = (
  context: __WebpackModuleApi.RequireContext,
  options?: DynamicOptions,
) => {
  const keys = context.keys()

  if (keys.length === 0) {
    throw new Error(
      `No components found in "${context.id}"\n       Try adjusting your \`require.context\``,
    )
  }

  const ComponentsParade: FC<{ docgen?: any; title?: string }> = ({
    title = '🚩 Parade!',
    docgen,
    ...props
  }) => {
    const data = JSON.parse(docgen)?.data

    return (
      <Fragment>
        <Head>
          <title>{title}</title>
        </Head>
        <main style={{ padding: '0 24px' }} {...props}>
          <h1>{title}</h1>
          {keys.map((key) => {
            const DynamicComponent = dynamic(async () => context(key), options)
            const path = key.replace(/^\.\//, '')
            const file = data?.find(({ key: file }) => file.includes(path))
              ?.value[0]

            return (
              <ComponentWrapper
                docgen={file}
                key={key}
                path={path}
                Component={DynamicComponent}
              />
            )
          })}
        </main>
      </Fragment>
    )
  }

  return ComponentsParade
}

export default parade
