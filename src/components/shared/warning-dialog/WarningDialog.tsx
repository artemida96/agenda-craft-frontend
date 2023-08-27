import { useState } from "react";
import Modal from "react-modal";
import "./WarningDialog.css";
import CancelIcon from "../icons/CancelIcon";

export interface DialogType<T> {
  itemTitle: string;
  warningDialogIsOpen: boolean;
  onUpdate(): void;
}
const WarningDialog = (props: DialogType<any>) => {
  const [_, setDialogIsOpen] = useState(props.warningDialogIsOpen);

  const closeDialog = () => {
    setDialogIsOpen(false);
    props.onUpdate();
  };

  return (
    <Modal
      className="warningModal flex flex-col  sm:w-2/3 md:w-1/2 lg:w-1/3 xl:w-1/4"
      isOpen={props.warningDialogIsOpen}
      onRequestClose={closeDialog}
    >
      <div className="flex flex-col flex-1 mt-4 ">
        <div className="w-full font-semibold self-center bg-primary rounded-lg p-4">
          Warning Dialog
        </div>
        <button
          onClick={closeDialog}
          className="absolute top-1 bg-transparent right-1 p-0 "
        >
          <CancelIcon width={24} height={24} />
        </button>
        <div className="text-gray mt-6 ">
          Are you sure you want to delete
          <span className="font-bold ml-2 ">{props.itemTitle} ?</span>
        </div>
        <div className="flex flex-1 flex-shrink-0 flex-wrap content-end items-center justify-end gap-x-2">
          <button
            onClick={closeDialog}
            type="button"
            className="bg-light p-2 inline-block "
          >
            Cancel
          </button>
          <button
            onClick={closeDialog}
            type="button"
            className="bg-primary p-2 inline-block "
          >
            Delete
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default WarningDialog;
