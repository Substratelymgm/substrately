import React, { useState, useEffect } from 'react';
import './modal.css';

interface Props {
    onClose: () => void;
    isOpen: boolean;
    children: React.ReactNode;
}

const Modal: React.FC<Props> = (props) => {
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        if (props.isOpen) {
            setShowModal(true);
        } else if (!props.isOpen && showModal) {
            setTimeout(() => {
                setShowModal(false);
            }, 300);
        }
    }, [props.isOpen]);

    const handleOverlayClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        if (event.target === event.currentTarget) {
            props.onClose();
        }
    };

    return showModal ? (
        <div onClick={handleOverlayClick} className={`w-full h-full flex items-center justify-center fixed inset-0 bg-black bg-opacity-70 overflow-y-auto ${props.isOpen ? 'modal open' : 'modal'} z-[1000]`}>
            {props.children}
        </div>
    ) : null;
}

export default Modal;
