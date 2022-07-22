import axios from "axios";

class PostService {
    createPost = async(data)=>{
        console.log("form_data " + data)
        const promise = new Promise((resolve,reject)=>{
          axios.post('posts',data)
              .then((res)=>{
                  return resolve(res)
            })
              .catch((er) =>{
                  console.log('error: '+er);
                  return resolve(er)
              })
        })
        return await promise
    }
}
export default new PostService();