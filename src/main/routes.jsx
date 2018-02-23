import React from 'react'
import { Router, Route, IndexRoute, Redirect, hashHistory } from 'react-router'

import PaymentCycle from '../paymentCycle/paymentCycle'
import Dashboard from '../dashboard/dashboard'
import AuthOrApp from './authOrApp'

export default props => (
    <Router history={hashHistory}>
        <Route path='/' component={AuthOrApp}>
            <IndexRoute component={Dashboard} />
            <Route path='/paymentCycle' component={PaymentCycle} />
        </Route>
        <Redirect from='*' to='/' />    
    </Router>
)