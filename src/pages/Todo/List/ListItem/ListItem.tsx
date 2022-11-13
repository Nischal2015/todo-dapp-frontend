import { useRef, useState } from "react";
import { ListItemProps } from "./ListItem.d";
import { TrashIcon } from "@heroicons/react/24/solid";
import { Modal, TaskDone, TodoModalContent, Typography } from "~/components";
import { Draggable } from "@hello-pangea/dnd";
import { DeleteWrapper, StyledDiv, StyledListItem } from "./Styles";
import { fetchData } from "~/lib/fetchData";

function ListItem({ title, id, index }: ListItemProps) {
  const [openModal, setOpenModal] = useState(false);
  const titleRef = useRef<HTMLInputElement>(null);
  const descriptionRef = useRef<HTMLTextAreaElement>(null);
  const { getTodo, todo, updateTodo, deleteTodo } = fetchData();

  const taskId = Number(id.split("-")[1]) - 1;

  const buttonClickHandler = () => {
    updateTodo(taskId, titleRef.current!.value, descriptionRef.current!.value);
  };

  return (
    <>
      <Draggable draggableId={id} index={index}>
        {(provided, snapshot) => (
          <StyledListItem
            {...provided.dragHandleProps}
            {...provided.draggableProps}
            ref={provided.innerRef}
            isDragging={snapshot.isDragging && !snapshot.isDropAnimating}
          >
            <TaskDone />
            <StyledDiv className='styledDiv'>
              <div
                onClick={() => {
                  getTodo(taskId);
                  setOpenModal(true);
                }}
                style={{ flexGrow: 1, padding: "1.6rem 0" }}
              >
                <Typography fontSize='1.6rem' color='secondary'>
                  {title}
                </Typography>
              </div>
              <DeleteWrapper>
                <TrashIcon fill='#321fb2' onClick={() => deleteTodo(taskId)} />
              </DeleteWrapper>
            </StyledDiv>
          </StyledListItem>
        )}
      </Draggable>
      <Modal
        openModal={openModal}
        setOpenModal={setOpenModal}
        renderContent={
          <TodoModalContent
            heading='Update Todo'
            titlePlaceholder='Todo Name'
            descriptionPlaceHolder='Todo description...'
            buttonText='Update'
            setOpenModal={setOpenModal}
            buttonHandler={buttonClickHandler}
            titleRef={titleRef}
            descriptionRef={descriptionRef}
            data={todo}
          />
        }
      />
    </>
  );
}

export default ListItem;
