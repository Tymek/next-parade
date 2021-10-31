import React, { FC, useEffect, useMemo } from "react";
import { PropType } from "../../docgen/valueType";
import { usePropState } from "../../services/PropState";
import ModuleType from "../type";
import styles from "./properties.module.css";

const Property: FC<PropType> = ({ name, description, ...props }) => {
  const defaultValue = props?.defaultValue?.value;
  const isRequired = !!props?.required;
  const type = props?.type?.name;
  const [_, setState] = usePropState();

  const valueControl = useMemo(() => {
    const onChange = (value) =>
      setState((prev) => ({ ...prev, [name]: value }));
    if (type === "string" || type.includes("string")) {
      return (
        <input
          className={styles.input}
          name={name}
          onChange={(event) => onChange(event.target.value)}
          defaultValue={defaultValue}
        />
      );
    }
    if (type === "number") {
      return (
        // TODO: get `step` from description?
        <input
          className={styles.input}
          type="number"
          name={name}
          onChange={(event) => onChange(event.target.value)}
          defaultValue={defaultValue}
        />
      );
    }
    if (type === "boolean") {
      return (
        <input
          type="checkbox"
          name={name}
          onChange={(event) => {
            return onChange(event.target.checked);
          }}
          defaultValue={defaultValue}
        />
      );
    }
    return defaultValue;
  }, [name, type, isRequired, defaultValue]);

  return (
    <>
      <tr>
        <td>
          {name}
          {isRequired && (
            <span className={styles.required} title="required">
              *
            </span>
          )}
        </td>
        <td>
          <code className={styles.type}>{type}</code>
        </td>
        <td className={styles.value}>{valueControl}</td>
        {description && <td className={styles.description}>{description}</td>}
      </tr>
    </>
  );
};

const Properties: ModuleType = ({ docgen }) => {
  const { props } = docgen;

  return (
    <table className={styles.table}>
      <tbody>
        <tr>
          <th>Property</th>
          <th>Type</th>
          <th>Value</th>
        </tr>
        {props &&
          Object.values(props).map((prop) => (
            <Property key={prop?.name} {...prop} />
          ))}
      </tbody>
    </table>
  );
};

export default Properties;
