const express=require('express');
const router=express.Router();
 const validation=require('./validation/validation')
const controller=require('./controller/controller')
router.route('/add_image').post(controller.before_add_image,validation.add_image,controller.add_iamge);
router.route('/getData').get(controller.getData);
router.route('/add_gallery/:id').post(controller.before_add_image,controller.add_gallery);
router.route('/get_album/:id').get(controller.get_album)
module.exports=router;