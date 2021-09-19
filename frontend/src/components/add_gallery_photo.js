import React from 'react';
import axios from 'axios';
import {add_gallery} from '../actions/albumAction'
import {toast} from 'react-toastify';
class AddPhoto extends React.Component{
    constructor(){
        super();
       
        this.handlesubmit=this.handlesubmit.bind(this);
        this.onChangeimage=this.onChangeimage.bind(this);
        this.state={  
          images:[],
         
        }
    }
   
    onChangeimage=(e)=>{
      this.setState({ images: [...this.state.images, ...e.target.files] })

    }
    handlesubmit=(e)=>{
      e.preventDefault();  
      console.log();
      const id=this.props.match.params.id
      const {images}=this.state;
      const {error,result}=add_gallery(images,id)
    
    this.setState({
     
      files:'',
     
    })
   
    }
    render(){
        return(
            <div>
            <div className="container mt-3">
            <div className="jumbotron">
            <form   encType="multipart/form-data"  onSubmit={this.handlesubmit}>
 <div>
   <label>Image</label>
   
   <input type="file" className="form-control" placeholder="" id="image" name="image" 
   multiple
  onChange={this.onChangeimage}
  value={this.state.files}
  />
 </div>
 <button type="submit"  className="btn btn-primary">Add Photo</button>
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