import React from 'react';
import { IInputProps } from './IInputProps';

const Input: React.FC<IInputProps> = (props: IInputProps) => {
    return <input type={props.type} value={props.value} onChange={props.onChange} />
}

export default Input;