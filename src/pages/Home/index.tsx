import React from 'react'
import { RouteComponentProps } from 'react-router-dom';
import { State } from '../../state/redux/types'
import { backgroundImage, veryLightColor } from './../../components/Global'
import Layout from '../../components/Layout';
import { Button } from '../../components/Button/atoms';

const Home : React.FC<RouteComponentProps> = (props) => {
    const { history } = props
    return (<Layout 
            title="Home View"
            topBarStyle={{
                color: veryLightColor,
                display: 'flex',
                justifyContent: 'center'
            }}
            style={{ 
                backgroundImage, 
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                flexWrap: 'wrap'
            }}>
                <div style={{ 
                        display: 'flex', 
                        justifyContent: 'space-evenly',   
                        alignItems: 'center',
                        padding: '100px 50px',
                        flexWrap: 'wrap'
                    }}
                >
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
                </div>
    </Layout>)
}

export default Home