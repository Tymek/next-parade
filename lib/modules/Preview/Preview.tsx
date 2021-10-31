import React from "react";
import type ModuleType from "../type";
import { usePropState } from "../../services/PropState";
import styles from "./preview.module.css";

const Component: ModuleType = ({ Component }) => {
  // TODO: extract required props without default values and attempt to prevent render errors
  // TODO: add error boundary

  const [state] = usePropState();

  return (
    <div className={styles.canvas}>
      <Component {...state} />
    </div>
  );
};

export default Component;
