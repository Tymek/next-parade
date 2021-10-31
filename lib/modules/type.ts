import { ComponentType, FC } from "react";
import ValueType from "../docgen/valueType";

export type ModuleProps = {
  /**
   * relative path to file resolved from context
   */
  path: string;
  /**
   * locate
   */
  cwd?: string;
  /**
   * optional prefix for absolute imports
   * @see https://nextjs.org/docs/advanced-features/module-path-aliases
   */
  prefix?: string;
  docgen: ValueType;
  Component: ComponentType;
};

type Module = FC<ModuleProps>;

export default Module;
