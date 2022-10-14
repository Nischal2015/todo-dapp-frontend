import { ReactNode } from "react";

export interface StyledGridProps {
  container?: boolean;
  item?: number;
}

export interface GridProps extends StyledGridProps {
  children: ReactNode;
}
