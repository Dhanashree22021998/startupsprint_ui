import React, { useEffect, useState } from 'react';
import axios from 'axios';

const UserFamilyInfo = () => {
  const [familyInfo, setFamilyInfo] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const token = sessionStorage.getItem('authToken');

  useEffect(() => {
    const fetchFamilyInfo = async () => {
      try {
        const response = await axios.get('http://localhost:8000/app/user_details/', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setFamilyInfo(response.data.family_info);
        setLoading(false);
      } catch (error) {
        setError('An error occurred while fetching family info.');
        setLoading(false);
      }
    };

    fetchFamilyInfo();
  }, [token]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="container mt-5">
      <h2>Family Information</h2>
      {familyInfo.length > 0 ? (
        <ul>
          {familyInfo.map((member) => (
            <li key={member.id}>
              {member.father_name} - {member.father_profession} (Maritial Status: {member.marital_status})
            </li>
          ))}
        </ul>
      ) : (
        <p>No family members found.</p>
      )}
    </div>
  );
};

export default UserFamilyInfo;
