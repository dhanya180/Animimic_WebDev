import { createContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import AnimationWrapper from "../common/page-animation";
import Loader from "../components/loader.component";
import { getDay } from "../common/date";
import BlogInteraction from "../components/blog-interaction.component";
import BlogPostCard from "../components/blog-post.component";
import BlogContent from "../components/blog-content.component";
import "../index.css";
import { collapseToast } from "react-toastify";
export const blogStructure = {
    title: '',
    des: '',
    content: '',
    author: {},
    banner: '',
    publishedAt: ''
}

export const BlogContext = createContext({});


const BlogPage = () => {

    let { blog_id } = useParams();

    const [blog, setBlog] = useState({}/*blogStructure*/);
    const [loading, setLoading] = useState(true);
    const [similarBlogs , setSimilarBlogs]=useState(null);
    const [isLikedByUser,setLikedByUser]=useState(false);

    let { title, content, banner, publishedAt } = blog;
    let name = blog.author?.name || "Unknown Author";
    let username = blog.author?.username || "anonymous";

    const fetchBlog = () => {
        let serverURL = "https://animimic-server-6.onrender.com";
        axios.post(serverURL + "/get-blog", { blog_id })
            .then(({ data: { blog } }) => {
                
                 // Check if tags exist before attempting to fetch similar blogs
                 if (blog.tags && blog.tags.length > 0) {
                    axios.post(serverURL + "/search-blogs", { tag: blog.tags[0], limit: 6 , eliminate_blog: blog_id })
                        .then(({ data }) => {
                            setSimilarBlogs(data.blogs);
                            //console.log(data.blogs);
                        })
                        .catch(err => console.log("Error fetching similar blogs:", err));
                }



                setBlog(blog);
                console.log(blog.content);
                setLoading(false);
            })
            .catch(err => {
                console.log(err);
                setLoading(false);
            });
    }

    useEffect(() => {
        resetStates();
        fetchBlog();
    }, [blog_id])

    const resetStates = () => {
        setBlog({}/*blogStructure*/);
        setSimilarBlogs(null);
        setLoading(true);
    }

    return (
        <AnimationWrapper>
            {
                loading ? <Loader /> 
                : 
                <BlogContext.Provider value={{ blog , setBlog , isLikedByUser , setLikedByUser}}>
                <div className="max-w-[900px] center py-10 max-lg:px-[5vw]">
                    <img src={banner} alt="Blog banner" className="aspect-video" />
                    <div className="mt-12">
                        <h2>{title}</h2>

                        <div className="flex flex-col max-sm:flex-col justify-between my-8">
                            <div className="flex gap-5 items-start">
                                <div>
                                    <p style={{color:"white"}} className="capitalize mb-1">{name}</p>
                                    <p style={{color:"white"}} >@{username}</p>
                                </div>
                            </div>
                            <p className="mt-1 text-white opacity-75">Published on {getDay(publishedAt)}</p>
                        </div>
                    </div>

                    <BlogInteraction/>

                    <div className="my-12 font-gelasio blog-page-content">
                            {
                                content && content[0]?.blocks && content[0].blocks.map((block, i) => (
                                    <div key={i} className="my-4 md:my-8">
                                        <BlogContent  block={block} />
                                    </div>
                                ))
                            }
                        </div>

                    <BlogInteraction/>


                    {
                     similarBlogs != null && similarBlogs.length ? 
                     <>
                     <h1 className="text-2xl mt-14 mb-10 font-medium">Similar Blogs</h1>
                     {
                        similarBlogs.map((blog , i) => {
                            let {author} = blog;
                            return <AnimationWrapper key={i} transition={{duration:1 ,delay : i*0.08 }}>
                                <BlogPostCard content={blog} author={username}></BlogPostCard>
                            </AnimationWrapper> 
                        })
                     }
                     </>
                     :
                     " "
                    }

                </div>
                </BlogContext.Provider>
            }
        </AnimationWrapper>
    );
}

export default BlogPage;
