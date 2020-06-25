import React from 'react';
import { LayoutMain, LayoutTitle, LayoutTopBar } from './atoms';
import { RouteComponentProps } from 'react-router-dom';
import Button from '../Button';
import LeftArrowIcon from './../../assets/icons/Left-Arrow.png'
type LayoutProps = {
    style?: object,
    showBackButton?: boolean,
    title: string
}

const Layout: React.FC<LayoutProps | RouteComponentProps> = (props) => {
    const { showBackButton, style, history, title } = props as (LayoutProps & RouteComponentProps)

    return(<LayoutMain style={style}>
        {showBackButton && <LayoutTopBar>
            <Button 
                hasIconLeft={true}
                iconLeft={LeftArrowIcon}
                onClick={e => history.goBack()}
                value="Home"
            />
           <LayoutTitle>{title}</LayoutTitle>
        </LayoutTopBar>}
        {props.children}
    </LayoutMain>)
}


export default Layout;