import React from 'react'
import { connect } from 'react-redux'
import { UAction, State } from './../../state/redux/types';
import Layout from '../../components/Layout';

const History : React.FC<State> = (props) => {
    return(<Layout>History page</Layout>)
}


const mapStateToProps = (state : State ) : State => ({
    ...state
})

//const mapDispatchToProps...
export default connect(mapStateToProps, {})(History)