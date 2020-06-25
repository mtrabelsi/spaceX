
import React, { Component } from 'react';
import { Button, ButtonText } from './atoms';
import { Img } from '../InputText/atoms';
import { ButtonPropType } from './types';
import { RouteComponentProps } from 'react-router-dom';


const Btn: React.FC<ButtonPropType | RouteComponentProps> = (props) => {
  const {
    start, 
    disabled,
    buttonStyle,
    iconLeft,
    hasIconLeft,
    value,
    imgStyle,
    textStyle, 
    isDanger
  } = props as ButtonPropType
  return (
    <Button
      {...props}
      start={start}
      disabled={disabled}
      style={buttonStyle}
    >
      {hasIconLeft && iconLeft && <Img src={iconLeft} style={imgStyle} />}
      <ButtonText style={textStyle}>{value}</ButtonText>
    </Button>
  );
}
  
export default Btn;