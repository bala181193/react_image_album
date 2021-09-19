const multer=require('multer');
const path=require('path');
const AddAlbum=require('../model/upload');

const Gallery=require('../model/album');
const { insertMany } = require('../model/upload');
var Storage = multer.diskStorage({
        destination: function(req, file, callback) {
            callback(null, "public/uploads");
        },
        filename: function(req, file, callback) {
            callback(null, file.fieldname + "_" + Date.now() + "_" + path.extname(file.originalname));
        }
    
    });
       
      var upload = multer({ storage: Storage,
                            
    }).array('image',10);  


exports.before_add_image=(req,res,next)=>{
  
    upload(req, res, (err) => {
       return next();
    })
    
}

exports.add_iamge=async (req,res)=>{
  try{
    const saveData=new AddAlbum({
        name:req.body.name,
        image:req.files[0].filename
    })
    const newdata=await saveData.save();
    res.status(200).json({message:"upload success "})
  }catch(err){

    return res.status(500)
    .json({errors:{message:"error on server"}})
  }
   
    
}

exports.getData=async (req,res)=>{

    try{
        const data=await AddAlbum.find({});
        return res.status(200).json(data);
    }catch(err){

        return res.status(500).json({message:"error on server"})
    }
    

}

exports.add_gallery= async (req,res)=>{
    try{   
        const id=req.params.id;
   var data=[];
   let errors={}
    for(var i=0;i<req.files.length;i++)
    {
        data.push({
                album_image:req.files[i].filename,
                upload_id:id
            })
        // if(!(req.files[i].filename.match(/\.(jpg|jpeg|png|gif)$/)))
        // {
        //     console.log("kk")
        //    
        // }
        // else{
        //     console.log(req.files[i].filename)
        //     errors.image="only alow images"
        //     console.log(errors)
        //                 // return res.status(400).json({"errors":errors})

          
        // }
       
    }
    console.log(data)
    const uploadData=await Gallery.insertMany(data);
   return res.status(200).json({message:"upload suceess"});
    }catch(err){

        return res.status(500).json({message:"error on server"})

        
    }

}

exports.get_album=async (req,res)=>{
    try{
        const id=req.params.id;
      const data=await  Gallery.find({"upload_id":id});
      return res.status(200).json(data);
    }catch(err){

    }
}