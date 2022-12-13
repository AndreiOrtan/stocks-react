import { ReactNode } from "react";
import "./Modal.css";
import ReactDom from "react-dom";

interface Modals {
  open: boolean;
  children: ReactNode;
}

const Modal = ({ open, children }: Modals) => {
  if (!open) return null;
  return ReactDom.createPortal(
    <>
      <div className="overlay"></div>
      <div className="modal_styles">{children}</div>
    </>,
    document.getElementById("portal") as HTMLDivElement
  );
};

export default Modal;
