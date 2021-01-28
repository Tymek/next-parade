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

  return () => (
    <>
      <Head>
        <title>Parade</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1>🚩 Parade!</h1>
        {keys.map((key) => {
          const DynamicComponent = dynamic(async () => context(key), options)

          return (
            <div key={key}>
              <h2>{key}</h2>
              <DynamicComponent />
            </div>
          )
        })}
      </main>
    </>
  )
}

export default parade
