import React from 'react';
import { IButtonProps } from './IButtonProps'


const Button: React.FC<IButtonProps> = (props: IButtonProps) => {
    const onClick = () => {
        if(props.onClick){
            props.onClick();
        }
    }

    return <input type="button" value={props.text} onClick={onClick} disabled={props.disable ? true: false} />
}

export default Button;