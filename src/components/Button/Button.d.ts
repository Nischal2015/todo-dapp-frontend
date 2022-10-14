import { ReactElement } from "react";
import { ChildrenProp } from "../../App.d";

export interface ButtonProps extends ChildrenProp {
  onClick?(): void;
  disabled?: boolean;
}
