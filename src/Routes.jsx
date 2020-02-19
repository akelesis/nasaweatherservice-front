import React from 'react'
import {Switch, Route, Redirect} from 'react-router'

import Home from './components/Home'
import Sol from './components/Sol'


export default props =>
    <Switch>
        <Route exact path='/' component={Home} />
        <Route path="/sol/:id" component={Sol} />
        <Redirect from='*' to='/' />
    </Switch>