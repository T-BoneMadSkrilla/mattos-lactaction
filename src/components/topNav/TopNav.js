import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './TopNav.css';

class TopNav extends Component {
    render(){
        return(
            <div>

                <div className='topPartNav'>

                <div className='topPartNavSpacing'>
                <Link to='/' className='topNavLogo'>MilkyMate</Link>
                </div>

                <div className='topPartNavSpacing'>
                <input placeholder='Search' results='5' className='topNavSearch'></input>
                </div>

                <div className='topPartNavSpacing'>
                <Link to='/profile'>
                <div className='topPartNavProfilePicture'></div>
                </Link>
                </div>

                </div> 

                <div className='firstDividerTopNav'></div>

                <div className='bottomPartNav'>
                <Link to='/getsupport' className='bottomPartNavMainRoutes'>Get Support</Link>
                <Link to='/breastfriend' className='bottomPartNavMainRoutes'> Breastfriend Journal </Link>
                <Link to='/milkymate' className='bottomPartNavMainRoutes'> Find a Milky Mate </Link>
                <Link to='/insights' className='bottomPartNavMainRoutes'> Insights </Link>
                <Link to='/community' className='bottomPartNavMainRoutes'> Community </Link>
                </div>

                <div className='secondDividerTopNav'></div>
            </div>
        )
    }
}

export default TopNav;