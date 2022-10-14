import { PlusIcon } from "@heroicons/react/24/outline";
import { AddButtonProps } from "./AddButton.d";
import { StyledButton } from "./Styles";

function AddButton({ onClick = () => {} }: AddButtonProps) {
  return (
    <StyledButton onClick={onClick}>
      <PlusIcon height={20} />
    </StyledButton>
  );
}

export default AddButton;
