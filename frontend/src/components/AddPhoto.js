import React from 'react';
import axios from 'axios';
import {add_image} from '../actions/albumAction'
import {toast} from 'react-toastify';
import isEmpty from '../config/IsEmpty';
class AddPhoto extends React.Component{
    constructor(){
        super();
        this.handlechange=this.handlechange.bind(this);
        this.handlesubmit=this.handlesubmit.bind(this);
        this.onChangeimage=this.onChangeimage.bind(this);
        this.state={
          name:'',
          change_image:'',
          image:'',
          files:'',
          validation:{}
        }
    }
    handlechange=(e)=>{
      const{name,value}=e.target;
      this.setState({
        [name]:value
      })
    }
    onChangeimage=(e)=>{
      this.setState({change_image:URL.createObjectURL(e.target.files[0])});
      this.setState({image:e.target.files[0]});

    }
    handlesubmit=async (e)=>{
      e.preventDefault();  
      const {name,image}=this.state;
      const data={
          name,image
      }
     const {error,result}= await add_image(data)
    if(isEmpty(error))
    {
            this.setState({
            name:'',
            files:'',
            change_image:'',
            validation:{}
          })
    }
   else{
    this.setState({validation:error})


   }
   
    }
    render(){
        const {validation}=this.state;
         console.log("validaton",validation)
        return(
            <div>
            <div className="container mt-3">
            <div className="jumbotron">
            <form   encType="multipart/form-data"  onSubmit={this.handlesubmit}>
 <div className="form-group"  >
   <label>Album Name</label>
   <input type="text" className="form-control" placeholder="Product Name" id="Name" name="name" 
  onChange={this.handlechange}
  value={this.state.name}
   />
   {
       validation && 
       <span style={{color:"red"}}>{validation.name}</span>
   }
 </div>
 
 
 <div>
   <label>Image</label>
   {this.state.change_image!='' ?
   <img src={this.state.change_image} style={{width:"100px",height:"100px"}}/>
  :
  null  
  }
    
   <input type="file" className="form-control" placeholder="" id="image" name="image" 
  onChange={this.onChangeimage}
  value={this.state.files}
  />
  {
       validation  &&
       <span style={{color:"red"}}>{validation.image}</span>
   }
 </div>
 <button type="submit"  className="btn btn-primary">Add</button>
</form>

            </div>
        </div>
        <a href="#" onClick={()=>{
      window.location.href="/view_album_list"
  }}>
      View Album List
  </a>
        </div>
        
        )
    }
}
export default AddPhoto;