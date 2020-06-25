import React, { Component } from 'react';
import SearchIcon from './../../assets/icons/Search.png'
import CloseIcon from './../../assets/icons/Close.png'

import InputText from './../InputText'
import { InputSearchWrap, MarginFix } from './atoms';

const InputSearch : React.FC<any> = (props) => {
    const isInputDirty = props.value!== ''
    return(<InputSearchWrap
              style={props.containerStyle}
            >
            <MarginFix>
              <InputText
                placeholder={props.placeholder || 'Placeholder not set!'}
                rightIcon={isInputDirty ? CloseIcon : SearchIcon}
                hasIconRight={true}
                primaryBorder={true}
                primaryColor={true}
                {...props}
              />
            </MarginFix>

        </InputSearchWrap>)
}

export default InputSearch