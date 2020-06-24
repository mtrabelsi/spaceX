import React, { Component } from 'react';
import SearchIcon from './../../assets/icons/Search.png'
import InputText from './../InputText'
import { InputSearchWrap, MarginFix } from './atoms';

const InputSearch : React.FC<any> = (props) => {

    return(<InputSearchWrap
              style={props.containerStyle}
            >
            <MarginFix>
              <InputText
                placeholder={props.placeholder || 'Placeholder not set!'}
                rightIcon={SearchIcon}
                hasIconRight={true}
                primaryBorder={true}
                primaryColor={true}
                {...props}
              />
            </MarginFix>

        </InputSearchWrap>)
}

export default InputSearch