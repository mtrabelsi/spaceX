import React from 'react'
import { RouteComponentProps } from 'react-router-dom';
import { State } from '../../state/redux/types'
import { backgroundImage } from './../../components/Global'
import Layout from '../../components/Layout';

const Home : React.FC<RouteComponentProps> = (props) => {
    const { history } = props
    return (<Layout style={{ backgroundImage }}>
        Home page
        <button onClick={e => history.push('/history')}>History </button>
        <button onClick={e => history.push('/launches')}>Launches </button>
    </Layout>)
}

export default Home