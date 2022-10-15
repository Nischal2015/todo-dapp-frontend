import { createPortal } from "react-dom";
import { ModalProps } from "./Modal.d";
import { StyledModalOverlay, StyledModal, StyledModalGuts } from "./Style";

function Modal({
  openModal,
  setOpenModal,
  variant = "outlined",
  renderContent = <></>,
}: ModalProps) {
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
            <StyledModal variant={variant}>
              <StyledModalGuts>{renderContent}</StyledModalGuts>
            </StyledModal>
          </>,
          $root
        )}
    </>
  );
}

export default Modal;
