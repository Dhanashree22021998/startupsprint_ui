import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import UpdateEnquiry from './UpdateEnquiryStatus';

const EnquiryList = () => {
  const [enquiries, setEnquiries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedEnquiry, setSelectedEnquiry] = useState(null); // State to manage the selected enquiry for updating

  const { register, handleSubmit, formState: { errors } } = useForm();

  const fetchEnquiries = async (status) => {
    setLoading(true);
    try {
      const response = await axios.get(
        `http://127.0.0.1:8000/inquiries/?status=${status}`
      );
      setEnquiries(response.data);
      setLoading(false);
    } catch (err) {
      setError('Error fetching enquiries');
      setLoading(false);
    }
  };

  const onSubmit = (data) => {
    fetchEnquiries(data.status);
  };

  useEffect(() => {
    fetchEnquiries('');
  }, []);

  const handleUpdateClick = (enquiry) => {
    setSelectedEnquiry(enquiry);
  };

  const handleUpdateClose = () => {
    setSelectedEnquiry(null);
  };

  return (
    <div>
      <h2>Loan Enquiries</h2>

      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="statusFilter">Filter by Status: </label>
        <select
          id="statusFilter"
          {...register('status', {
            required: 'Please select a status',
          })}
        >
          <option value="">All</option>
          <option value="pending">Pending</option>
          <option value="done">Done</option>
          <option value="rejected">Rejected</option>
        </select>
        <button type="submit">Filter</button>
        {errors.status && <p className="error">{errors.status.message}</p>}
      </form>

      {loading && <p>Loading enquiries...</p>}
      {error && <p>{error}</p>}

      {!loading && !error && enquiries.length > 0 ? (
        <table>
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Mobile</th>
              <th>Status</th>
              <th>Message</th>
              <th>Enquiry Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {enquiries.map((enquiry) => (
              <tr key={enquiry.id}>
                <td>{enquiry.first_name}</td>
                <td>{enquiry.last_name}</td>
                <td>{enquiry.email}</td>
                <td>{enquiry.mobile}</td>
                <td>{enquiry.status}</td>
                <td>{enquiry.message}</td>
                <td>{new Date(enquiry.enquiry_date).toLocaleDateString()}</td>
                <td>
                  {enquiry.status === 'pending' && (
                    <button onClick={() => handleUpdateClick(enquiry)}>Update</button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No enquiries found.</p>
      )}

      {selectedEnquiry && (
        <UpdateEnquiry enquiry={selectedEnquiry} onClose={handleUpdateClose} />
      )}
    </div>
  );
};

export default EnquiryList;
