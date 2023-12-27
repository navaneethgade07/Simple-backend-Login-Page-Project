const schema = require('../models/model')


const createUser = async (req,res)=>{

    try {
        const {userName,passWord} = schema.create(req.body);
        
    } catch (error) {
        
    }
    
    // try {
    //     const user = await schema.findOne({userName,passWord});

    //     if (user) {
    //         res.json({success : true , message : 'Login Successfully'});
    //     } else {
    //         res.json({success:false , message:'inavalid credentials'})
    //     }
    // } catch (error) {
    //     res.status(500).json({success:false , message:'Internal server Error'});    
    // }
}

module.exports = {createUser};