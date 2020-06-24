import React from 'react'
import s from 'styled-components'
import {
    primarytColor,
    secondaryColor,
    lightColor,
    primaryFontSize,
    fontFamily
  } from './../Global'

export const InputWrap = s.div`
  border-bottom: 1px solid ${lightColor};
  display: flex;
`
export const Input = s.input`
  color: ${lightColor};
  background-color: transparent;
  padding: 5px 0;
  border: none;
  outline: none;
  width: 100%;
  font-size: ${primaryFontSize};
  font-family: ${fontFamily};
  ::placeholder {
    color: ${lightColor};
    font-family: ${fontFamily};
    opacity: 0.4;
  }
`
export const Img = s.img`
  height: 20px;
  padding: 9px;
  cursor: pointer;
`