import { ListItemProps } from "./ListItem.d";
import { Avatar, TaskDone, Typography } from "~/components";
import { Draggable } from "react-beautiful-dnd";
import { StyledDiv, StyledListItem } from "./Styles";

function ListItem({ title, id, index }: ListItemProps) {
  return (
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
  );
}

export default ListItem;
