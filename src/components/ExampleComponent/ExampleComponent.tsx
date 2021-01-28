import { FC } from 'react'

export type ExampleComponentProps = {
  text?: string
}

const ExampleComponent: FC<ExampleComponentProps> = ({ text = 'Example component' }) => (
  <div>Test – {text}!</div>
)

export default ExampleComponent
