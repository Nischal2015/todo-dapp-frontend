import { ListItemProps } from "./ListItem.d";
import {
  Avatar,
  Modal,
  TaskDone,
  TodoModalContent,
  Typography,
} from "~/components";
import { Draggable } from "@hello-pangea/dnd";
import { StyledDiv, StyledListItem } from "./Styles";
import { useRef, useState } from "react";
import { fetchData } from "~/lib/fetchData";

function ListItem({ title, id, index }: ListItemProps) {
  const [openModal, setOpenModal] = useState(false);
  const titleRef = useRef<HTMLInputElement>(null);
  const descriptionRef = useRef<HTMLTextAreaElement>(null);
  const { getTodo, todo, updateTodo } = fetchData();

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
            onClick={() => {
              getTodo(taskId);
              setOpenModal(true);
            }}
          >
            <TaskDone />
            <StyledDiv className='styledDiv'>
              <Typography fontSize='1.6rem' color='secondary'>
                {title}
              </Typography>
              <Avatar
                altText='face'
                src='https://www.planetware.com/wpimages/2020/02/france-in-pictures-beautiful-places-to-photograph-eiffel-tower.jpg'
              />
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
