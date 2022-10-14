import { ReactElement } from "react";

export interface ModalProps {
  openModal: boolean;
  setOpenModal(value: boolean): void;
  renderContent: ReactElement;
}
