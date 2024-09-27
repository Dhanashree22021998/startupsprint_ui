import React, { useState } from 'react';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import './Registartion.css';

const Registration= () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [message, setMessage] = useState('');

  const onSubmit = async (data) => {
    try {
      const response = await axios.post('http://localhost:8000/staff/register/', data);
      setMessage(response.data.message);
    } catch (error) {
      setMessage(error.response?.data?.error || 'Error during registration');
    }
  };

  return (
    <div>
      <h2>Register User</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>First Name</label>
          <input
            {...register('first_name', { required: 'First name is required' })}
            type="text"
          />
          {errors.first_name && <p>{errors.first_name.message}</p>}
        </div>

        <div>
          <label>Last Name</label>
          <input
            {...register('last_name', { required: 'Last name is required' })}
            type="text"
          />
          {errors.last_name && <p>{errors.last_name.message}</p>}
        </div>

        <div>
          <label>Email</label>
          <input
            {...register('email', {
              required: 'Email is required',
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: 'Invalid email format',
              },
            })}
            type="email"
          />
          {errors.email && <p>{errors.email.message}</p>}
        </div>

        <div>
          <label>Mobile</label>
          <input
            {...register('mobile', {
              required: 'Mobile number is required',
              minLength: { value: 10, message: 'Mobile number must be at least 10 digits' },
              maxLength: { value: 15, message: 'Mobile number cannot exceed 15 digits' },
            })}
            type="text"
          />
          {errors.mobile && <p>{errors.mobile.message}</p>}
        </div>

        <div>
          <label>Gender</label>
          <select {...register('gender', { required: 'Gender is required' })}>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="transgender">Transgender</option>
          </select>
          {errors.gender && <p>{errors.gender.message}</p>}
        </div>

        <div>
          <label>Date of Birth</label>
          <input
            {...register('dob', { required: 'Date of birth is required' })}
            type="date"
          />
          {errors.dob && <p>{errors.dob.message}</p>}
        </div>

        <div>
          <label>Role</label>
          <select {...register('role', { required: 'Role is required' })}>
            <option value="loan_representative">Loan Representative</option>
            <option value="loan_sanctioning_officer">Loan Sanctioning Officer</option>
            <option value="admin">Admin</option>
            <option value="account_head">Account Head</option>
          </select>
          {errors.role && <p>{errors.role.message}</p>}
        </div>

        <div>
          <label>Permanent Address</label>
          <textarea {...register('permanent_address')} />
        </div>

        <div>
          <label>Current Address</label>
          <textarea {...register('current_address')} />
        </div>

        <button type="submit">Register</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default Registration;
