import React,{Component} from 'react';
import axios from 'axios';
// import {connect} from "react-redux";
// import getUser from '../../redux/reducer';

class Profile extends Component{

    constructor(){
        super()
        this.state = {
            userType : '', 
            userZip : '',
            user : []
        }
    }

    componentDidMount(){
        axios.get('/api/user').then( res => {
                        this.setState({  
                            user : res.data
                        }) 
                    })
    }

    render(){
        console.log(this.state.user)

        const user = this.state.user

        const profileSection = user.map((e,i)=> {
            return(
                <div key={i}>
                    <img src={e.user_picture}></img>
                    <div>{e.user_first_name}</div>
                </div>
            )
        })

        return(
            <div>
                <form>

                    <div>
                    Do you want to donate your milk?
                    <label>
                        <input
                            type="radio"
                            name={true}
                            value={true}
                            />
                            Yes
                    </label>
                    </div>

                    <div className="form-check">
                    <label>
                        <input
                         type="radio"
                        name={false}
                        value={false} 
                        />
                        no
                    </label>
                    </div>

                    <div className="form-group">
                    <button className="btn btn-primary mt-2" type="submit">
                        Save
                    </button>
                    </div>

                    </form>
                {profileSection}
            </div>
        )
    }
}

export default Profile;

// function mapStatetoProps(state){
//     return {state};
// }

// export default connect(
//     mapStatetoProps, 
//     { getUser }
//     )(Profile);

// mongodb 

// I'll have this done by 2/25/2019
// set up auth0 for log in
// USER PROFILE TABLE
// 1. name
// 2. age
// 3. email address
// 4. user_profile_id ++ 0 1 2 3 4  
// 5. s3 for profile picture *insert* placeholder = 'hey send us a url of your face' 
// 6. type of user. Save as string from couple of options
// 7. date created time stamp 
// 8. location: ZIP

// CHILD TABLE
// 1. user_profile_id  *foreign key*
// 2. 
