import s from 'styled-components'
import {
    primarytColor,
    primaryFontSize,
    fontFamily,
    secondaryFontSize,
    backgroundImage,
    veryLightColor,
    startColor,
    defaultBoxShadow,
    specialBoxShadow,
    endColor
} from './../Global'
import { ButtonPropType } from './types'

export const Button = s.button<ButtonPropType>`
  opacity: ${p => p.disabled ? 0.3 : 1};
  cursor: ${p => p.disabled ? 'none': 'pointer'};
  pointer-events: ${p => p.disabled ? 'none' : 'initial'};
  box-shadow: ${p => p.special? specialBoxShadow : defaultBoxShadow};
  background: ${p => p.simpleMode ? '#19d1a6' :  backgroundImage};
  border: none;
  color: ${veryLightColor};
  padding: 5px 0;
  outline: none;
  min-width: 200px;
  height: 40px;
  border-radius: 3px;
  position: relative;
  font-family: ${fontFamily};
  text-transform: uppercase;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const ButtonText = s.span`

  font-size: ${secondaryFontSize};
  font-family: ${fontFamily};
  font-style: normal;
  text-transform: uppercase;
`