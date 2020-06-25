import React from 'react';
import { LayoutMain, LayoutTitle, LayoutTopBar } from './atoms';
import { RouteComponentProps } from 'react-router-dom';
import Button from '../Button';
import LeftArrowIcon from './../../assets/icons/Left-Arrow.png'
type LayoutProps = {
    style?: object,
    showBackButton?: boolean,
    title: string,
    topBarStyle?: object
}

const Layout: React.FC<LayoutProps | RouteComponentProps> = (props) => {
    const { 
        showBackButton, 
        style, 
        history, 
        title,
        topBarStyle
    } = props as (LayoutProps & RouteComponentProps)

    return(<LayoutMain style={style}>
        <LayoutTopBar style={topBarStyle}>
            {showBackButton &&<Button 
                hasIconLeft={true}
                iconLeft={LeftArrowIcon}
                onClick={e => history.goBack()}
                value="Home"
            />}
            {title !== '' && <LayoutTitle>{title}</LayoutTitle>}
        </LayoutTopBar>
        {props.children}
    </LayoutMain>)
}


export default Layout;