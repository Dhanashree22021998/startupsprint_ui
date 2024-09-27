import React, { useEffect, useState } from 'react';
import axios from 'axios';

const UserBankInfo = () => {
  const [bankInfo, setBankInfo] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const token = sessionStorage.getItem('authToken'); // Retrieve the token

  useEffect(() => {
    const fetchBankInfo = async () => {
      try {
        const response = await axios.get('http://localhost:8000/app/user_details/', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setBankInfo(response.data.bank_info);
        setLoading(false);
      } catch (error) {
        setError('An error occurred while fetching bank info.');
        setLoading(false);
      }
    };

    fetchBankInfo();
  }, [token]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="container mt-5">
      <h2>Bank Information</h2>
      {bankInfo.length > 0 ? (
        <ul>
          {bankInfo.map((bank) => (
            <li key={bank.id}>
              Bank: {bank.bank_name}, Account No: {bank.account_number}, IFSC: {bank.ifsc_code}, Branch: {bank.bank_address || 'N/A'}
            </li>
          ))}
        </ul>
      ) : (
        <p>No bank details found.</p>
      )}
    </div>
  );
};

export default UserBankInfo;
