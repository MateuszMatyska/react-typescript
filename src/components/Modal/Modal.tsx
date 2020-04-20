import React from 'react';
import Button from 'components/Button/Button';
import './style.css';

const Modal:React.FC<any> = ({children, title, visible, onSubmit, onClose}: any) => {
    return <div className={ visible ? "modal modal--visible" : "modal"}>
        <div className="modal__content">
        <div className="modal__header">
            <h1>{title}</h1>
        </div>
        <div className="modal__body">
            {children}
        </div>
        <div className="modal__footer">
            <div className="modal__footer--btn" ><Button text=" Edit " variant="primary" onClick={() => {onSubmit()}}/></div>
            <div className="modal__footer--btn" ><Button text="Cancel" onClick={() => {onClose()}} /> </div>
        </div>
        </div>
    </div>
}

export default Modal;