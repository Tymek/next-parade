import { FC } from "react";

export type SomethingElseProps = {
  /**
   * Must be a number
   */
  counter: number;
  text?: string;
  /**
   * It's a boolean
   */
  open?: boolean;
};

/**
 * Description of the thing
 * TODO: add @paradeHeight param
 */
const SomethingElse: FC<SomethingElseProps> = ({
  counter,
  text,
  open = false,
}) => (
  <div style={{ background: "#333", color: "white", padding: "3px" }}>
    Counter value is – {`${counter}`}
    {text}
    {open && <div>Description is now visible with checkbox!</div>}
  </div>
);

export default SomethingElse;
