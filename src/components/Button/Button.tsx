import { ButtonProps } from "./Button.d";
import { StyledButton } from "./Styles";

function Button({
  children,
  disabled = false,
  onClick = () => {},
  variant = "contained",
  color = "primary",
}: ButtonProps) {
  return (
    <StyledButton
      onClick={onClick}
      disabled={disabled}
      variant={variant}
      color={color}
    >
      {children}
    </StyledButton>
  );
}

export default Button;
