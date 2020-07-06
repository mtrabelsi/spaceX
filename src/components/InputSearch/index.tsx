import React from 'react';
import CloseIcon from '../../assets/icons/Close.png';

import InputText from '../InputText';
import { InputSearchWrap, MarginFix } from './atoms';
import { InputSearchPropType } from './types';

const InputSearch : React.FC<InputSearchPropType> = (props) => {
  const {
    inputWrapperStyle,
    containerStyle,
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
    onChange,
  } = props;
  const isInputDirty = value !== '';
  return (
    <InputSearchWrap
      style={containerStyle}
    >
      <MarginFix>
        <InputText
          onChange={onChange}
          placeholder={placeholder || 'Placeholder not set!'}
          hasIconRight={hasIconRight}
          rightIcon={isInputDirty ? CloseIcon : rightIcon}
          rightIconStyle={rightIconStyle}
          rightIconClickHandler={rightIconClickHandler}
          hasIconLeft={hasIconLeft}
          leftIcon={leftIcon}
          leftIconStyle={leftIconStyle}
          leftIconClickHandler={leftIconClickHandler}
          inputWrapperStyle={inputWrapperStyle}
          value={value}
          inputStyle={inputStyle}
        />
      </MarginFix>
    </InputSearchWrap>
  );
};

export default InputSearch;
