import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { Button, ButtonText } from './atoms';
import { Img } from '../InputText/atoms';
import { ButtonPropType } from './types';

const Btn: React.FC<ButtonPropType | RouteComponentProps> = (props) => {
  const {
    disabled,
    buttonStyle,
    simpleMode,
    isDanger,
    iconLeft,
    hasIconLeft,
    value,
    imgStyle,
    textStyle,
    onClick,
  } = props as ButtonPropType;
  return (
    <Button
      onClick={onClick}
      simpleMode={simpleMode}
      disabled={disabled}
      isDanger={isDanger}
      style={buttonStyle}
    >
      {hasIconLeft && iconLeft && <Img src={iconLeft} style={imgStyle} />}
      <ButtonText style={textStyle}>{value}</ButtonText>
    </Button>
  );
};

export default Btn;
