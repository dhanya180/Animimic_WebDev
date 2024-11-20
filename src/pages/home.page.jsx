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
import "../index.css";

const HomePage = () => {

    let [blogs, setBlog] = useState(null);
    let [trendingBlogs, setTrendingBlog] = useState(null);
    let [pageState, setPageState] = useState("home");


    let categories = ["programming", "hollywood", "film making", "social-media", "cooking", "tech", "finances", "travel", "test", "test1"];

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


    const fetchBlogsByCategory = ({page = 1}) => {
        let serverURL = "https://animimic-server-6.onrender.com"
        axios.post(serverURL + "/search-blogs", { tag: pageState, page })
            .then(async({ data }) => {

                //console.log(data.blogs);
                let formatedData = await filterPaginationData({ 
                    state : blogs,
                    data : data.blogs,
                    page ,
                    countRoute : "/search-blogs-count",
                    data_to_send: {tag:pageState}
                });
               // console.log(formatedData);

                setBlog(formatedData);
            })
            .catch(err => {
                console.log(err);
            });
    };


    const fetchTrendingBlogs = () => {
        let serverURL = "https://animimic-server-6.onrender.com"
        axios.get(serverURL + "/trending-blogs")
            .then(({ data }) => {
                setTrendingBlog(data.blogs);
            })
            .catch(err => {
                console.log(err);
            });
    };

    const loadBlogByCategory = (e) => {
        const category = e.target.innerText.toLowerCase();
        setBlog(null);
        if (pageState === category) {
            setPageState("home");
        } else {
            setPageState(category);
        }
    };
    



    useEffect(() => {

        activeTabRef.current.click();

        if (pageState == "home") {
            fetchLatestBlogs({page : 1});
        } else {
            fetchBlogsByCategory({page : 1});
        }

        if (!trendingBlogs) {
            fetchTrendingBlogs();
        }

    }, [pageState]);

    return (
        <AnimationWrapper>
            <section className="h-cover flex justify-center gap-10">
                {/*latest blogs*/}
                <div className="w-full">

                    <InPageNavigation routes={[pageState, "trending blogs"]} defaultHidden={["trending blogs"]}>

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
                        {trendingBlogs == null ? (
                            <Loader />
                        ) : (
                            trendingBlogs.length ?
                                trendingBlogs.map((blog, i) => {
                                    return (<AnimationWrapper transition={{ duration: 1, delay: i * .1 }} key={i}>
                                        <MinimalBlogPost blog={blog} index={i} />
                                    </AnimationWrapper>);
                                })
                                : <NoDataMessage message="No trending blogs found" />
                        )}

                    </InPageNavigation>

                </div>

                {/*Filters and trending blogs*/}
                <div className="min-w-[40%] lg:min-w-[400px] max-w-min borderl border-grey pl-8 pt-3 max-md:hidden">
                    <div className="flex flex-col gap-10">
                        <div>
                            <h1 className="font-medium text-xl mb-8">Stories from all interests</h1>

                            <div className="flex gap-3 flex-wrap">
                                {
                                    categories.map((category, i) => {
                                        return (<button onClick={loadBlogByCategory} className={"tag " + (pageState == category ? "bg-black text-white" : " ")} key={i}>
                                            {category}
                                        </button>
                                        );
                                    })
                                }
                            </div>

                        </div>

                        <div>
                            <h1 className="font-medium text-xl mb-8">Trending Blogs
                                <i className="fi fi-rr-arrow-trend-up"></i>
                            </h1>

                            {trendingBlogs == null ? (
                            <Loader />
                        ) : (
                            trendingBlogs.length ?
                                trendingBlogs.map((blog, i) => {
                                    return (<AnimationWrapper transition={{ duration: 1, delay: i * .1 }} key={i}>
                                        <MinimalBlogPost blog={blog} index={i} />
                                    </AnimationWrapper>);
                                })
                                : <NoDataMessage message="No trending blogs found" />
                        )}


                        </div>
                    </div>
                </div>
            </section>
        </AnimationWrapper>

    )
}

export default HomePage;
