import { ReactNode } from "react";
import "./Modal.css";
import ReactDom from "react-dom";

interface Modals {
  children: ReactNode;
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
}

const Modal = ({ children, isOpen, setIsOpen }: Modals) => {
  if (!isOpen) return null;

  return ReactDom.createPortal(
    <>
      <div className="overlay" onClick={() => setIsOpen(false)}></div>
      <div className="modal_styles">{children}</div>
    </>,
    document.getElementById("portal") as HTMLDivElement
  );
};

export default Modal;
