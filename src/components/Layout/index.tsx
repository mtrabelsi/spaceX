import React from 'react';
import { LayoutMain } from './atoms';
import { RouteComponentProps } from 'react-router-dom';
import Button from '../Button';
import LeftArrowIcon from './../../assets/icons/Left-Arrow.png'
type LayoutProps = {
    style?: object,
    showBackButton?: boolean
}

const Layout: React.FC<LayoutProps | RouteComponentProps> = (props) => {
    const { showBackButton, style, history } = props as (LayoutProps & RouteComponentProps)

    return(<LayoutMain style={style}>
        {showBackButton && <section>
            <Button 
                hasIconLeft={true}
                iconLeft={LeftArrowIcon}
                onClick={e => history.goBack()}
                value="Home"
            />
        </section>}
        {props.children}
    </LayoutMain>)
}


export default Layout;