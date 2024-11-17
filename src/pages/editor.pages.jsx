import React from "react";
// import { useContext } from "react";
import { createContext, useContext, useState } from "react";
// import React, { useContext, useState } from "react";
// import { Navigate } from "react-router-dom";
import { UserContext } from "../App";
import BlogEditor from "../components/blog-editor.component";
import PublishForm from "../components/publish-form.component";
import { uploadImage } from "../common/aws";

import "../index.css";
const blogStructure = {
    title: "",
    banner: "",
    content: [],
    tags: [],
    des: "",
    author: {},
  };

  export const EditorContext = createContext({});

const Editor=()=>{
    const [blog, setBlog] = useState(blogStructure);
    const [editorState,setEditorState]=useState("editor");
    const [textEditor, setTextEditor] = useState({ isReady: false });
    
    return(
       <EditorContext.Provider 
       value={{
        blog,
        setBlog,
        editorState,
        setEditorState,
        textEditor,
        setTextEditor,
      }}>
       {editorState=="editor"?<BlogEditor/>:<PublishForm/>}
       </EditorContext.Provider>

    )
}
export default Editor;