import React, {Component} from 'react';
import './LandingPage.css';
import {Link} from 'react-router-dom';

class LandingPage extends Component{
    render(){
        return(
            <div>
                <div className='topOfLandingPage'>
                <div className='relativeTopOfLandingPage'>
                <img className='heroImgLandingPage'src={require('../../pictures/filip-mroz-767365-unsplash.jpg')}></img>

                <div className='absoluteInformationAboveHeroImgLandingPage'>

                <div className='findAMilkyMate'>Find a MilkyMate</div>
                <div>Connect with local milk donors & recipients</div>
                <input placeholder='Search by Zip code' className='searchLandingPage'></input>
                </div>

                </div>
                </div>

                <div className='firstDividerLandingPage'></div>

                <div className='firstSectionLandingPage'>

                <div className='relativeLandingPage'>
                <img  className='objectFitLandingPage'src={require('../../pictures/nathan-dumlao-552249-unsplash.jpg')}></img>
                <div className='logoLandingPage'>Milky Mate</div>
                <div className='descriptionLandingPage'> Everything you need 
                    <br></br>
                    in a Breast Friend</div>
                <div className='descriptionTwoLandingPage'> An Interactive Web App for all <br></br>Your Human Milk Feeding Needs</div>
                <div className='createUser'>
                    <a href={process.env.REACT_APP_LOGIN}>Login/sign up</a>
                </div>
                </div>

                <div className='firstSectionPointsLandingPage'>
                    <div className='wrapperForTitleAndBulletPoint'>
                    <div className='bulletPointLandingPage'></div>
                    <div className='titleAfterBulletPointLandingPage'>
                    Advice, Tips & Encouragement
                    </div>
                    </div>
                    <div className='belowTitleAndBulletPointLandingPage'>
                    You've always got a cheerleader in your corner with MilkyMate. Get personalized support based on where you are on your human milk fedding journey
                    </div>
                    <br></br>
                    <div className='wrapperForTitleAndBulletPoint'>
                    <div className='bulletPointLandingPage'></div>
                    <div className='titleAfterBulletPointLandingPage'>
                    Breastfriend Journal
                    </div>
                    </div>
                    <div className='belowTitleAndBulletPointLandingPage'>
                    MilkyMate cares about what you care about. Track the information you feel is important (such as diapers, feeds, food) in your personal Breastfriend Journal
                    </div>
                    <div className='wrapperForTitleAndBulletPoint'>
                    <div className='bulletPointLandingPage'></div>
                    <div className='titleAfterBulletPointLandingPage'>
                    Breastfeeding Support
                    </div>
                    </div>
                    <div className='belowTitleAndBulletPointLandingPage'>
                    You're never going to struggle alone with MilkyMate by your side. Log all of your symptoms or concerns to get individualized suggestions to manage & overcome feeding challenges
                    </div>
                    <div className='wrapperForTitleAndBulletPoint'>
                    <div className='bulletPointLandingPage'></div>
                    <div className='titleAfterBulletPointLandingPage'>
                    MilkyMate Community
                    </div>
                    </div>
                    <div className='belowTitleAndBulletPointLandingPage'>
                    Connect with other humanmilk feeding families all over the world. You'll never be alone when you join the MilkyMate community.
                    </div>
                    
                </div>


                </div>
                <div className='secondDividerLandingPage'></div>

                <div className='thirdSectionLandingPage'>
                    <div>
                    Need help now?
                    </div>
                    <br></br>
                    <div>
                    Are you having issues with infant feeding or pumping? Tell us more about what's going on and MilkyMate will help you troubleshoot and provide you with relevant information to help boost your confidence while you coordinate with a Lactation Professional
                    </div>
                    <div className='iHaveConcerns'>I Have Concerns About...</div>
                    <div className='flexLinksToSupportLandingPage'>
                    <Link to='/' className='linksToSupportPageFromLandingPage'> Myself </Link>
                    <Link to='/' className='linksToSupportPageFromLandingPage'> My Baby </Link>
                    </div>
                </div>

                <div className='secondDividerLandingPage'></div>
            </div>
        )
    }
}

export default LandingPage;

