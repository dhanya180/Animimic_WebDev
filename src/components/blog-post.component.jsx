import { getDay } from "../common/date";
import { Link } from "react-router-dom";
import "../index.css";

const BlogPostCard = ({ content, author }) => {
    let { publishedAt, tags, title, des, banner, activity: { total_likes }, blog_id: id } = content;
    // Use optional chaining and defaults to handle null or undefined values
    let name = author?.name || "Unknown Author";
    
    let username = author?.username || "Anonymous";

    return (
        <Link to={`/blog/${id}`} className="flex gap-8 items-center border-b border-grey pb-5 mb-4">
            <div className="w-full"> 
                <div className="flex gap-2 items-center">
                    {/* Use a default icon if profile image is missing */}
                    <i className="fi fi-rr-user text-2xl block mt-1 w-6 h-6 rounded-full" style={{color:"white"}}></i>
                    <p className="line-clamp-1" style={{color:"white"}}>{name} @{username}</p>
                    <p className="min-w-fit" style={{color:"white"}}>{getDay(publishedAt)}</p>
                </div>

                <h1 className="blog-title">{title}</h1>

                <p className="my-3 text-xl font-gelasio leading-7 
                max-sm:hidden md:max-[1100px]:hidden line-clamp-2"  
                style={{color:"white"}}
                >{des}</p>

                <div className="flex gap-4 mt-7">
                    <span className="btn-light py-1 px-4">{tags[0]}</span>
                    <span className="ml-3 flex item-center gap-2 text-dark-grey">
                        <i className="fi fi-rr-heart text-xl"></i>
                        {total_likes}
                    </span>
                </div>
            </div>

            <div className="h-28 aspect-square bg-grey">
                <img src={banner} className="w-full h-full aspect-square object-cover" />
            </div>
        </Link>
    );
};

export default BlogPostCard;

