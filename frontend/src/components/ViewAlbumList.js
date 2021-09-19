import React from 'react';
import { Link } from 'react-router-dom';
import {toast} from 'react-toastify'
import {getData} from '../actions/albumAction';
class AlbumList extends React.Component{
    constructor(){
        super();
      this.state={
        data:[]
      }
    }
   componentDidMount(){
   this.get_list();
  }
  
 get_list= async ()=>{
     
    const data=await getData();
    this.setState({
        data:data.albumdata
    })
 }
    render(){
        const {data}=this.state
        console.log(data,"data")
        return(
          <div>
             
     < div class="container">
 <div class="row">
   <h2><a href="/">Home</a></h2>
   <h1 style={{display: "center"}}>Album</h1>
   {data && data.map((data,i)=>{
                 return(
                    <div class="col-md-4">
                    <div class="thumbnail"><Link to={'/view_album/'+data._id}>
                     <p>{data.name}</p>
                        <img src={"http://localhost:1000/uploads/"+data.image} alt="" style={{width:"200px"}} /> 
                        <div class="caption">      
                          <p> <Link to={'/add_gallery_photo/'+data._id} className="btn btn-primary">Add Photos</Link></p>
                        </div>
                        </Link>
                    </div>
                    .
                  </div>
                 )

                })
                }
   ..
  
 </div>
</div>
     
          </div>
        )
    }
}
export default AlbumList;