import { useState } from "react";
import { Button, Modal, TextField, Typography } from "~/components";
import { XMarkIcon, PlusIcon } from "@heroicons/react/24/solid";
import { HoverSpan, Header, Body, Footer } from "./Styles";

function CreateTodo() {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <Button onClick={() => setOpenModal(true)}>
        <PlusIcon height={22} />
        Create New Todo
      </Button>
      <Modal
        openModal={openModal}
        setOpenModal={setOpenModal}
        renderContent={
          <>
            <Header>
              <Typography as='h2'>Create Todo</Typography>
              <HoverSpan size='3.2rem'>
                <XMarkIcon
                  height={28}
                  onClick={() => setOpenModal(false)}
                  cursor='pointer'
                />
              </HoverSpan>
            </Header>
            <Body>
              <TextField
                label='Title'
                variant='contained'
                placeholder='Todo Name'
              />
              <TextField
                as='textarea'
                label='description'
                variant='contained'
                rows={8}
                placeholder='Todo Description...'
              />
            </Body>
            <Footer>
              <Button variant='outlined' onClick={() => setOpenModal(false)}>
                Cancel
              </Button>
              <Button>Create</Button>
            </Footer>
          </>
        }
      />
    </>
  );
}

export default CreateTodo;
