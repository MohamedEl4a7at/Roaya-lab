const User                = require('../models/user'),
      validations         = require('../utils/validations/user');


module.exports            = {
////////////////////////////////////////////////////////////////////sign up
    addUser               : async(req,res)=>{
        try{
            let user = await User.findOne({email:req.body.email})
            if(user){
                    res.status(409).send({message:"User with given email already exist"})
            }else{
                if(req.body.password !== req.body.confirmPassword){
                    res.status(400).send({message:"Password Does Not Match"})
                }else{
                    user = new User(req.body)
                    await user.save()
                }
                res.status(200).send(user)
            }

        }
        catch(err){
            res.status(400).send(err.message)
        }
    },
/////////////////////////////////////////////////////////////////// login
    login                   : async (req,res)=>{
        try{
            const user  = await validations.login(req.body.email,req.body.password)
                const token = user.generateToken();
                res.status(200).send({user,token})
        }
        catch(err){
            res.status(400).send({"message":err.message})
        }
    },
//////////////////////////////////////////////////////////////// update
    // update                  : async (req,res)=>{
    //     try {
    //         const updates = Object.keys(req.body)
    //         updates.forEach(el=>updates[el] = req.user[el])
    //         if(req.file)(
    //             req.user.image = "http://localhost:3000/uploads/" + req.file.filename
    //         )
    //         await req.user.save()
    //         res.status(200).send(req.mom)
    //     }
    //     catch(err){
    //         res.status(400).send({"message":err.message})
    //     }
    // }
}