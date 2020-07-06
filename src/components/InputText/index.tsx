import React from 'react';
import { Input, InputWrap, Img } from './atoms';
import { InputSearchPropType } from '../InputSearch/types';

const InputBasic : React.FC<InputSearchPropType> = (props) => {
  const {
    inputWrapperStyle,
    leftIcon,
    leftIconClickHandler,
    leftIconStyle,
    placeholder,
    rightIconClickHandler,
    rightIcon,
    rightIconStyle,
    hasIconLeft,
    inputStyle,
    hasIconRight,
    value,
  } = props;

  return (
    <InputWrap
      style={inputWrapperStyle}
    >
      {hasIconLeft
            && leftIcon
            && (
            <Img
              style={leftIconStyle}
              src={leftIcon}
              onClick={leftIconClickHandler}
            />
            )}

      <Input
        value={value}
        style={inputStyle}
        type="text"
        placeholder={placeholder}
      />

      {hasIconRight
            && rightIcon
            && (
            <Img
              style={rightIconStyle}
              src={rightIcon}
              onClick={rightIconClickHandler}
            />
            )}
    </InputWrap>
  );
};

export default InputBasic;
