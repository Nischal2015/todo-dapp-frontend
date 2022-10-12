import { ChildrenProp } from "../../App.d";
import { StyledSecondaryHeading } from "./Styles";

function SecondaryHeading({ children }: ChildrenProp) {
  return <StyledSecondaryHeading>{children}</StyledSecondaryHeading>;
}

export default SecondaryHeading;
