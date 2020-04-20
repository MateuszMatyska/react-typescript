import React from 'react';
import { IInputProps } from './IInputProps';
import './InputStyles.css';

const Input: React.FC<IInputProps> = (props: IInputProps) => {
    return <input
                type={props.type} 
                value={props.value} 
                onChange={props.onChange} 
                className={props.validationFailed ? "insert-text validation-failed" : "insert-text"}
                placeholder={props.placeholder}
            />
}

export default Input;