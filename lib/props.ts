import { resolve } from "path";
import { GetStaticProps } from "next";
import docgen from "./docgen";

const withStaticProps = (
  webpackContext: __WebpackModuleApi.RequireContext,
  root: string = "./"
) => {
  const keys = webpackContext.keys().map((key) => resolve(root, key));

  const data = docgen(keys);
  // TODO: detect change and reload site
  const cwd = process.env.NODE_ENV ? process.cwd() : undefined; // only in dev - security reasons
  let text = "";

  try {
    text = JSON.stringify(data, null, 2);
  } catch (err) {
    console.error("server serialize error", err);
  }

  const getStaticProps: GetStaticProps = async () => {
    return {
      props: {
        docgen: text,
        cwd,
      },
    };
  };
  return getStaticProps;
};

export default withStaticProps;
