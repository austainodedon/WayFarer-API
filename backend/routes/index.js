import userController from '../controllers/userController'
export default function(router){

    router.get('/', userController.home);
    router.get ('/', userController.getAllUser);
    router.post('/', userController.postUser);
    router.get('/user/:id', userMiddleware.checkUserId, userController.getAUser);
	

return router;
}