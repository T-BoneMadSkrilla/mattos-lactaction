import React,{Component} from 'react';

class Profile extends Component{
    render(){
        return(
            <div>
                Profile
            </div>
        )
    }
}

export default Profile;
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
