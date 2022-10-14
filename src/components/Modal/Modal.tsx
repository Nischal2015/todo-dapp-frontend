import { createPortal } from "react-dom";
import { ModalProps } from "./Modal.d";
import { StyledModalOverlay, StyledModal, StyledModalGuts } from "./Style";

function Modal({ openModal, setOpenModal, renderContent = <></> }: ModalProps) {
  const $root = document.getElementById("root") as HTMLElement;

  const closeModalHandler = () => {
    setOpenModal(false);
  };
  return (
    <>
      {openModal &&
        createPortal(
          <>
            <StyledModalOverlay />
            <StyledModal>
              <StyledModalGuts>{renderContent}</StyledModalGuts>
            </StyledModal>
          </>,
          $root
        )}
    </>
  );
}

export default Modal;
