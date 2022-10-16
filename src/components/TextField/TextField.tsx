import { ElementType, forwardRef } from "react";
import { TextFieldProps } from "./TextField.d";
import { StyledLabel, StyledTextField } from "./Style";

function TextField<T extends ElementType = "input">(
  props: TextFieldProps<T>,
  ref: any
) {
  const { label = "", variant, as, ...rest } = props;
  return (
    <div>
      <StyledLabel htmlFor='basic-outlined' fontWeight='600'>
        {label.toUpperCase()}
      </StyledLabel>
      <StyledTextField
        as={as}
        id='basic-outlined'
        variant={variant}
        autoFocus={variant === "contained"}
        {...rest}
        ref={ref}
      />
    </div>
  );
}

export default forwardRef(TextField);
