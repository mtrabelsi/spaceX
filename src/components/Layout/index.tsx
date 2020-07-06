import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { LayoutMain, LayoutTitle, LayoutTopBar } from './atoms';
import Button from '../Button';
import LeftArrowIcon from '../../assets/icons/Left-Arrow.png';

type LayoutProps = {
    style?: object,
    showBackButton?: boolean,
    title: string,
    topBarStyle?: object
}

const Layout: React.FC<LayoutProps & RouteComponentProps> = (props) => {
  const {
    showBackButton,
    style,
    history,
    title,
    topBarStyle,
    children,
  } = props;
  return (
    <LayoutMain style={style}>
      <LayoutTopBar style={{ ...topBarStyle, flexWrap: 'wrap' }}>
        {showBackButton && (
        <Button
          hasIconLeft
          iconLeft={LeftArrowIcon}
          onClick={() => history.goBack()}
          value="Home"
        />
        )}
        {title !== '' && <LayoutTitle>{title}</LayoutTitle>}
      </LayoutTopBar>
      {children}
    </LayoutMain>
  );
};

export default Layout;
