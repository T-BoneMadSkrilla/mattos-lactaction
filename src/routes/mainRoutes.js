import React from 'react'
import {Switch, Route} from 'react-router-dom';
import LandingPage from '../components/landingPage/LandingPage';
import BreastFriend from '../components/breastFriend/BreastFriend';
import GetSupport from '../components/getSupport/GetSupport';

export default (
    <Switch>
        <Route path='/' exact component={LandingPage}></Route>
        <Route path='/breastfriend' component={BreastFriend}></Route>
        <Route path='/getsupport' component={GetSupport}></Route>
    </Switch>
);