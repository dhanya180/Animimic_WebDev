// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import './profile.css';

// function Profile() {
//   const [showChangePassword, setShowChangePassword] = useState(false); // It controls the visibility of the change password page
//   const [oldPassword, setOldPassword] = useState('');
//   const [newPassword, setNewPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');
//   const [message, setMessage] = useState('');

//   const handleChangePasswordClick = () => {
//     if (showChangePassword) {
//         resetPasswordFields();
//       }
//     setShowChangePassword(!showChangePassword); // Toggle password form visibility
//   };
  
//   const handlePasswordSubmit = (e) => {
//     e.preventDefault();
//     if (newPassword === confirmPassword) {
//       window.alert('Password updated successfully!');
//       // Add logic to update password in the backend
//       resetPasswordFields();
//       setShowChangePassword(false);
//     } else {
//       setMessage('New password and confirm password does not match!');
//     }
//   };

//   const resetPasswordFields = () => {
//     setOldPassword('');
//     setNewPassword('');
//     setConfirmPassword('');
//     setMessage('');
//   };

//   const navigate = useNavigate();

//   const handleLogout = () => {
//     navigate('/');
//   }

//   const handleChangePassword = () => {
//     navigate('/reset-password');
//   }

//   return (
//     <div className="profile-container">
//       <h2 className="profile">Profile Management</h2>
//       <button type="button" className="submit-button" onClick={handleChangePassword}>
//         Change Password
//       </button><br/>
//       <button type="button" className="submit-button">
//         Delete Account
//       </button><br/>
//       <button type="button" className="submit-button" onClick={handleLogout}>
//         Log out
//       </button>

//       {/* Show the Change Password form if "Change Password" is clicked */}
//       {showChangePassword && (
//         <div className="change-password-form">
//           <form onSubmit={handlePasswordSubmit}>
//             <h3>Change Password</h3>
//             <div>
//               <label>Old Password</label>
//               <input
//                 type="text"
//                 value={oldPassword}
//                 onChange={(e) => setOldPassword(e.target.value)}
//                 required
//               />
              
//             </div>
//             <div>
//               <label>New Password</label>
//               <input
//                 type="password"
//                 value={newPassword}
//                 onChange={(e) => setNewPassword(e.target.value)}
//                 required
//               />
//             </div>
//             <div>
//               <label>Confirm New Password</label>
//               <input
//                 type="password"
//                 value={confirmPassword}
//                 onChange={(e) => setConfirmPassword(e.target.value)}
//                 required
//               />
//             </div>
//             <button type="submit" className="submit-button">
//               Done
//             </button>
            
//             {message && <p>{message}</p>}
//           </form>
//         </div>
//       )}
//     </div>
//   );
// }

// export default Profile;



import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './profile.css';

function Profile() {
  let authorId=localStorage.getItem("userId");
  if(!authorId){
    console.log("we didn't get author Id");
  }
  const [showChangePassword, setShowChangePassword] = useState(false); // It controls the visibility of the change password page
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleChangePasswordClick = () => {
    if (showChangePassword) {
        resetPasswordFields();
      }
    setShowChangePassword(!showChangePassword); // Toggle password form visibility
  };
  
  const handlePasswordSubmit = (e) => {
    e.preventDefault();
    if (newPassword === confirmPassword) {
      window.alert('Password updated successfully!');
      // Add logic to update password in the backend
      resetPasswordFields();
      setShowChangePassword(false);
    } else {
      setMessage('New password and confirm password does not match!');
    }
  };

  const resetPasswordFields = () => {
    setOldPassword('');
    setNewPassword('');
    setConfirmPassword('');
    setMessage('');
  };

  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear();
    navigate('/');
  }

  const handleDelete = () => {
    // navigate('/');
    const regobj={
        id:authorId,
    }
    console.log("Deleting account with data",regobj);
    fetch("https://animimic.onrender.com/api/delete", {
        method: "DELETE",
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(regobj)
      })
      .then((res) => {
        if (!res.ok) {
          return res.json().then((errorData) => {
            throw new Error(errorData.message || 'Failed to delete the account');
          });
        }
        console.log(res);
        return res.json(); // If the response is okay, parse it
      })
      .then((data) => {
        localStorage.clear();
        console.log('All data from localStorage has been cleared.');
        console.log('account deleted successfully:', data);
       //toast.success('Registered successfully.');
        navigate('/', { replace: true });
      })
      .catch((err) => {
       // toast.error(Error: ${err.message});
        console.error('Error:', err);
      });
  }

  const handleChangePassword = () => {
    navigate('/reset-password');
  }

  return (
    <div className="profile-container">
      <h2 className="profile">Profile Management</h2>
      <button type="button" className="submit-button" onClick={handleChangePassword}>
        Change Password
      </button><br/>
      <button type="button" className="submit-button" onClick = {handleDelete}>
        Delete Account
      </button><br/>
      <button type="button" className="submit-button" onClick={handleLogout}>
        Log out
      </button>

      {/* Show the Change Password form if "Change Password" is clicked */}
      {showChangePassword && (
        <div className="change-password-form">
          <form onSubmit={handlePasswordSubmit}>
            <h3>Change Password</h3>
            <div>
              <label>Old Password</label>
              <input
                type="text"
                value={oldPassword}
                onChange={(e) => setOldPassword(e.target.value)}
                required
              />
              
            </div>
            <div>
              <label>New Password</label>
              <input
                type="password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                required
              />
            </div>
            <div>
              <label>Confirm New Password</label>
              <input
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
            </div>
            <button type="submit" className="submit-button">
              Done
            </button>
            
            {message && <p>{message}</p>}
          </form>
        </div>
      )}
    </div>
  );
}

export default Profile;