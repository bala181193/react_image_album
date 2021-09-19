const isEmpty=require('../isEmpty/isEmpty');

exports.add_image=(req,res,next)=>{
    let errors={};
  if(  isEmpty(req.body.name) )
  {
      errors.name="require name"
  }
  if(isEmpty(req.files))
  {
    errors.image="require image"

  }
  if (!isEmpty(req.files) && isEmpty(req.files[0].filename.match(/\.(jpg|jpeg|png|gif)$/))) {
    errors.image = "Only Allow jpg|jpeg|png|gif"
}
 
  if(!(isEmpty(errors)))
  {
      return res.status(400).json({"errors":errors})
  }
  return next();
}