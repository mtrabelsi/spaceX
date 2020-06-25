import React from 'react'
import s from 'styled-components'
import {
  primarytColor,
  primaryFontSize,
  fontFamily,
  secondaryFontSize,
  defaultBoxShadow
} from './../Global'

export const InputSearchWrap = s.section`
  border: 1px solid ${primarytColor};
  box-shadow: ${defaultBoxShadow};
  border-radius: 10px;
  padding: 17px;
  margin: 7px 0;
`
export const MarginFix = s.section`
  margin-bottom: 12px;
`