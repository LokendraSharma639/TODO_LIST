const express=require('express');
const router=express.Router();
const IndexController=require('../controllers/indexController');

router.get('/',IndexController.homeController);


router.post('/create-list',IndexController.createList);
router.post('/delete-task',IndexController.DeleteList);

module.exports=router;