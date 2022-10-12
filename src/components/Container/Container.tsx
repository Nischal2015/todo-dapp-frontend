import { ContainerProps } from "./Container.d";
import { StyledContainer } from "./Styles";

function Container({ children }: ContainerProps) {
  return <StyledContainer>{children}</StyledContainer>;
}

export default Container;
