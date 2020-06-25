
import React, { Component } from 'react';
import { Button, ButtonText } from './atoms';
import { Img } from '../InputText/atoms';
import { ButtonPropType } from './types';


const Btn: React.FC<ButtonPropType> = (props) => {

      return (
        <Button
          {...props}
          start={props.start}
          disabled={props.disabled}
          style={props.buttonStyle}
        >
          {props.hasIconLeft && props.iconLeft && <Img src={props.iconLeft} style={props.imgStyle} />}
          <ButtonText style={props.textStyle}>{props.value}</ButtonText>
        </Button>
      );
}
  
export default Btn;