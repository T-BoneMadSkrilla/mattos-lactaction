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

// profile picture 
// hypothically speaking, boolean what type of user. Gives vs receives. Permissions 
// module comes up when unacceptable behavior = 'hey our information shows that you are correct type of user here's the link to edit your profile

// mongodb 

// USER PROFILE TABLE
// 1. name
// 2. age
// 3. email address
// 4. user_profile_id ++ 0 1 2 3 4  
// 5. s3 for profile picture 
// 6. type of user. Save as string from couple of options
// 7. date created time stamp 
// 8. location: ZIP

// CHILD TABLE
// 1. user_profile_id  *foreign key*
// 2. 
