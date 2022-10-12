import { ChildrenProp } from "../../App.d";
import { StyledPrimaryHeading } from "./Styles";

function PrimaryHeading({ children }: ChildrenProp) {
  return <StyledPrimaryHeading>{children}</StyledPrimaryHeading>;
}

export default PrimaryHeading;
