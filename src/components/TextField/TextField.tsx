import { ElementType, useRef } from "react";
import { TextFieldProps } from "./TextField.d";
import { StyledLabel, StyledTextField } from "./Style";

function TextField<T extends ElementType = "input">({
  label = "",
  variant,
  as,
  ...rest
}: TextFieldProps<T>) {
  const inputRef = useRef<HTMLInputElement>(null);

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
        ref={inputRef}
        {...rest}
      />
    </div>
  );
}

export default TextField;
