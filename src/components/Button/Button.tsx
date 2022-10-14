import { ButtonProps } from "./Button.d";
import { StyledButton } from "./Styles";

function Button({
  children,
  onClick = () => {},
  disabled = false,
}: ButtonProps) {
  return (
    <StyledButton onClick={onClick} disabled={disabled}>
      {children}
    </StyledButton>
  );
}

export default Button;
