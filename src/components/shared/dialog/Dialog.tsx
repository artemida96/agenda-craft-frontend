import { useState } from "react";
import Modal from "react-modal";
import "./Dialog.css";
import CancelIcon from "../icons/CancelIcon";

const modalSmall = "w-2/3";
const modalMedium = "w-1/2";
const modalLarge = "w-1/3";

export interface DialogType<T> {
  header: string;
  dialogIsOpen: boolean;
  content: T;
  onUpdate(): void;
  contentWidth?: string;
}
const Dialog = (props: DialogType<any>) => {
  const [_, setDialogIsOpen] = useState(props.dialogIsOpen);

  const closeDialog = () => {
    setDialogIsOpen(false);
    props.onUpdate();
  };

  return (
    <Modal
      className={`dialogModal flex flex-col ${
        props.contentWidth === "small"
          ? modalSmall
          : props.contentWidth === "medium"
          ? modalMedium
          : modalLarge
      }`}
      isOpen={props.dialogIsOpen}
      onRequestClose={closeDialog}
      ariaHideApp={false}
    >
      <h2 className="font-semibold self-center">{props.header}</h2>
      <button
        onClick={closeDialog}
        className="absolute top-1 bg-transparent right-1 p-0"
      >
        <CancelIcon width={24} height={24} />
      </button>
      <div className="flex flex-1">{props.content}</div>
    </Modal>
  );
};

export default Dialog;
