import React from 'react'
import {Provider} from 'react-redux';
import store from '../redux/store';
import {Switch, Route} from 'react-router-dom';
import LandingPage from '../components/landingPage/LandingPage';
import BreastFriend from '../components/breastFriend/BreastFriend';
import GetSupport from '../components/getSupport/GetSupport';
import MilkyMate from '../components/milkyMate/MilkyMate';
import Insights from '../components/insights/Insights';
import Community from '../components/community/Community';
import Profile from '../components/profile/Profile';

export default (
    <Provider store = {store}>
    <Switch>
        <Route path='/' exact component={LandingPage}></Route>
        <Route path='/breastfriend' component={BreastFriend}></Route>
        <Route path='/getsupport' component={GetSupport}></Route>
        <Route path='/milkymate' component={MilkyMate}></Route>
        <Route path='/insights' component={Insights}></Route>
        <Route path='/community' component={Community}></Route>
        <Route path='/profile' component={Profile}></Route>
    </Switch>
    </Provider>
);