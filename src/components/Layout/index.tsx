import React from 'react';
import { LayoutMain } from './atoms';
import { RouteComponentProps } from 'react-router-dom';

type LayoutProps = {
    style?: object,
    showBackButton?: boolean
}

const Layout: React.FC<LayoutProps | RouteComponentProps> = (props) => {
    const { showBackButton, style, history } = props as (LayoutProps & RouteComponentProps)

    return(<LayoutMain style={style}>
        {showBackButton && <section>
            <button onClick={e => history.goBack() }>
                 Back
            </button>
        </section>}
        {props.children}
    </LayoutMain>)
}


export default Layout;