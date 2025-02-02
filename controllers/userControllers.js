const Test = require('../model/User')
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');


const registeruser = async()=>{
    const { user, password} = req.body;
    if(!username || !password){
        console.log(error)
        return res.status(400).json({
            error: "Please enter your username and password."
        })
    }
    try{
         const checkUser = UserActivation.findOne({where: username})
         if(!checkExistingUser){
            return res.status(400).json({
                error:"New user required"
            })
         }
         const saltRound = 10;
         const hashPassword = await bcrypt.hash(password,saltRound)

         const newUser = await UserActivation.creat({user, hashPassword});
         res.status(200).json({message: "Register Successful ....."})
    }catch (error){
        console.error(error.message);
    }
}

const loginUser = async() =>{
    const {username, password} = req.body;
    //validate username
    if(!username || !password){
        return res.status(400).json({
            error: "Please enter your username and password."
})
    }

    try{
        const checkUser = UserActivation.findOne({where: username})
        if(!checkExistingUser){
           return res.status(400).json({
               error:"New user required"
           })
        }

        const isMatch = await bcrypt.compare(password,checkExistingUser.password)
        if(!isMatch){
            return res.status(400).json({
                error: "Insert proper passsword!!!"
            })
        }

        const token = jwt.sign(
            {id: checkUser.username,username:username},
            asdfghjklkjhghjmnbvfghjk,
            {expiresIn: "24h"}

        )

        res.status(200).json({message: "Successfully login"})
    }
catch(error){
    res.status(500).json({error: "Something went wrong"});
}}

// //create functions to get all Test users

// const getest = async (req, res)=>{
// try{
//     const tests = await Test.findAll();
//     res.status(200).json(tests);
//     console.log('Retreive all test users');


// }

// catch(erros){
//     res.status(500).json({error: 'Faild to retrive test date'});
// }
// }

// const createTest = async (req, res)=>{
//     try{
//         const{username,password}= req.body;
//         const newtest = await Test.create({username,password});
//             res.status(200).json(newtest);
//             console.log("New test user Created")
        
//     }
//     catch(error){
//         res.status(500).json({error: 'Faild to create test user'})
//     }
// }

module.exports = { registeruser, loginUser};