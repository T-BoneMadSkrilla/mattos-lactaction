import React,{Component} from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import subRoutes from '../../routes/subRoutes';
import {Link} from 'react-router-dom';

class BreastFriend extends Component{
    render(){
        return(
            <Router>
                <div>
                    <div>
                    <Link to='/breastfriend/feeding'> Feeding </Link>
                    <Link to='/breastfriend/pumping'> Pumping </Link>
                    <Link to='/breastfriend/diapers'> Diapers </Link>
                    <Link to='/breastfriend/sleep'> Sleep </Link>
                    <Link to='/breastfriend/weight'> Weight </Link>
                    <Link to='/breastfriend/foodjournal'> Food Journal </Link>
                    </div>
                    {subRoutes}
                </div>
            </Router>
        )
    }
}

export default BreastFriend;