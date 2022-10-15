import { TypographyProps, StyledTypographyProps } from "./Typography.d";
import { StyledTypography } from "./Styles";
import { ElementType } from "react";

function Typography<T extends ElementType = "span">({
  as,
  children,
  fontSize,
  color,
  ...restProps
}: TypographyProps<T>) {
  return (
    <StyledTypography as={as} {...restProps} fontSize={fontSize} color={color}>
      {children}
    </StyledTypography>
  );
}

export default Typography;
