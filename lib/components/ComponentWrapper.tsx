import React, { ComponentType, FC } from 'react'
import ValueType from '../docgen/valueType'
import PropWrapper from './PropWrapper'

type ComponentProps = {
  path: string
  docgen: ValueType
  Component: ComponentType
}

const Component: FC<ComponentProps> = ({ path, docgen, Component }) => {
  const { displayName, description, props } = docgen

  // TODO: extract required props without default values and attempt to prevent render errors

  return (
    <div>
      <h2>{displayName}</h2>
      <code>{path}</code>
      <p>{description}</p>
      <p></p>
      <div
        style={{
          border: '1px solid #dedeef',
          borderRadius: '5px',
          width: 'calc(100% + 20px)',
          padding: '10px',
          margin: '0 -10px',
        }}
      >
        <Component />
      </div>
      <div>
        <table
          style={{
            borderSpacing: '0.75em',
            borderCollapse: 'separate',
            textAlign: 'left',
          }}
        >
          <tr>
            <th>name</th>
            <th>required</th>
            <th>type</th>
            <th>default value</th>
          </tr>
          {props &&
            Object.values(props).map((prop) => (
              <PropWrapper key={prop?.name} {...prop} />
            ))}
        </table>
      </div>
    </div>
  )
}

export default Component
