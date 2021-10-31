import React, { FC } from "react";
import Head from "next/head";
import styles from "./layout.module.css";

const Layout: FC<{ title?: string }> = ({ title, children, ...props }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <main className={styles.main} {...props}>
        <h1>{title}</h1>
        {children}
      </main>
    </>
  );
};

export default Layout;
