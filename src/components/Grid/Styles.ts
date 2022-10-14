import styled from "@emotion/styled";
import { StyledGridProps } from "./Grid.d";

export const StyledGrid = styled.div<StyledGridProps>((props) => {
  const totalLength = 12;
  let remainingLength = 12;
  if (props.container) {
    return {
      display: "grid",
      gridTemplateColumns: "repeat(12, 1fr)",
    };
  }

  if (props.item) {
    const startColumn = totalLength - remainingLength + 1;
    remainingLength = remainingLength - props.item;
    return {
      gridColumnStart: startColumn,
      gridColumnEnd: `span ${props.item}`,
    };
  }
});
