import {Link} from "react-router-dom";
import { getDay } from "../common/date";
import "../index.css";

const MinimalBlogPost = ({ blog, index }) => {

    let { title,blog_id: id , publishedAt} = blog;
    return (
        <Link to={`/blog/${id}`} className="flex gap-5 mb-8">
            <h1 className="blog-index">{ index <10 ? "0"+ (index + 1 ): index}</h1>

            <div>
                <div className="flex gap-2 items-center">
                    {/*<img src={profile_img} className="w-6 h-6 rounded-full" />*/}
                    <i className="fi fi-rr-user text-2xl block mt-1 w-6 h-6 rounded-full" style={{color:"white"}}></i>
                    {/*<p className="line-clamp-1">{name} @{username}</p>*/}
                <p className="min-w-fit" style={{color:"white"}}>{getDay(publishedAt) }</p>
                </div>
                <h1 className="blog-title">{title}</h1>

            </div>
        </Link>
    )
}

export default MinimalBlogPost;