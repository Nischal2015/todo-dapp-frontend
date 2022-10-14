import { GridProps } from "./Grid.d";
import { StyledGrid } from "./Styles";

function Grid({ container, item, children }: GridProps) {
  return (
    <StyledGrid container={container} item={item}>
      {children}
    </StyledGrid>
  );
}

export default Grid;
