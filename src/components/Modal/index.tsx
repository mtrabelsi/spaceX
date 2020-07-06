import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import {
  ModalMain, ModalControl, ModalTitle, ModalContent, ModalBody,
} from './atoms';
import Button from '../Button';

type ModalPropType = {
    onSubmitHandle: (e: React.MouseEvent) => void,
    onCloseHandle: (e: React.MouseEvent) => void,
    title?: string
}

const Modal : React.FC<RouteComponentProps | ModalPropType> = (props) => {
  const { children } = props;
  const { onSubmitHandle, onCloseHandle, title } = props as ModalPropType;
  return (
    <ModalMain>
      <ModalTitle>{title || 'title not set?'}</ModalTitle>
      <ModalBody>
        <ModalContent>
          {children || 'Empty content'}
        </ModalContent>
        <ModalControl>
          <Button value="Submit" onClick={onSubmitHandle} />
          <Button isDanger value="Close" onClick={onCloseHandle} />
        </ModalControl>
      </ModalBody>
    </ModalMain>
  );
};

export default Modal;
