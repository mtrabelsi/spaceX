import React from 'react'
import { RouteComponentProps } from 'react-router-dom';
import { State } from '../../state/redux/types'
import { backgroundImage } from './../../components/Global'
import Layout from '../../components/Layout';
import { Button } from '../../components/Button/atoms';

const Home : React.FC<RouteComponentProps> = (props) => {
    const { history } = props
    return (<Layout style={{ backgroundImage }}>
        
        <Button 
            simpleMode 
            special 
            onClick={(e: React.MouseEvent) => history.push('/history')}
        >
            History 
        </Button>
        <Button 
            simpleMode 
            special 
            onClick={(e: React.MouseEvent) => history.push('/launches')}
        >
            Launches 
        </Button>
    </Layout>)
}

export default Home