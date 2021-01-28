import { FC } from 'react'

export type ExampleComponentProps = {
  text?: string
}

/**
 * Description of the thing
 */
const ExampleComponent: FC<ExampleComponentProps> = ({
  text = 'Example component',
}) => (
  <span style={{ background: '#EC5839', color: 'white', padding: '3px' }}>Test – {text}!</span>
)

export default ExampleComponent
