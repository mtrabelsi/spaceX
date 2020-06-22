import React from 'react'
import { connect } from 'react-redux'
import { UAction, State } from './../../state/redux/types';
import Layout from '../../components/Layout';

const Launches : React.FC<State> = (props) => {
    return(<Layout>Launches page</Layout>)
}

const mapStateToProps = (state : State ) : State => ({
    ...state
})

//const mapDispatchToProps...
export default connect(mapStateToProps, {})(Launches)