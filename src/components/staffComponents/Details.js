import React, { useState, useEffect } from 'react';

const Details = () => {
  // Initialize the state to store user details
  const [userDetails, setUserDetails] = useState({
    email: '',
    first_name: '',
    last_name: '',
    dob: '',
    gender: '',
    permanent_address: '',
    current_address: '',
    mobile: '',
    photo: '',
    signature: '',
    role: '',
    is_active_models: false,
  });

  // Fetch user data from backend (this is a placeholder function)
  useEffect(() => {
    const fetchUserData = async () => {
      // Simulating an API call
      const response = {
        email: 'johndoe@example.com',
        first_name: 'John',
        last_name: 'Doe',
        dob: '1990-12-12',
        gender: 'male',
        permanent_address: '123 Main St, Springfield',
        current_address: '456 Park Ave, Springfield',
        mobile: '1234567890',
        photo: 'user_photo.jpg', // Simulate a file or URL
        signature: 'user_signature.png', // Simulate a file or URL
        role: 'admin',
        is_active_models: true,
      };

      // Set the fetched data to userDetails state
      setUserDetails(response);
    };

    fetchUserData(); // Call the function to fetch user details
  }, []); // The empty dependency array ensures it runs only once when the component mounts

  // Render the user details
  return (
    <div>
      <h1>User Details</h1>
      <p><strong>Email:</strong> {userDetails.email}</p>
      <p><strong>First Name:</strong> {userDetails.first_name}</p>
      <p><strong>Last Name:</strong> {userDetails.last_name}</p>
      <p><strong>Date of Birth:</strong> {userDetails.dob}</p>
      <p><strong>Gender:</strong> {userDetails.gender}</p>
      <p><strong>Permanent Address:</strong> {userDetails.permanent_address}</p>
      <p><strong>Current Address:</strong> {userDetails.current_address}</p>
      <p><strong>Mobile:</strong> {userDetails.mobile}</p>
      <p><strong>Role:</strong> {userDetails.role}</p>
      <p><strong>Is Active:</strong> {userDetails.is_active_models ? 'Yes' : 'No'}</p>
      
      {/* Displaying the photo and signature if available */}
      {userDetails.photo && (
        <div>
          <strong>Photo:</strong>
          <img src={userDetails.photo} alt="User Photo" style={{ width: '100px', height: '100px' }} />
        </div>
      )}
      {userDetails.signature && (
        <div>
          <strong>Signature:</strong>
          <img src={userDetails.signature} alt="User Signature" style={{ width: '100px', height: '50px' }} />
        </div>
      )}
    </div>
  );
};

export default Details;
