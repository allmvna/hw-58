import React from "react";

interface ModalProps extends React.PropsWithChildren {
  title: string;
  show: boolean;
  closeModal: () => void;
  arrayConfigButtons: {
    type: string;
    label: string;
    onClick: () => void;
  }[];
}

const Modal: React.FC<ModalProps> = ({
  show,
  children,
  closeModal,
  title,
  arrayConfigButtons,
}) => {
  return (
    <>
      {show && (
        <div className="modal-backdrop show" style={{ display: "block" }} />
      )}
      <div className="modal show" style={{ display: show ? "block" : "none" }}>
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5">{title}</h1>
              <button className="btn-close" onClick={closeModal}></button>
            </div>
            <div className="p-3">{children}</div>
            <div className="modal-footer">
              {arrayConfigButtons.map((button, index) => (
                <button
                  key={index}
                  className={`btn btn-${button.type}`}
                  onClick={button.onClick}
                >
                  {button.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
