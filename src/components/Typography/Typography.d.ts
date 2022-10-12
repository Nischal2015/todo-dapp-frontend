import { ReactNode } from "react";

export interface TypographyProps {
  children: ReactNode;
}

export type StyledTypographyProps = {
  fontSize?: string;
  fontWeight?: string;
};
