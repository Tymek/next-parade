import { FC } from 'react'
import Head from 'next/head'
import dynamic, { DynamicOptions } from 'next/dynamic'

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
    docgen: data,
    ...props
  }) => (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <main style={{ padding: '0 24px' }} {...props}>
        <h1>{title}</h1>
        {keys.map((key) => {
          const DynamicComponent = dynamic(async () => context(key), options)

          return (
            <div key={key}>
              <h2>{key}</h2>
              <div
                style={{
                  border: '1px solid #dedeef',
                  borderRadius: '5px',
                  width: 'calc(100% + 20px)',
                  padding: '10px',
                  margin: '0 -10px',
                }}
              >
                <DynamicComponent />
              </div>
            </div>
          )
        })}
      </main>
      <footer>
        <pre>{data && JSON.stringify(data, null, 2)}</pre>
      </footer>
    </>
  )
  return ComponentsParade
}

export default parade
