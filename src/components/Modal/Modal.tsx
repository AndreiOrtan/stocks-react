import { ReactNode, useEffect, useRef } from "react";
import "./Modal.css";
import ReactDom from "react-dom";

interface Modals {
  children: ReactNode;
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
}

const Modal = ({ children, isOpen, setIsOpen }: Modals) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const eventHandler = (e: any) => {
      if (ref.current?.contains(e.target) || e.target.textContent === "Edit") {
        return;
      }
      setIsOpen(false);
    };
    document.body.addEventListener("click", eventHandler);
    return () => {
      document.body.removeEventListener("click", eventHandler);
    };
  }, []);

  if (!isOpen) return null;

  return ReactDom.createPortal(
    <>
      <div className="overlay"></div>
      <div className="modal_styles" ref={ref}>
        {children}
      </div>
    </>,
    document.getElementById("portal") as HTMLDivElement
  );
};

export default Modal;
