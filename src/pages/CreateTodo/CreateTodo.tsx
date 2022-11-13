import { useRef, useState } from "react";
import { Button, Modal, TodoModalContent } from "~/components";
import { PlusIcon } from "@heroicons/react/24/solid";
import { CreateTodoProps } from "./CreateTodo.d";
import { ButtonItemSpan, ButtonWrapper } from "./Styles";

function CreateTodo({ addTodo }: CreateTodoProps) {
  const [openModal, setOpenModal] = useState(false);
  const titleRef = useRef<HTMLInputElement>(null);
  const descriptionRef = useRef<HTMLTextAreaElement>(null);

  const buttonClickHandler = () => {
    addTodo(titleRef.current!.value, descriptionRef.current!.value);
  };

  return (
    <>
      <ButtonWrapper>
        <Button onClick={() => setOpenModal(true)}>
          <ButtonItemSpan>
            <PlusIcon height={22} />
            Create New Todo
          </ButtonItemSpan>
        </Button>
      </ButtonWrapper>
      <Modal
        openModal={openModal}
        setOpenModal={setOpenModal}
        renderContent={
          <TodoModalContent
            heading='Create Todo'
            titlePlaceholder='Todo Name'
            descriptionPlaceHolder='Todo description...'
            buttonText='Create'
            setOpenModal={setOpenModal}
            buttonHandler={buttonClickHandler}
            titleRef={titleRef}
            descriptionRef={descriptionRef}
          />
        }
      />
    </>
  );
}

export default CreateTodo;
