
import React from 'react';
import Layout from '../../components/Layout';

type NotFoundProps = {

}

function NotFound(props: NotFoundProps) {

    return (<Layout title="Horrible things happen!">
        Requested page does not exist!
    </Layout>)
    
}

export default NotFound;