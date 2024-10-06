import React, {ReactNode} from 'react';

interface ModalProps extends React.PropsWithChildren{
    title: string;
    show: boolean;
    closeModal: () => void;
}

const Modal: React.FC<ModalProps> = ({ show, children, closeModal, title}) => {
    return (
        <>
            {show && (
                <div
                    className="modal-backdrop show"
                    style={{display: 'block'}}
                />
            )}
            <div className="modal show" style={{display: show ? "block" : "none"}}>
            <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5">{title}</h1>
                            <button className="btn-close" onClick={closeModal}>
                            </button>
                        </div>
                        <div className="p-3">{children}</div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Modal;