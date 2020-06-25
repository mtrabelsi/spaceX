import s from 'styled-components'
import {
    primarytColor,
    primaryFontSize,
    fontFamily,
    secondaryFontSize,
    defaultBoxShadow,
    tabletWidth
  } from './../Global'
  
export const ModalMain = s.div`
    width: calc(100% - 60px);
    max-width: calc(${tabletWidth} - 20px);
    min-height: 300px;
    height: 300px;
    position: absolute;
    background: white;
    padding: 10px;
    border-radius: 5px;
    box-shadow: ${defaultBoxShadow};
    z-index: 1;
`
export const ModalControl = s.div`
  display: flex;
  justify-content: space-between;
`
export const ModalTitle = s.h1`
`
export const ModalContent = s.section`
`
export const ModalBody = s.section`
  display: flex;
  flex-direction: column;
  height: calc(100% - 80px);
  justify-content: space-between;
`