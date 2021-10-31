import { FC } from "react";

export type ButtonProps = {
  /**
   * Text inside of the button
   */
  children?: string;
};

const Button: FC<ButtonProps> = ({ children = "Example component" }) => (
  <button
    style={{
      background: "#EC5839",
      color: "white",
      padding: "12px",
      borderRadius: "5px",
      fontWeight: "bold",
    }}
  >
    Test – {children}!
  </button>
);

// TODO: notify on action

export default Button;
