import React from 'react';
import { LayoutMain } from './atoms';

type LayoutProps = {
    style?: object
}

const Layout: React.FC<LayoutProps> = (props) => {
    return(<LayoutMain style={props.style}>
        {props.children}
    </LayoutMain>)
}


export default Layout;