import React, { FC } from "react";
import styles from "./item.module.css";

type ItemProps = {};

const Item: FC<ItemProps> = ({ children }) => {
  return <div className={styles.wrapper}>{children}</div>;
};

export default Item;
