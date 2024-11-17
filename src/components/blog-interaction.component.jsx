import { useContext } from "react";
import { BlogContext } from "../pages/blog.page";
import { Link } from "react-router-dom";
import "../index.css";
//import { Toaster,toast } from "react-hot-toast";


const BlogInteraction = () => {

    let { blog,blog: { _id , title , blog_id, activity, activity: { total_likes }, author: { username } }, setBlog , isLikedByUser , setLikedByUser} = useContext(BlogContext);
    //let { userAuth : {username, access_token}} = useContext(UserContext);

   /* useEffect(() =>{
        if(access_token){
            let serverURL = "http://localhost:3000";
            axios.post(serverURL + "/isliked-by-user" , {_id },{
                headers :{'Authorization' : `Bearer ${access_token}`
            }
            }) 
            .then(({data: {result } })=>{
                    setLikedByUser(Boolean(result))
            })
            .catch(err =>{
                console.log(err);
            })
        }
    })*/


    const handleLike = () =>{

        setLikedByUser(preVal => !preVal);
        !isLikedByUser ? total_likes++ : total_likes--;

        setBlog({...blog,activity:{...activity,total_likes}})
        
        /*let serverURL = "http://localhost:3000";
        axios.post(serverURL + "/like-blog", { _id,isLikedByUser} , {
            headers: {'Authorization' : `Bearer ${access_token}`
        }
        })
        .then(({data}) => {

        })
        .catch(err =>{
            console.log(err);
        })*/

    }

    return (
        <>
            <hr className="border-grey my-2 "></hr>

            <div className="flex gap-6 justify-between">

                <div className="flex gap-3 items-center">
                    <button
                        className={"w-10 h-10 rounded-full flex items-center justify-center " + ( isLikedByUser ? "bg-red/20 text-red" : "bg-grey/80")}
                        onClick={handleLike}
                    >
                        <i className={"fi " + ( isLikedByUser ? "fi-sr-heart" : "fi-rr-heart") }></i>
                    </button>
                    <p className=" text-xl text-dark-grey">{total_likes}</p>
                </div>

                <div className="flex gap-6 items-center ">



                <Link to={`https://twitter.com/intent/tweet?text=Read ${title}&url=${window.location.href}`}>
                        <i className="fi fi-brands-twitter text-xl hover:text-twitter"></i>
                    </Link>


                </div>

            </div>


            <hr className="border-grey my-2 "></hr>

        </>
    )
}
export default BlogInteraction;