import { Link, useNavigate } from "react-router-dom";
import logo from "../imgs/icon22.jpg";
import AnimationWrapper from "../common/page-animation";
import defaultBanner from "../imgs/blog banner.png";
import { useContext, useEffect, useRef, useState } from "react";
import { Toaster, toast } from "react-hot-toast";
import { EditorContext } from "../pages/editor.pages";
import EditorJS from "@editorjs/editorjs";
import { tools } from "./tools.component";
import { uploadImage } from "../common/aws";
import axios from "axios";
import { UserContext } from "../App";
import "../index.css";
import { wrap } from "framer-motion";
const BlogEditor = () => {
  let {
    blog,
    blog: { title, banner, content, tags, des },
    setBlog,
    textEditor,
    setTextEditor,
    setEditorState,
  } = useContext(EditorContext);
  // let blogBannerRef=useRef();
 
  let navigate=useNavigate();
  useEffect(() => {
        if(!textEditor.isReady){
            setTextEditor(new EditorJS({
                holderId: "textEditor",
                data: content,
                tools: tools,
                placeholder: "Let's write an awesome story",
              }));
        }
       
         
    
  }, []);

  const handleSaveDraft=(e)=>{
    if (e.target.className.includes("disable")) {
        return;
      }
      if (!title.length) {
        return toast.error("Write blog title before saving it as a draft");
      }
      
      let loadingToast = toast.loading("saving draft....");
      e.target.classList.add("disable");
  
      if(textEditor.isReady){
       
        textEditor.save().then(content=>{
            let blogObj = {
                title,
                des,
                banner,
                tags,
                content,  
                draft:true
              };
            let pranathiURL = "https://animimic-server-3.onrender.com";
            axios.post(pranathiURL+"/create-blog",blogObj,
                )
                .then(()=>{
                    e.target.classList.remove('disable');
                    toast.dismiss(loadingToast);
                    toast.success("saved");
                    setTimeout(()=>{
                      navigate("/dashboard/blogs?tab=draft")
                    },500);
        
                })
                .catch(({response})=>{
                    e.target.classList.remove('disable');
                    toast.dismiss(loadingToast);
                    return toast.error(response.data.error)
                })
        })
      }

      
      
  }
  const handleBannerUpload = (e) => {
    console.log(e);

    let img = e.target.files[0];
    console.log(img);
    if (img) {
      let loadingToast = toast.loading("Uploading...");
      uploadImage(img)
        .then((url) => {
          if (url) {
            toast.dismiss(loadingToast);
            toast.success("uploaded");
            setBlog({ ...blog, banner: url });
          }
        })

        .catch((err) => {
          toast.dismiss(loadingToast);
          return toast.error(err);
        });
    }
  };
  const handleTitleKeyDown = (e) => {
    // console.log(e);
    if (e.keyCode == 13) {
      e.preventDefault();
    }
  };

  const handleTitleChange = (e) => {
    // console.log(e);
    let input = e.target;
    // console.log(input.scrollHeight)
    input.style.height = "auto";
    input.style.height = input.scrollHeight + "px";
    setBlog({ ...blog, title: input.value });
  };
  const handleError = (e) => {
    let img = e.target;
    img.src = defaultBanner;
  };


  const handlePublishEvent = () => {
    if (!banner.length) {
      return toast.error("Upload a blog banner to publish it");
    }
    if (!title.length) {
      return toast.error("write Blog title to publish it");
    }

     
    if (textEditor.isReady) {
      textEditor.save().then(data => {
        if (data.blocks.length) {
          setBlog({ ...blog, content: data });
          setEditorState("publish");
        } else {
          return toast.error("Write something in your blog to publish it");
        }
      });
    }
  };
  return (
    <>
    <style>
        
        </style>
    <Toaster/>
      <nav className="indexnavbar">
        <Link to="/" className="flex-none w-10">
          <img src={logo} style={{borderRadius:"30px",border:"none"}} alt="" />
        </Link>
        <p className="max-md:hidden text-black line-clamp-1 w-full">
          {" "}
          {title.length ? title : "New Blog"}
        </p>
        <div className="flex gap-4 ml-auto">
          <button className="btn-dark py-2" onClick={handlePublishEvent}>
            Publish
          </button>
          <button className="btn-light py-2"
          onClick={handleSaveDraft}
          >Save Draft</button>
        </div>
      </nav>
      <AnimationWrapper>
        <section>
          <div className="mx-auto max-w-[900px] w-full">
            <div className="relative aspect-video hover:opacity-80 bg-white border-4 border-grey">
              <label htmlFor="uploadBanner">
                <img
                  // ref={blogBanner}
                  src={banner}
                  className="z-20"
                  onError={handleError}
                />
                <input
                  id="uploadBanner"
                  type="file"
                  accept=".png,.jpg,.jpeg"
                  hidden
                  onChange={handleBannerUpload}
                />
              </label>
            </div>
            <textarea
            defaultValue={title}
              placeholder="Blog Title"
              className="text-4xl font-medium w-full h-20 outline-none resize-none mt-10 leading-tight placeholder:opacity-40"
              onKeyDown={handleTitleKeyDown}
              onChange={handleTitleChange}
            ></textarea>

            <hr className="w-full opacity-10 my-5" />

            <div id="textEditor" className="font-gelasio" style={{color:"white"}}></div>
          </div>
        </section>
      </AnimationWrapper>
    </>
  );
};
export default BlogEditor;