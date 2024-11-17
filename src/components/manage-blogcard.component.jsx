import { useState,useEffect} from "react";
import "../index.css";
import {getDay} from "../common/date";
import {Link} from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";


const BlogStats=({stats})=>{
    return(
        <div className="flex gap-2 max-lg:mb-6 max-lg:pb-6 border-grey max-lg:border-b">
            {
             Object.keys(stats).map((key,i)=>{
               return !key.includes("parent")? <div key={i}
                className={"flex flex-col item-center w-full h-full judtify-center p-4 px-6 "+(i!==0?"border-grey border-1":"")}>

                <h1 className="text-xl lg:text-2xl mb-2">{stats[key].toLocaleString()}</h1>
                <p className="max-lg:text-dark-grey capitalize">{key.split("_")[1]}</p>
               </div>:""
             })
            }

        </div>
    )
}
export const ManagePublishedBlogCard=({blog})=>{
    const navigate = useNavigate();
    const access_token = localStorage.getItem('access_token'); 
  if (!access_token) {
   //toast.error("User is not logged in.");
   console.log("User is not Logged in");
   return navigate("/login");
 }
    let {banner,blog_id,title,publishedAt,activity}=blog;
    //let {userAuth:{access_token}}=useContext(UserContext);
    let [showStat,setShowStat]=useState(false);
    return(
       <>
       <div className="flex gap-10 border-b mb-6 max-md:px-4 border-grey pb-6 items-center">
           
           <img src={banner} className="max-md:hidden lg:hidden xl:block w-28 h-28 flex-none bg-grey object-cover" />

           <div className="flex flex-col justify-between py-2 w-full min-w-[300px]">

            <div>
                <Link to={`/blog/${blog_id}`} className="blog-title mb-4 hover:underline">{title}</Link>
                <p className="line-clamp-1">Published on {getDay(publishedAt) }</p>
            </div>

            <div className="flex gap-6 mt-3">
                <Link to={`/editor/${blog_id}`} className="pr-4 py-2 underline">Edit</Link>

                 <button className="lg:hidden pr-4 py-2 underline"
                 onClick={()=>setShowStat(preVal=>!preVal)}
                 >Stats</button>

                <button className="pr-4 py-2 underline text-red" onClick={(e)=>deleteBlog(blog,access_token,e.target)}>Delete</button>

            </div>
           </div>

           <div className="max-lg:hidden">
              <BlogStats stats={activity}/>
           </div>
       </div>
     
     {
        showStat? <div className="lg:hidden"><BlogStats stats={activity}/></div>
        :""
     }
      

       </>
    )
}
export const ManageDraftBlogPost=({blog})=>{
    let {title,des,blog_id,index}=blog;
    let {userAuth:{access_token}}=useContext(UserContext);
    index++;
    
   return(
       <div className="flex gap-5 lg:gap-10 pb-6 border-b mb-6 border-grey">
          <h1 className="blog-index text-center pl-4 md:pl-6 flex-none">{index<10?"0"+index:index}</h1>

          <div>
            <h1 className="blog-title mb-3">{title}</h1>
            <p className="line-clamp-2 font-gelasio">{des.length? des:"No Description"}</p>
            <div className="flex gap-6 mt-3">
                <Link to={`/editor/${blog_id}`} className="pr-4 py-2 underline">Edit</Link>
                <button className="pr-4 py-2 underline text-red"onClick={(e)=>deleteBlog(blog,access_token,e.target)}>Delete</button>

            </div>
          </div>

       </div>
   )
}

const deleteBlog=(blog,access_token,target)=>{
   let {index,blog_id,setStateFunc}=blog;
   target.setAtrribute("disabled",true);
   axios.post(import.meta.env.VITE_SERVER_DOMAIN+"/delete-blog",{blog_id},{
    headers:{
        'Authorization':`Bearer ${access_token}`
    }
   })
   .then(({data})=>{
    target.removeAtrribute("disabled");
    setStateFunc(preVal=>{
        let {deletedDocCount,totalDoc,results}=preVal;

        results.splice(index,1);
        if(!deletedDocCount){
            deletedDocCount=0;
        }
        if(!results.length && totalDoc-1>0){
            return null;
        }
        return {...preVal,totalDoc:totalDoc-1,deletedDocCount:deletedDocCount+1}

    })
 
   })
   .catch(err=>{
    console.log(err);
   })
}

export default ManagePublishedBlogCard