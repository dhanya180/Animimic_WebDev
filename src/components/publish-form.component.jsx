import { Toaster, toast } from "react-hot-toast";
import AnimationWrapper from "../common/page-animation";
import { useContext, useEffect } from "react";
import { EditorContext } from "../pages/editor.pages";
import "../index.css";
// In your component or another JS file
//import { setLocalStorage } from '../login';  // Adjust the path accordingly

import axios from "axios";
import { UserContext } from "../App";
import Tag from "./tags.component";
import { useNavigate } from "react-router-dom";

const PublishForm = () => {
  const authorId = localStorage.getItem('userId'); // Get the userId from localStorage
  let navigate=useNavigate();
  useEffect(()=>{
  if (!authorId) {
    toast.error("User is not logged in.");
    // You can redirect to login or handle the case if user is not logged in
    return navigate("/login");
  }
},[authorId, navigate]);
  // const userId =localStorage.getItem('userId');
  let characterLimit = 200;
  let tagLimit = 10;
  let {
    blog,
    blog: { banner, title, tags, des, content },
    setEditorState,
    setBlog,
  } = useContext(EditorContext);

//   let {userAuth:{access_token} }=useContext(UserContext);


  //   let {}=useContext(UserContext);
  const handleCloseEvent = () => {
    setEditorState("editor");
  };

  const handleBlogTitleChange = (e) => {
    let input = e.target;

    setBlog({ ...blog, title: input.value });
  };

  const handleBlogDesChange = (e) => {
    let input = e.target;

    setBlog({ ...blog, des: input.value });
  };

  const handleTitleKeyDown = (e) => {
    if (e.keyCode == 13) {
      e.preventDefault();
    }
  };

  const handleKeyDown = (e) => {
    if (e.keyCode == 13 || e.keyCode == 188) {
      e.preventDefault();

      let tag = e.target.value;

      if (tags.length < tagLimit) {
        if (!tags.includes(tag) && tag.length) {
          setBlog({ ...blog, tags: [...tags, tag] });
        }
      } else {
        toast.error(`You can add max ${tagLimit} Tags`);
      }

      e.target.value = "";
    }
  };
  const PublishBlog = (e) => {
    if (e.target.className.includes("disable")) {
      return;
    }
    if (!title.length) {
      return toast.error("Write blog title before publishing");
    }
    if (!des.length || des.length > characterLimit) {
      return toast.error(
        "Write a description about your blog within ${characterLimit} characters to publish"
      );
    }
    if (!tags.length) {
      return toast.error("Enter at least one tag to help us rank your blog");
    }
  //   const authorId= localStorage.getItem('userId');
  // if (!userId) {
  //   return toast.error("User is not logged in.");
  // }
    let loadingToast = toast.loading("Publishing....");
    e.target.classList.add("disable");
    // const userId =localStorage.getItem('userId');
    let blogObj = {
      authorId,
      title,
      des,
      banner,
      tags,
      content,  
      draft: false
    };
    let pranathiURL = "https://animimic-server-6.onrender.com";
    axios.post(pranathiURL+"/create-blog",blogObj,
        )
        .then(()=>{
            e.target.classList.remove('disable');
            toast.dismiss(loadingToast);
            toast.success("Published");
            setTimeout(()=>{
              navigate("/navbar")
            },500);

        })
        .catch(({response})=>{
            e.target.classList.remove('disable');
            toast.dismiss(loadingToast);
            return toast.error(response.data.error)
        })
  };

  return (
    <AnimationWrapper>
      <section className="w-screen min-h-screen grid items-center lg:grid-cols-2 py-16 lg:gap-4">
        <Toaster />

        <button
          className="w-12 h-12 absolute right-[5vw] z-10 top=[5%] lg:top-[10%]"
          onClick={handleCloseEvent}
        >
          <i className="fi fi-br-cross"></i>
        </button>

        <div className="max-w-[550px] centre">
          <p className="text-dark-grey mb-1">Preview</p>

          <div className="w-full aspect-video rounded-lg overflow-hidden bg-grey mt-4">
            <img src={banner} />
          </div>

          <h1 className="text-4xl font-medium mt-2 leading-tight line-clamp-2">
            {title}
          </h1>

          <p className="font-gelasio line-clamp-2 text-x; leading-7 mt-4">
            {des}
          </p>
        </div>

        <div className="border-grey lg:border-1 lg:pl-8">
          <p className="text-dark-grey mb-2 mt-9">Blog Title</p>
          <input
            type="type"
            placeholder="Blog Title"
            defaultValue={title}
            className="inout-box pl-4"
            onChange={handleBlogTitleChange}
          />

          <p className="text-dark-grey mb-2 mt-9">
            Short Description about your Blog
          </p>

          <textarea
            maxLength={characterLimit}
            defaultValue={des}
            className="h-40 resize-none leading-7 input-box pl-4"
            style={{
              backgroundColor: "#f5f5f5", // Ensure background stays light
              color: "black", // Ensure text stays visible
            }}
            onChange={handleBlogDesChange}
            onKeyDown={handleTitleKeyDown}
          ></textarea>

          <p className="mt-1 text-dark-grey text-sm text-right">
            {characterLimit - des.length} characters left
          </p>

          <p className="text-dark-grey mb-2 mt-9">
            Topics -(Helps in searching and ranking your blog post)
          </p>

          <div className="relative input-box pl-2 py-2 pb-4">
            <input
              type="text"
              placeholder="Topic"
              
              className="sticky input-box bg-white top-0 left-0 pl-4 mb-3 focus:bg-white"
              onKeyDown={handleKeyDown}
            />
            {tags.map((tag, i) => {
              return <Tag tag={tag} tagIndex={i} key={i} />;
            })}
          </div>

          <p className="mt-1 mb-4 text-dark-grey text-right">
            {tagLimit - tags.length} Tags left
          </p>

          <button className="btn-dark px-8" onClick={PublishBlog}>
            Publish
          </button>
        </div>
      </section>
    </AnimationWrapper>
  );
};

export default PublishForm;
