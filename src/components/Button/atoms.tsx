import s from 'styled-components';
import {
  fontFamily,
  secondaryFontSize,
  backgroundImage,
  veryLightColor,
  defaultBoxShadow,
  simpleBoxShadow,
  endColor,
  errorColor,
} from '../Global';
import { ButtonPropType } from './types';

const decideBackground = (p: ButtonPropType) => {
  if (p.simpleMode) {
    return endColor;
  } if (p.isDanger) {
    return errorColor;
  }
  return backgroundImage;
};
export const Button = s.button<ButtonPropType>`
  opacity: ${(p) => (p.disabled ? 0.3 : 1)};
  cursor: ${(p) => (p.disabled ? 'none' : 'pointer')};
  pointer-events: ${(p) => (p.disabled ? 'none' : 'initial')};
  box-shadow: ${(p) => (p.simpleMode ? simpleBoxShadow : defaultBoxShadow)};
  background: ${(p) => decideBackground(p)};
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
`;

export const ButtonText = s.span`
  font-size: ${secondaryFontSize};
  font-family: ${fontFamily};
  font-style: normal;
  text-transform: uppercase;
`;
