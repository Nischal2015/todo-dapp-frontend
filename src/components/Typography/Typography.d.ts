import {
  ReactNode,
  ElementType,
  ComponentPropsWithoutRef,
  PropsWithChildren,
} from "react";
import { Colors } from "../../types";

type TextProps<T extends ElementType> = {
  as?: T;
  color?: Colors;
};

export type StyledTypographyProps = {
  fontSize?: string;
  fontWeight?: string;
};

export type TypographyProps<T extends ElementType> = PropsWithChildren<
  TextProps<T>
> &
  Omit<ComponentPropsWithoutRef<T>, keyof TextProps> &
  StyledTypographyProps;
