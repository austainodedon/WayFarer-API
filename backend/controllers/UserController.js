import userModel  from '.../model/users'

export default class userController{

static home(req, res){
return res.send("Hello, word blank")
}

static getAllUser(req, res){

return res.json({
data:"userModel", //object you are returning
message:"All users was returned",// user relatable message 
status:"ok" //code for the developer
})

}

static getAUser(req,res){
return res.json({
data:userModel[req.params.id],
massage:"user with id ${req.params.id} gotten", 
status: "ok"
})

}

static createUser(req,res){
userModel.push(req.body);
return res.json({
data:req.body,
message: "user was added successfully",
status: "ok"
})
}
}