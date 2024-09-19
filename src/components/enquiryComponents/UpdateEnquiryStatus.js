import React, { useState } from 'react';
import axios from 'axios';

const UpdateEnquiry = ({ enquiry, onClose }) => {
  const [status, setStatus] = useState(enquiry.status);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleUpdate = async () => {
    setLoading(true);
    try {
      await axios.patch(`http://127.0.0.1:8000/enquiries/${enquiry.id}/`, { status });
      onClose(); // Close the update component on success
    } catch (err) {
      setError('Error updating enquiry');
    }
    setLoading(false);
  };

  return (
    <div className="update-enquiry">
      <h3>Update Enquiry Status</h3>
      <p><strong>First Name:</strong> {enquiry.first_name}</p>
      <p><strong>Last Name:</strong> {enquiry.last_name}</p>
      <p><strong>Email:</strong> {enquiry.email}</p>
      <p><strong>Mobile:</strong> {enquiry.mobile}</p>
      <p><strong>Message:</strong> {enquiry.message}</p>
      <p><strong>Enquiry Date:</strong> {new Date(enquiry.enquiry_date).toLocaleDateString()}</p>

      <label htmlFor="status">Status:</label>
      <select
        id="status"
        value={status}
        onChange={(e) => setStatus(e.target.value)}
      >
        <option value="pending">Pending</option>
        <option value="done">Done</option>
        <option value="rejected">Rejected</option>
      </select>

      <button onClick={handleUpdate} disabled={loading}>
        {loading ? 'Updating...' : 'Update'}
      </button>
      <button onClick={onClose}>Cancel</button>

      {error && <p className="error">{error}</p>}
    </div>
  );
};

export default UpdateEnquiry;
