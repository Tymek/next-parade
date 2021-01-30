import { FC } from 'react'

export type SomethingElseProps = {
  number?: number
}

/**
 * Description of the thing
 */
const SomethingElse: FC<SomethingElseProps> = ({
  number = 0,
}) => (
  <span style={{ background: '#333', color: 'white', padding: '3px' }}>Your number is – {`${number}`}</span>
)

export default SomethingElse
