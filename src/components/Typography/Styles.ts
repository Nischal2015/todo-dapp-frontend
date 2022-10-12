import styled from "@emotion/styled";
import { StyledTypographyProps } from "./Typography.d";

export const StyledTypography = styled.p<StyledTypographyProps>(
  {
    color: "#303144",
  },
  (props) => ({
    fontSize: props.fontSize || "1.4rem",
    fontWeight: props.fontWeight,
  })
);
