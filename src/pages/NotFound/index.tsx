import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import s from 'styled-components';
import Layout from '../../components/Layout';
import Button from '../../components/Button';

type NotFoundProps = {

}

const ErrorMessage = s.section`
    margin-bottom: 20px;
`;

function NotFound(props: (NotFoundProps | RouteComponentProps)) {
  const { history } = props as RouteComponentProps;
  return (
    <Layout title="Horrible things happen, sometimes...">
      <ErrorMessage>
        Requested page does not exist! this page serves as a fall back error page,
        feel free to customize it at: /pages/NotFound/index.tsx
      </ErrorMessage>
      <Button value="Take me Home" onClick={() => history.replace('/')} />
    </Layout>
  );
}

export default NotFound;
