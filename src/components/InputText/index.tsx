import React, { Component } from 'react';
import { Input, InputWrap, Img } from './atoms';

const InputBasic : React.FC<any> = (props) => {
    return(<InputWrap 
            {...props} 
            style={props.inputWrapperStyle}
        >
        {props.hasIconLeft && 
            props.leftIcon && 
            <Img 
                style={props.leftIconStyle} 
                src={props.leftIcon} 
                onClick={props.leftIconClickHandler} 
            />
        }

        <Input 
            {...props} 
            style={props.inputStyle} 
            type="text" 
            placeholder={props.placeholder} 
        />

        {props.hasIconRight && 
            props.rightIcon && 
            <Img 
                style={props.rightIconStyle} 
                src={props.rightIcon} 
                onClick={props.rightIconClickHandler}  
            />
        }
    </InputWrap>)
}

export default InputBasic