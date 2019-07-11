import userModel  from '.../model/users'

export default class userMiddleware{
static checkUserId(req,res, next){

if(userModel.length > req.params.id){
res.status(404).json({
errorMessage:'user with id ${req.params.id} does not exist',
status: "user_NOT_FOUND"
});
}}
}