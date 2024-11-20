import logo from "../imgs/logo.png";
import icon2 from '../imgs/icon2.jpg'; 
import { Link, Outlet, useNavigate } from "react-router-dom";
import AnimationWrapper from "../common/page-animation";
import InPageNavigation from "../components/inpage-navigation.component";
import { useEffect, useState } from "react";
import axios from "axios";
import Loader from "../components/loader.component"
import MinimalBlogPost from "../components/nobanner-blog-post.component";
//import { activeTabLineRef } from "../components/inpage-navigation.component";
import { activeTabRef } from "../components/inpage-navigation.component";
import NoDataMessage from "../components/nodata.component";
import { filterPaginationData } from "../common/filter-pagination-data";
import LoadMoreDataBtn from "../components/load-more.component";
import BlogPostCard from "../components/blog-post.component";
import { blogStructure } from "./blog.page";
import "../index.css";

//import UserNavigationPanel from "./user-navigation.component";
const Discussion = () => {
  const [searchBoxVisibility, setSearchBoxVisibility] = useState(false);
  let [blogs, setBlog] = useState(null);
  let [pageState, setPageState] = useState("home");
  //let [trendingBlogs, setTrendingBlog] = useState(null);
  const [commentsWrapper , setCommentsWrapper] = useState(true);
  const [totalComments,setTotalComments] = useState(0);
 

  let navigate = useNavigate();

  const handleSearch = (e) => {
    let query = e.target.value;

    if(e.keyCode == 13 && query.length ){
      navigate(`/search/${query}`);
    }
  }
  const resetStates = () => {
    setBlog(blogStructure);
    setCommentsWrapper(false);
    setTotalComments(0);
  }


  const fetchLatestBlogs = ({page = 1}) => {
    let serverURL = "https://animimic-server-6.onrender.com"
    axios.post(serverURL + "/latest-blogs" , {page})
        .then(async ({ data }) => {
           // console.log(data.blogs);
            let formatedData = await filterPaginationData({ 
                state : blogs,
                data : data.blogs,
                page ,
                countRoute : "/all-latest-blogs-count"
            });
            //console.log(formatedData);

            setBlog(formatedData);
        })
        .catch(err => {
            console.log(err);
        });
};


  return (
    <>
      <nav className="navbar">
       
        {/*<Link to="/" className="flex-none w-10">
          <img src={icon2} className="w-full"/>
        </Link>*/}

        <div
          className={
            "absolute bg-white w-full left-0 top-full mt-0.5 border-b border-grey py-4 px-[5vw] md:border-0 md:block md:relative md:inset-0 md:p-0 md:w-auto md:show " +
            (searchBoxVisibility ? "show" : "hide")
          }
        >
          <input
            type="text"
            placeholder="Search"
            className="w-full md:w-auto bg-grey p-4 pl-6 pr-[12%] md:pr-6 rounded-full placeholder:text-dark-grey md:pl-12"
            onKeyDown={handleSearch}

          />
          <i className="fi fi-rs-search absolute right-[10%] md:pointer-events-none md:left-5 top-1/2 -translate-y-1/2 text-xl text-dark-grey md:pl-0"></i>
        </div>

        <div className="flex items-center gap-3 md:gap-6 ml-auto">
          <button
            className=" md:hidden bg-grey w-12 h-12 rounded-full flex items-center justify-center "
            onClick={() => setSearchBoxVisibility((currentVal) => !currentVal)}
          >
            <i className="fi fi-rs-search text-xl"></i>
          </button>

          <Link to="/editor" className="hidden md:flex gap-2 link">
          <i class="fi fi-rr-blog-text text-xl"></i>
            <p className="text-xl"> Create Post</p>
          </Link>

          <Link to="/editor" className="hidden md:flex gap-2 link">
          <i class="fi fi-rr-blog-text text-xl"></i>
            <p className="text-xl"> Create Post</p>
          </Link>


          <div className="relative">
              <button className="w-12 h-12 rounded-full bg-grey relative hover:bg-black/10">
              <i className="fi fi-rr-user text-2xl block mt-1"></i>
                </button>  
          </div>


          </div>
         
          
      </nav>


      <AnimationWrapper>
            <section className="h-cover flex justify-center gap-10">
                {/*latest blogs*/}
                <div className="w-full">

                    <InPageNavigation routes={["Discussions"]}>

                        <>
                            {
                                blogs == null ? (
                                    <Loader />
                                ) : (
                                    blogs.results.length ?
                                        blogs.results.map((blog, i) => {
                                            return (
                                                <AnimationWrapper transition={{ duration: 1, delay: i * 0.1 }} key={i}>
                                                    <BlogPostCard content={blog} author={blog} />
                                                </AnimationWrapper>);
                                        })
                                        : <NoDataMessage message="No blogs published" />
                                )}

                                <LoadMoreDataBtn state = {blogs} fetchDataFun={( pageState == "home" ? fetchLatestBlogs : fetchBlogsByCategory)} />


                        </>

                    </InPageNavigation>

                </div>


            
            </section>
        </AnimationWrapper>


      <Outlet />
    </>
  );
};

export default Discussion;
