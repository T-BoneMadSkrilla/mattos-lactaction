import React,{Component} from 'react';
import './BottomNav.css';
import { SocialIcon } from 'react-social-icons';


class BottomNav extends Component{
    render(){
        return(
            <div>
                <div className='dividerBottomNav'></div>
                <div className='containerBottomNav'>

                    <div className='socialsBottomNav'>
                    <SocialIcon url="http://twitter.com/" />
                   
                    <SocialIcon url="http://facebook.com/" />
                    
                    <SocialIcon url="http://linkedin.com/"/>
                    
                    <SocialIcon url="http://instagram.com/"/>
                    </div>

                    <div className='milkyMateMissionBottomNav'> 
                        <div className='milkyMateTitleBottomNav'>
                        The MilkyMate Mission
                        </div>

                        <div className='containerAroundTextBottomNav'>
                            Put information about our mission here. Breastmilk for longer, creating a tribe, etc. Believe PUt information about mission here. Breastmilk for longer...

                    </div>
                        </div>

                        <div className='readThisBottomNav'>
                        <div className='milkyMateTitleBottomNav'>Read this</div>
                        <div className='containerAroundTextBottomNav'> This internet site provide infromation of general nature and is designed for educational purposes only. If you have any about your own health or the health of your child, you should always consult with a physician or...</div>
                        </div>

                </div>
            </div>
        )
    }
}

export default BottomNav;