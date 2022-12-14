import { ReactNode, useEffect, useRef } from "react";
import "./Modal.css";
import ReactDom from "react-dom";

interface Modals {
  open: boolean;
  children: ReactNode;
  setIsOpen: (value: boolean) => void;
}

const Modal = ({ open, children, setIsOpen }: Modals) => {
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
      console.log("from cleanUp");
      document.body.removeEventListener("click", eventHandler);
    };
  }, []);

  if (!open) return null;

  return ReactDom.createPortal(
    <div className="containerr">
      <div className="overlay"></div>
      <div className="modal_styles" ref={ref}>
        {children}
      </div>
    </div>,
    document.getElementById("portal") as HTMLDivElement
  );
};

export default Modal;
