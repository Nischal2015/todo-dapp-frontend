import { ReactElement } from "react";
import { ChildrenProp } from "../../App.d";
import { Colors, Variant } from "~/types";

export type ButtonVariant = {
  variant?: Variant;
  color?: Colors;
};
export interface ButtonProps extends ChildrenProp, ButtonVariant {
  onClick?(): void;
  disabled?: boolean;
}
