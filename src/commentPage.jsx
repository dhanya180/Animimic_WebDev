// import React, { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";
// import axios from "axios";

// const CommentPage = () => {
//   const [discussion, setDiscussion] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [newReply, setNewReply] = useState("");
//   const { id } = useParams(); // Get the discussion ID from the URL

//   const API_URL = "http://localhost:3000/api/posts"; // Adjust URL if needed

//   useEffect(() => {
//     const fetchDiscussion = async () => {
//       if (!id) {
//         setError("Invalid post ID.");
//         setLoading(false);
//         return;
//       }
//       try {
//         const response = await axios.get(`${API_URL}/${id}`);
//         setDiscussion(response.data);
//       } catch (error) {
//         console.error("Error fetching discussion:", error);
//         setError("Failed to load discussion. Please try again later.");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchDiscussion();
//   }, [id]);

//   // Handle the submission of a reply
//   const handleReplySubmit = async (commentId) => {
//     if (!newReply.trim()) {
//       alert("Reply cannot be empty.");
//       return;
//     }

//     try {
//       // API call to add the reply to the comment
//       const response = await axios.post(`${API_URL}/${id}/comments/${commentId}/reply`, {
//         content: newReply,
//       });

//       // Update the discussion with the new reply (optimistic UI update)
//       setDiscussion((prevDiscussion) => ({
//         ...prevDiscussion,
//         comments: prevDiscussion.comments.map((comment) =>
//           comment._id === commentId
//             ? {
//                 ...comment,
//                 replies: [...comment.replies, response.data], // Assuming response returns the new reply
//               }
//             : comment
//         ),
//       }));

//       // Clear the reply input field after submission
//       setNewReply("");
//     } catch (error) {
//       console.error("Error submitting reply:", error);
//       alert("Failed to submit reply. Please try again.");
//     }
//   };

//   return (
//     <div>
//       {loading && <p>Loading discussion...</p>}
//       {error && <p>{error}</p>}

//       {discussion && !loading && !error ? (
//         <div>
//           <h2>{discussion.title}</h2>
//           <p>{discussion.content}</p>

//           <div>
//             <h3>Comments</h3>
//             {discussion.comments?.length > 0 ? (
//               discussion.comments.map((comment) => (
//                 <div key={comment._id}>
//                   <p>{comment.content}</p>

//                   {/* Replies */}
//                   <div>
//                     <h4>Replies:</h4>
//                     {comment.replies && comment.replies.length > 0 ? (
//                       comment.replies.map((reply) => (
//                         <div key={reply._id} style={{ marginLeft: "20px" }}>
//                           <p>{reply.content}</p>
//                         </div>
//                       ))
//                     ) : (
//                       <p>No replies yet.</p>
//                     )}
//                   </div>

//                   {/* Reply Form */}
//                   <div>
//                     <textarea
//                       value={newReply}
//                       onChange={(e) => setNewReply(e.target.value)}
//                       placeholder="Write a reply..."
//                     />
//                     <button onClick={() => handleReplySubmit(comment._id)}>
//                       Reply
//                     </button>
//                   </div>
//                 </div>
//               ))
//             ) : (
//               <p>No comments yet.</p>
//             )}
//           </div>
//         </div>
//       ) : null}
//     </div>
//   );
// };

// export default CommentPage;




// // import React from "react";
// // const CommentPage = () => {

// //     return (
// //         <h3>Comments</h3>
// //     )
// // }
// // export default CommentPage;
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./commentPage.css"; // Import the CSS file for styling

const CommentPage = () => {
  const [discussion, setDiscussion] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [newReply, setNewReply] = useState("");
  const [newComment, setNewComment] = useState(""); // State for new comment
  const { id } = useParams(); // Get the discussion ID from the URL

  const API_URL = "https://animimic-server-3.onrender.com/api/posts"; // Adjust URL if needed

  useEffect(() => {
    const fetchDiscussion = async () => {
      if (!id) {
        setError("Invalid post ID.");
        setLoading(false);
        return;
      }
      try {
        const response = await axios.get(`${API_URL}/${id}`);
        setDiscussion(response.data);
      } catch (error) {
        console.error("Error fetching discussion:", error);
        setError("Failed to load discussion. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchDiscussion();
  }, [id]);

  // Handle the submission of a new comment
  const handleCommentSubmit = async () => {
    if (!newComment.trim()) {
      alert("Comment cannot be empty.");
      return;
    }

    try {
      // API call to add the new comment to the discussion
      const response = await axios.post(`${API_URL}/${id}/comments`, {
        content: newComment,

      });
      window.location.reload();
      // Update the discussion with the new comment (optimistic UI update)
      setDiscussion((prevDiscussion) => ({
        ...prevDiscussion,
        comments: [...prevDiscussion.comments, response.data], // Assuming response returns the new comment
      }));

      // Clear the comment input field after submission
      setNewComment("");
    } catch (error) {
      console.error("Error submitting comment:", error);
      alert("Failed to submit comment. Please try again.");
    }
  };

  // Handle the submission of a reply to a specific comment
  const handleReplySubmit = async (commentId) => {
    if (!newReply.trim()) {
      alert("Reply cannot be empty.");
      return;
    }

    const userId = localStorage.getItem("userId");

    if (!userId) {
      alert("Please log in to create a post.");
      return;
    }

    try {
      const response = await axios.post(`${API_URL}/${id}/comments/${commentId}/reply`, {
        content: newReply,
        userId,
      });
      window.location.reload();
      //const newReplyData = response.data;

      // Update the discussion state with the new reply
      setDiscussion((prevDiscussion) => {
        const updatedComments = prevDiscussion.comments.map((comment) => {
          if (comment._id === commentId) {
            return {
              ...comment,
              replies: [...comment.replies, newReplyData], // Add the new reply
            };
          }
          return comment;
        });

        return {
          ...prevDiscussion,
          comments: updatedComments,
        };
      });

      setNewReply(""); // Clear the input field
    } catch (error) {
      console.error("Error submitting reply:", error);
      alert("Failed to submit reply. Please try again.");
    }
  };

  return (
    <div className="comment-page">
      {loading && <p>Loading discussion...</p>}
      {error && <p className="error-message">{error}</p>}

      {discussion && !loading && !error ? (
        <div className="discussion-container">
          <h2>Title : {discussion.title}</h2>
          <p>{discussion.content}</p>

          <div className="comments-section">
            <h3>Comments</h3>

            {/* Add Comment Form */}
            <div className="add-comment-form">
              <textarea
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
                placeholder="Add a comment..."
              />
              <button onClick={handleCommentSubmit} className="add-comment-button">
                Add Comment
              </button>
            </div>

            {discussion.comments?.length > 0 ? (
              discussion.comments.map((comment) => (
                <div key={comment._id} className="comment">
                  <p className="comment-content">{comment.content}</p>

                  {/* Replies */}
                  <div className="replies-section">
                    <h4>Replies:</h4>
                    {comment.replies && comment.replies.length > 0 ? (
                      comment.replies.map((reply) => (
                        <div key={reply._id} className="reply">
                          <p>{reply.content}</p>
                        </div>
                      ))
                    ) : (
                      <p>No replies yet.</p>
                    )}
                  </div>

                  {/* Reply Form */}
                  <div className="reply-form">
                    <textarea
                      value={newReply}
                      onChange={(e) => setNewReply(e.target.value)}
                      placeholder="Write a reply..."
                    />
                    <button onClick={() => handleReplySubmit(comment._id)} className="reply-button">
                      Reply
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <p>No comments yet.</p>
            )}
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default CommentPage;
