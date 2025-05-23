import logo from "../imgs/icon22.jpg";
import "../index.css";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { useState } from "react";
//import UserNavigationPanel from "./user-navigation.component";
const Navbar = () => {
  const [searchBoxVisibility, setSearchBoxVisibility] = useState(false);

  let navigate = useNavigate();

  const handleSearch = (e) => {
    let query = e.target.value;

    if(e.keyCode == 13 && query.length ){
      navigate(`/search/${query}`);
    }
  }



  
  return (
    <>
       <style>
        {`
          .important-padding {
            padding: 0px !important;
          }
        `}
      </style>
      <nav className="indexnavbar">
       
        <Link to="/" className="flex-none w-10" >
          <img src={logo} style={{borderRadius:"30px",border:"none"}} className="w-full"/>
        </Link>

        <div
          className={
            "absolute bg-white w-full left-0 top-full mt-0.5 border-b border-grey py-4 px-[5vw] md:border-0 md:block md:relative md:inset-0 md:p-0 md:w-auto md:show " +
            (searchBoxVisibility ? "show" : "hide")+" important-padding"
          }
          
        >
          <input
            type="text"
            placeholder="Search"
            style={{ marginLeft: '18px' }}
            className="w-full md:w-auto bg-grey p-4 pl-6 pr-[12%] md:pr-6 rounded-full placeholder:text-dark-grey md:pl-12"
            onKeyDown={handleSearch}

          />
          <i className="fi fi-rs-search absolute right-[12%] md:pointer-events-none md:left-5 top-1/2 -translate-y-1/2 text-xl text-dark-grey md:pl-0" ></i>
        </div>

        <div className="flex items-center gap-3 md:gap-6 ml-auto">
          <button
            className=" md:hidden bg-grey w-12 h-12 rounded-full flex items-center justify-center "
            onClick={() => setSearchBoxVisibility((currentVal) => !currentVal)}
          >
            <i className="fi fi-rs-search text-xl"></i>
          </button>

          <Link to="/dashboard/blog" className="hidden md:flex gap-2 link">
          <i class="fi fi-rr-blog-text text-xl"></i>
            <p>My Blogs</p>
          </Link>

          <Link to="/editor" className="hidden md:flex gap-2 link">
            <i className="fi fi-rr-file-edit"></i>
            <p>Write</p>
          </Link>

          {/*<Link to="/dashboard/notification">
            <button className="w-12 h-12 rounded-full bg-grey relative hover:bg-black/10">
            <i className="fi fi-rr-bell text-2xl block mt-1"></i>
            </button>
          </Link>*/}

          
            <div className="relative">
              <Link to="/profile">
                <button className="w-12 h-12 rounded-full bg-grey relative hover:bg-black/10">
                  <i className="fi fi-rr-user text-2xl block mt-1 " style={{color:"black"}}></i>
                </button>
              </Link>
            </div>

          {/*<Link className="btn-dark py-2" to="/homepage1">
                Sign Out
            </Link>*/}
          </div>
         
          
      </nav>
      <Outlet />
    </>
  );
};

export default Navbar;
