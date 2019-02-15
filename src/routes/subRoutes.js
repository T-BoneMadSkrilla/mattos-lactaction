import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Diapers from '../components/breastFriend/breatFriendSubRoutes/diapers/Diapers';
import Feeding from '../components/breastFriend/breatFriendSubRoutes/feeding/Feeding';
import FoodJournal from '../components/breastFriend/breatFriendSubRoutes/foodJournal/FoodJournal';
import Pumping from '../components/breastFriend/breatFriendSubRoutes/pumping/Pumping';
import Sleep from '../components/breastFriend/breatFriendSubRoutes/sleep/Sleep';
import Weight from '../components/breastFriend/breatFriendSubRoutes/weight/Weight';

export default (
    <Switch>
        <Route path='/breastfriend/diapers' component={Diapers}></Route>
        <Route path='/breastfriend/feeding' component={Feeding}></Route>
        <Route path='/breastfriend/foodjournal' component={FoodJournal}></Route>
        <Route path='/breastfriend/pumping' component={Pumping}></Route>
        <Route path='/breastfriend/sleep' component={Sleep}></Route>
        <Route path='/breastfriend/weight' component={Weight}></Route>
    </Switch>
);