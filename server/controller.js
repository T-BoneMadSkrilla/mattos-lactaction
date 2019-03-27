const getUser = (req, res)=>{
    const dbInstance = req.app.get('db');
    console.log('here',req.user.user_id)
    // const {user_id} = req.user
    dbInstance
    .get_user([req.user.user_id])
    .then(response => res.status(200).json(response))
}

module.exports={
    getUser
}