import { useContext, useEffect, useState } from "react";
import { UserContext } from "../App";
import axios from "axios";
import { Toaster } from "react-hot-toast";
import AnimationWrapper from "../common/page-animation";
import {filterPaginationData} from "../common/filter-pagination-data";
import InPageNavigation from "../components/inpage-navigation.component";
import Loader from "../components/nodata.component";
import NoDataMessage from "../components/nodata.component";
import { ManageDraftBlogPost,ManagePublishedBlogCard } from "../components/manage-blogcard.component";
import { useSearchParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "../index.css";
const ManageBlogs =()=>{
   const navigate = useNavigate();
   const authorId = localStorage.getItem('user_id'); 
   // const access_token = localStorage.getItem('access_token');
  if (!authorId) {
    //toast.error("User is not logged in.");
    console.log("User is not Logged in");
    return navigate("/login");
  }
  const access_token = localStorage.getItem('access_token'); 
  if (!access_token) {
  // toast.error("User is not logged in.");
  console.log("User is not Logged in");
   return navigate("/login");
 }
    const [blogs,setBlogs]=useState(null);
    const [drafts,setDrafts]=useState(null);
    const [query,setQuery]=useState("");
   let activeTab=useSearchParams()[0].get("tab");


    //let {userAuth:{access_token}}=useContext(UserContext);
    const getBlogs=({page,draft,deletedDocCount=0})=>{
      let ServerURL="https://animimic-server-3.onrender.com";

     axios.post(ServerURL+"/user-written-blogs",{
        page,draft,query,deletedDocCount,authorId
     }
     //,{
      //   headers:{
      //       'Authorization':`Bearer ${access_token}`
         //   
      //   }
      )
     .then( async({data})=>{
         let formatedData=await filterPageinationData({
            state:draft?drafts:blogs,
            data:data.blogs,
            page,
            user:access_token,
            countRoute:"/user-written-blogs-count",
            data_to_send:{draft,query}
         })
         console.log(formatedData)
         if(draft){
            
            setDrafts(formatedData)
         }
         else{
            
            setBlogs(formatedData);
         }
     })
     .catch(err=>{
        console.log(err);
     })
    }

    useEffect(()=>{
       if(access_token){
        if(blogs == null){
            getBlogs({page:1,draft:false})
        }
        if(drafts == null){
            getBlogs({page:1,draft:true})
        }
       }
    },[access_token,blogs,drafts,query])
    const handleSearch=()=>{
      let searchQuery=e.target.value;

      setQuery(searchQuery);

      if(e.keyCode==13 && searchQuery.length){
         setBlogs(null);
         setDrafts(null);
      } 
    }

    const handleChange=(e)=>{
      if(!e.target.value.length){
         setQuery("");
         setBlogs(null);
         setDrafts(null);

      }
    }

    return(
      <>
      <h1 className="max-md-hidden">Manage Blogs</h1>
      <Toaster/>
      <div className="relative max-md:mt-5 md:mt-8 mb-10">
          <input type="search"
          className="w-full bg-grey p-4 pl-12 pr-6 rounded-full placeholder:text-dark-grey"
          placeholder="search Blogs" 
          onChange={handleChange}
          onKeyDown={handleSearch}
          />
          <i className="fi fi-rr-search absolute right-[10%] md:pointer-events-none md:left-5 top-1/2 -translate-y-1/2 text-xl text-dark-grey "></i>
      </div>

      <InPageNavigation routes={["Published Blogs","Drafts"]} defaultActiveIndex={activeTab!=='draft'?0:1}>
         {
            blogs==null?<Loader/>:
            blogs.results.length?
            <>
            {
              blogs.results.map((blog,i)=>{
               return <AnimationWrapper key={i} transition=
               {{delay:i*0.04}}>
                  <ManagePublishedBlogCard blog={{...blog,index:i,setStateFunc:setBlogs}}/>

                 
          
               </AnimationWrapper>
              }) 
            }
            <LoadMoreDataBtn state={blogs} fetchDataFun={getBlogs} additionalParam={{draft:false,deletedDocCount:blogs.deletedDocCount}}/>
            </>
            :<NoDataMessage message="No published blogs"/>
         }
         

         {
            drafts==null?<Loader/>:
            drafts.results.length?
            <>
            {
              drafts.results.map((blog,i)=>{
               return <AnimationWrapper key={i} transition=
               {{delay:i*0.04}}>
                  <ManageDraftBlogPost blog={{...blog,index:i,setStateFunc:setDrafts}}/>

                 
          
               </AnimationWrapper>
              }) 
            }
            <LoadMoreDataBtn state={drafts} fetchDataFun={getBlogs} additionalParam={{draft:true,deletedDocCount:drafts.deletedDocCount}}/>
            </>
            :<NoDataMessage message="No draft blogs"/>
         }
      </InPageNavigation>

      </>
    )
}
export default ManageBlogs;