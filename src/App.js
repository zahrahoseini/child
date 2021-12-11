import React from 'react';
import { Switch, Route, Router } from 'react-router-dom'
import './styles.css'

const ChildHello = () => {
    return (
        <>
            <div> Hello everyOne \^-^/!</div>
        </>
    )
}

export default ({ history }) => {
    return (
        <div className="child_style" >
            <Router history={history}>
                <Switch>
                    <Route path="/" component={ChildHello} />
                </Switch>
            </Router>
        </div>
    )
}