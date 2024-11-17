import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./discussionForum.css";
import { Link } from "react-router-dom";
import { v4 as uuidv4 } from 'uuid';

const generatePostId = () => {
  return uuidv4(); // Generates a unique post ID
};
const DiscussionForum = () => {
  const [discussions, setDiscussions] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [content, setContent] = useState("");
  const navigate = useNavigate(); 
  //const [lastClickTime,setLastClickTime]=useState(0);
  // Base URL for your backend API
  const API_URL ="https://animimic-server-3.onrender.com/api/posts"; // Adjust the URL if needed

  // Fetch discussions from the backend when the component mounts
  useEffect(() => {
    const fetchDiscussions = async () => {
      try {
        const response = await axios.get(`${API_URL}/all`);
        setDiscussions(response.data);
      } catch (error) {
        console.error("Error fetching discussions:", error);
      }
    };

    fetchDiscussions();
  }, []);

  // Handle creating a new post
  const handleNewPost = async () => {
    setShowModal(true); 
  };
  // const handleSubmit = () => {
  //   // Handle the submission of the new post (send it to the server or add to state)
  //   console.log("New post submitted", { title, description, content });
  //   setShowModal(false); // Close the modal after submission
  //   if (title && description && content) {
  //           const authorId = localStorage.getItem("userId"); // Simulate fetching the user ID from localStorage or a session
      
  //           if (!authorId) {
  //             alert("Please log in to create a post.");
  //             return;
  //           }
  //           const postId = Math.random().toString(36).substring(2, 15);
  //           try {
  //             const response =  axios.post(`${API_URL}/create`, {
  //               post_id:postId,
  //               title,
  //               description,
  //               content,
  //               tags: [],
  //               authorId, // Pass dynamic user ID // You can expand on this if you want to handle tags
  //               draft: false,
  //             });
  //             window.location.reload();
  //             console.log(postId);
  //             setDiscussions((prev) => [...prev, response.data]);
  //           } catch (error) {
  //             console.error("Error creating post:", error);
  //           }
  //         }
  // };

  const handleSubmit = async () => {
    if (title && description && content) {
      const authorId = localStorage.getItem("userId");
      if (!authorId) {
        alert("Please log in to create a post.");
        return;
      }
      const postId = generatePostId();
      try {
        const response = await axios.post(`${API_URL}/create`, {
          post_id: postId,
          title,
          description,
          content,
          tags: [],
          authorId,
          draft: false,
        });
        const newPost = {
          ...response.data,
          activity: { total_likes: 0, total_dislikes: 0 },
          comments: [],
        };
        setDiscussions((prev) => [...prev, newPost]);
        setShowModal(false);
        setTitle("");
        setDescription("");
        setContent("");
      } catch (error) {
        console.error("Error creating post:", error);
        alert("Failed to create the post. Please try again.");
      }
    }
  };
  
  // Handle like/dislike for a discussion
  const handleLikeDislike = async (id, type) => {
    try {
    //     const now = Date.now();
    //   const isDoubleClick = now - lastClickTime < 300; // 300ms for detecting double-click

    //   // Update the time of the current click
    //   setLastClickTime(now);

      const endpoint =
        type === "likes"
          ? `${API_URL}/${id}/like`
          : `${API_URL}/${id}/dislike`;

          let updatedLikes = 0;
          let updatedDislikes = 0;
    
          // Check if it's a double click on like
          if (type === "likes") {
            updatedLikes = 1; // Reset likes if double clicked
            updatedDislikes = 0; // Reset dislikes as well
          } else {
            updatedLikes = 0; // Reset likes if user dislikes
            updatedDislikes = 1;
          }
      // Optimistic UI update:
      setDiscussions((prevDiscussions) =>
        prevDiscussions.map((discussion) =>
          discussion._id === id
            ? {
                ...discussion,
                activity: {
                  ...discussion.activity,
                  // Reset the opposite action and increment the current action
                  total_likes: updatedLikes,
                  total_dislikes:updatedDislikes,
                },
              }
            : discussion
        )
      );
  
      // API call to update likes/dislikes in the backend
      const response = await axios.post(endpoint);
  
      // Update the state with the actual response from the backend
      setDiscussions((prevDiscussions) =>
        prevDiscussions.map((discussion) =>
          discussion._id === id
            ? {
                ...discussion,
                activity: {
                  ...discussion.activity,
                  total_likes: response.data.total_likes,
                  total_dislikes: response.data.total_dislikes,
                },
              }
            : discussion
        )
      );
    } catch (error) {
      console.error("Error updating likes/dislikes:", error);
    }
  };
  
  

  // Filter discussions based on search term
  const filteredDiscussions = discussions.filter((discussion) =>
    (discussion.description || "").toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };


  const handleCommentsClick = (id) => {
    navigate(`/comments/${id}`); // Navigate to the comment page with the discussion ID
  };

  return (
    <div className="discussion-forum">
      <nav className="navbar">
        <h1>Discussion Forums</h1>
        <div className="nav-right">
          <input
            type="text"
            placeholder="Search discussions..."
            value={searchTerm}
            onChange={handleSearch}
          />
          <button className="new-post-btn" onClick={handleNewPost}>
            Create New Post
          </button>
          <button className="for-profile">
          <Link to="/profile">
          <i class="fi fi-rr-user"></i>
          </Link>
          </button>
        </div>
      </nav>

      {showModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h2>Create a New Post</h2>
            <label>
              Title:
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Enter title of the discussion"
              />
            </label>
            <label>
              Description:
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Enter description"
              />
            </label>
            <label>
              Content:
              <textarea
                value={content}
                onChange={(e) => setContent(e.target.value)}
                placeholder="Enter full content"
              />
            </label>
            <button
              onClick={handleSubmit}
              disabled={!title || !description || !content} // Disable if any field is empty
            >
              Submit
            </button>

            
            <button onClick={() => setShowModal(false)}>Cancel</button>
          </div>
        </div>
      )}



      <main>
        {filteredDiscussions.length === 0 ? (
          <p>No discussions found!</p>
        ) : (
          filteredDiscussions.map((discussion) => (
            <div key={discussion._id} className="discussion">
              <h2>{discussion.title}</h2>
              <p>{discussion.description}</p>
              <div className="actions">
                <button type="button" onClick={() => handleLikeDislike(discussion._id, "likes")}>
                  👍 {discussion.activity?.total_likes || 0}
                </button>
                <button type="button" onClick={() => handleLikeDislike(discussion._id, "dislikes")}>
                  👎 {discussion.activity?.total_dislikes || 0}
                </button>
                <button onClick={() => handleCommentsClick(discussion._id)}>
                  💬 {discussion.comments?.length || 0} Comments
                </button>
              </div>
            </div>
          ))
        )}
      </main>
    </div>
  );
};

export default DiscussionForum;
