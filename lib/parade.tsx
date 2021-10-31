import React, { FC, Fragment } from "react";
import dynamic, { DynamicOptions } from "next/dynamic";
import Layout from "./components/Layout/Layout";
import Info from "./modules/Info/Info";
import Preview from "./modules/Preview/Preview";
import Properties from "./modules/Properties/Properties";
import type { ModuleProps } from "./modules/type";
import { PropStateProvider } from "./services/PropState";
import Item from "./components/Item/Item";

const parade = (
  context: __WebpackModuleApi.RequireContext,
  options?: DynamicOptions & Pick<ModuleProps, "cwd" | "prefix">
) => {
  const keys = context.keys();

  if (keys.length === 0) {
    throw new Error(
      `No components found in "${context.id}"\n       Try adjusting your \`require.context\``
    );
  }

  const ComponentsParade: FC<
    { docgen?: any; title?: string } & Pick<ModuleProps, "cwd">
  > = ({ title = "🚩 Parade!", docgen, ...props }) => {
    const data = JSON.parse(docgen)?.data;
    const cwd = options.cwd || props.cwd;

    return (
      <Layout title={title} {...props}>
        {keys.map((key) => {
          const DynamicComponent = dynamic(async () => context(key), options);
          const path = key.replace(/^\.\//, "");
          const file = data?.find(({ key: file }) => file.includes(path))
            ?.value[0];

          const props = {
            docgen: file,
            cwd,
            prefix: options?.prefix,
            path,
            Component: DynamicComponent,
          };

          return (
            <Fragment key={key}>
              <PropStateProvider>
                <div id={key}>
                  <Item>
                    <Info {...props} />
                    <Preview {...props} />
                    <Properties {...props} />
                  </Item>
                </div>
              </PropStateProvider>
            </Fragment>
          );
        })}
      </Layout>
    );
  };

  return ComponentsParade;
};

export default parade;
