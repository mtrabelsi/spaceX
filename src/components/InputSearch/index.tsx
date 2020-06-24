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
                placeholder={props.placeholder || 'Write something'}
                rightIcon={SearchIcon}
                primaryBorder={true}
                primaryColor={true}
                hasIconRight={true}
                {...props}
              />
            </MarginFix>

        </InputSearchWrap>)
}

export default InputSearch