import { useState } from "react";
import Modal from "react-modal";
import "./Dialog.css";
import CancelIcon from "../icons/CancelIcon";

export interface DialogType<T> {
  header: string;
  dialogIsOpen: boolean;
  content: T;
  onUpdate(): void;
}
const Dialog = (props: DialogType<any>) => {
  const [_, setDialogIsOpen] = useState(props.dialogIsOpen);

  const closeDialog = () => {
    setDialogIsOpen(false);
    props.onUpdate();
  };

  return (
    <Modal
      className="dialogModal flex flex-col  sm:w-2/3 md:w-1/2 lg:w-1/3 xl:w-1/4"
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
