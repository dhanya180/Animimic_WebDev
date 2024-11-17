import pageNotFoundImage from "../imgs/404.png";
import { Link } from "react-router-dom";
import "../index.css";

const PageNotFound = () => {
    return (
        <section className="h-cover relative p-10 flex flex-col items-center gap-20 text-center">

            <img src={pageNotFoundImage} className="select-none border-2 border-grey w-72 aspect-square object-cover-rounded" />

            <h1 className="text-4xl font-gelasio leading-7">Page Not Found</h1>
            <p className="text-dark-grey text-leading-7 -mt-8">The page that you are looking for does not exist. Head back to the <Link to="/" className="text-black underline">Home Page</Link></p>

            <div>

            </div>

        </section>
        
    )
}

export default PageNotFound;