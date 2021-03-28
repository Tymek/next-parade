import { FC } from 'react'

export type SomethingElseProps = {
  number: number
  text?: string
}

/**
 * Description of the thing
 */
const SomethingElse: FC<SomethingElseProps> = ({ number, text }) => (
  <span style={{ background: '#333', color: 'white', padding: '3px' }}>
    Your number is – {`${number}`}
    {text}
  </span>
)

export default SomethingElse
