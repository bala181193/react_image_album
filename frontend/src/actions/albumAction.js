
import axios from 'axios';

export const add_image= async (data)=>{
console.log(data,"sssss")
    try {
        let bodyFormData = new FormData();
        bodyFormData.append('name', data.name);
        bodyFormData.append('image', data.image);
        
        let respData = await axios({
            'method': 'post',
            'url': `http://localhost:1000/add_image`,
            headers: {
                'Content-Type': 'multipart/form-data',
            },
            data: bodyFormData
        })
        return {
                   loading: false,
                  result:respData.data.message
        }
                   
    }
    catch (err) {
        console.log(err.response.data.errors)
        return {
            loading: false,
            error: err.response.data.errors
        }
    }
}


export const getData=async ()=>{
console.log("yse");
try {
    let respData = await axios({
        'method': 'get',
        'url': `http://localhost:1000/getData`,
        
    });
    console.log("resData",respData.data);
    return {
         loading: false,
         albumdata: respData.data
    }
}
catch (err) {
    return {
        loading: false,
        error: err.response.data.errors
    }
}
}

export const add_gallery= async (data,id)=>{
        try {
            let bodyFormData = new FormData();
         
            for (var i = 0; i < data.length; i++) {
                bodyFormData.append("image", data[i]);
              }
           
            let respData = await axios({
                'method': 'post',
                'url': `http://localhost:1000/add_gallery/`+id,
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
                data: bodyFormData
            })
          //  console.log(respData.data.message)
            return {
                       loading: false,
                      result:respData.data.message
            }
                       
        }
        catch (err) {
            // return {
            //     loading: false,
            //     error: err.response.data.errors
            // }
        }
    }

    export const get_album=async (id)=>{
        console.log(id);
        try {
            let respData = await axios({
                'method': 'get',
                'url': `http://localhost:1000/get_album/`+id,
                
            });
            console.log("resData",respData.data);
            return {
                 loading: false,
                 albumdata: respData.data
            }
        }
        catch (err) {
            // return {
            //     loading: false,
            //     error: err.response.data.errors
            // }
        }
    }