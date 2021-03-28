import React, { FC } from 'react'
import { PropType } from '../docgen/valueType'

const PropWrapper: FC<PropType> = ({ name, ...props }) => {
  const defaultValue = props?.defaultValue?.value
  const isRequired = !!props?.required ? 'yes' : 'no'
  const type = props?.type?.name

  return (
    <tr>
      <td>{name}</td>
      <td>{isRequired}</td>
      <td>{type}</td>
      <td>{defaultValue}</td>
    </tr>
  )
}

export default PropWrapper
