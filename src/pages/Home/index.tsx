import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { backgroundImage, veryLightColor } from '../../components/Global';
import Layout from '../../components/Layout';
import { Button } from '../../components/Button/atoms';
import BtnNavigator from './BtnNavigator';

const Home : React.FC<RouteComponentProps> = (props) => {
  const { history, match, location } = props;
  return (
    <Layout
      title="Home View"
      topBarStyle={{
        color: veryLightColor,
        display: 'flex',
        justifyContent: 'center',
      }}
      style={{
        backgroundImage,
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        flexWrap: 'wrap',
      }}
      history={history}
      match={match}
      location={location}
    >
      <BtnNavigator>
        <Button
          simpleMode
          special
          onClick={() => history.push('/history')}
        >
          History
        </Button>
        <Button
          simpleMode
          special
          onClick={() => history.push('/launches')}
        >
          Launches
        </Button>
      </BtnNavigator>
    </Layout>
  );
};

export default Home;
