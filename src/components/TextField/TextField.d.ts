import { ComponentPropsWithRef, ElementType } from "react";
import { Variant } from "~/types";

type FieldProps<T extends ElementType> = {
  as?: T;
  label: string;
};

export interface TextFieldVariant {
  variant?: Variant;
}

export type TextFieldProps<T extends ElementType> = ComponentPropsWithRef<T> &
  FieldProps<T> &
  TextFieldVariant;
