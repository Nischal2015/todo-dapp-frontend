import { PlusIcon } from "@heroicons/react/24/outline";
import { ButtonProps } from "./Button.d";
import { StyledButton } from "./Styles";

function Button({ onClick }: ButtonProps) {
  return (
    <StyledButton onClick={() => {}}>
      <PlusIcon height={20} />
    </StyledButton>
  );
}

export default Button;
