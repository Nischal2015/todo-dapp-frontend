import styled from "@emotion/styled";
import { TypographyProps, StyledTypographyProps } from "./Typography.d";
import { StyledTypography } from "./Styles";

function Typography({
  children,
  fontSize,
  fontWeight,
}: TypographyProps & StyledTypographyProps) {
  return (
    <StyledTypography fontSize={fontSize} fontWeight={fontWeight}>
      {children}
    </StyledTypography>
  );
}

export default Typography;
