import React from 'react'
import { connect } from 'react-redux'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"
import { UAction, State } from './state/redux/types';
import { fetchStarted } from './state/redux/actions';
import Home from './pages/Home'
import History from './pages/History'
import Launches from './pages/Launches'
import NotFound from './pages/NotFound';


type Empty = {}
const MainApp : React.FC<State> = (props) => {
    const { data } = props
    const arrData = data as any[]

    return (<React.StrictMode>
        <Router>
        <div>
            <Switch>
                <Route
                    path="/"
                    exact
                    component={Home}
                />
                <Route 
                    path="/history" 
                    exact
                    component={History} 
                />
                <Route 
                    path="/launches" 
                    exact
                    component={Launches} 
                />
                <Route 
                    component={NotFound} 
                />
            </Switch>
        </div>
        </Router>
    </React.StrictMode>)
} 

const mapStateToProps = (state : State ) : State => ({
    ...state
})

//const mapDispatchToProps
export default connect(mapStateToProps, {})(MainApp)