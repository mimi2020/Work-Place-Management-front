// Login: async function(req, res){
//     try{
//         //1ere etape
//         const {email, password} = req.body
//         const user = await userModel.findOne({email, password})
//         if(!user){
//             return res
//             .status(404)
//             .json({
//                 status:404,
//                 message : "user is not found"
//             })
//         }
//         //2éme etape
//         const token = jwt.sign({
//             id: user.id,
//             user: user //objet
//         },
//         SECRET,
//         //{expireIn: "7 days"}
//         )
//         const result = {
//             email:user.email,
//             user:user,
//             token:token,
//             //expirIn : 7
//         }
//         return res.status(200).json({
//             // ...result,
//             data:user, 
//             success : true
//         })
//     }catch(error){
//         res.status(404).json({
//             status:404,
//             message: error.message
//         })

//     }
// }