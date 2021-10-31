import React from "react";
import styles from "./info.module.css";
import type ModuleType from "../type";

const Component: ModuleType = ({ path, docgen, prefix }) => {
  const { displayName, description } = docgen;

  return (
    <>
      <h2 className={styles.title}>{displayName}</h2>
      <code>
        {prefix || ""}
        {path}
      </code>
      <p style={{ whiteSpace: "pre-wrap" }}>{description}</p>
    </>
  );
};

export default Component;
