import styled from "@emotion/styled";
import { StyledTypographyProps } from "./Typography.d";

export const StyledTypography = styled.p<StyledTypographyProps>(
  {
    color: "#303144",
    lineHeight: "1.4",
  },
  (props) => ({
    fontSize: props.fontSize || "1.4rem",
    fontWeight: props.fontWeight,
  })
);
