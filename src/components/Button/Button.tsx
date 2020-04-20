import React from 'react';
import { IButtonProps } from './IButtonProps';
import './ButtonStyles.css';

const Button: React.FC<IButtonProps> = (props: IButtonProps) => {
    const onClick = () => {
        if(props.onClick){
            props.onClick();
        }
    }

    const getVariant = (): string => {
        const variant = props.variant;

        switch(variant){
            case "primary":
                return "btn primary";
            case "success":
                return "btn success";
            case "danger":
                return "btn danger";
            case "warning":
                return "btn warning";
            default: 
                return "btn";
        }
    }

    const { text, disable } = props;
    return <input 
                type="button" 
                value={text} 
                onClick={onClick} 
                disabled={disable ? true: false}
                className={getVariant()}
            />
}

export default Button;