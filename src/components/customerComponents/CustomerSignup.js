import React,  { useState } from 'react';
import { useForm } from 'react-hook-form';
import 'bootstrap/dist/css/bootstrap.min.css';
import './CustomerSignup.css';
import { AI } from '../../axios/AxiosInstance'
import { useNavigate } from 'react-router-dom';


const CustomerSignup = () => {
  const { register, handleSubmit, formState: { errors }, watch } = useForm();
  // const formRef = useRef()
  const navigate = useNavigate()

  const [showModal, setShowModal] = useState(false);

  const onSubmit = async (data) => {
    try {
      // const formData = new FormData(formRef.current);
      // formData.append('role', 'customer');  


      // BAckend mein kr bhai


      const res = await AI.post('customer/signup/', data, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      if (res.status === 201) {
        console.log('Data saved')
        setShowModal(true);
        navigate('/')
      }
    } catch (e) {
      console.log(e, e.response?.data);
      alert('Something went wrong!');
    }
  };

  const password = watch('password');

  const handleModalClose = () => {
    setShowModal(false);
    // navigate('/');
  };

  return (
    <div className="container signup-container d-flex justify-content-center align-items-center">
      <div className="card signup-card">
        <div className="card-body">
          <h2 className="card-title text-center">Signup Form</h2>
          <form onSubmit={handleSubmit(onSubmit)}>

            <div className="row">

              <div className="col-md-6">

                <div className="form-group">
                  <label htmlFor="first_name">First Name</label>
                  <input
                    type="text"
                    className={`form-control ${errors.first_name ? 'is-invalid' : ''}`}
                    id="first_name"
                    {...register('first_name', {
                      required: 'First name is required',
                      minLength: {
                        value: 4,
                        message: 'First name must be at least 4 characters long'
                      }
                    })}
                  />
                  {errors.first_name && <div className="invalid-feedback">{errors.first_name.message}</div>}
                </div>

                {/* Last Name */}
                <div className="form-group">
                  <label htmlFor="last_name">Last Name</label>
                  <input
                    type="text"
                    className={`form-control ${errors.last_name ? 'is-invalid' : ''}`}
                    id="last_name"
                    {...register('last_name', {
                      required: 'Last name is required',
                      minLength: {
                        value: 4,
                        message: 'Last name must be at least 4 characters long'
                      }
                    })}
                  />
                  {errors.last_name && <div className="invalid-feedback">{errors.last_name.message}</div>}
                </div>

                {/* Email */}
                <div className="form-group">
                  <label htmlFor="email">Email address</label>
                  <input
                    type="email"
                    className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                    id="email"
                    {...register('email', {
                      required: 'Email is required',
                      pattern: {
                        value: /^\S+@(gmail\.com|yahoo\.com|outlook\.com)$/,
                        message: 'Only Gmail, Yahoo, and Outlook domains are allowed'
                      }
                    })}
                  />
                  {errors.email && <div className="invalid-feedback">{errors.email.message}</div>}
                </div>

                {/* Password */}
                <div className="form-group">
                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    className={`form-control ${errors.password ? 'is-invalid' : ''}`}
                    id="password"
                    {...register('password', {
                      required: 'Password is required',
                      minLength: {
                        value: 8,
                        message: 'Password must be at least 8 characters long'
                      }
                    })}
                  />
                  {errors.password && <div className="invalid-feedback">{errors.password.message}</div>}
                </div>
                {/* Confirm Password */}
                <div className="form-group">
                  <label htmlFor="confirm_password">Confirm Password</label>
                  <input
                    type="password"
                    className={`form-control ${errors.confirm_password ? 'is-invalid' : ''}`}
                    id="confirm_password"
                    {...register('confirm_password', {
                      required: 'Please confirm your password',
                      validate: value => value === password || 'Passwords do not match'
                    })}
                  />
                  {errors.confirm_password && <div className="invalid-feedback">{errors.confirm_password.message}</div>}
                </div>

                {/* Permanent Address */}
                <div className="form-group">
                  <label htmlFor="permanent_address">Permanent Address</label>
                  <textarea
                    className={`form-control ${errors.permanent_address ? 'is-invalid' : ''}`}
                    id="permanent_address"
                    {...register('permanent_address', {
                      required: 'Permanent address is required'
                    })}
                  />
                  {errors.permanent_address && <div className="invalid-feedback">{errors.permanent_address.message}</div>}
                </div>

              </div>

              {/* Second Column */}
              <div className="col-md-6">

                {/* Mobile */}
                <div className="form-group">
                  <label htmlFor="mobile">Mobile Number</label>
                  <input
                    type="text"
                    className={`form-control ${errors.mobile ? 'is-invalid' : ''}`}
                    id="mobile"
                    placeholder="+91XXXXXXXXXX"
                    {...register('mobile', {
                      required: 'Mobile number is required',
                      pattern: {
                        value: /^\+91\d{10}$/,
                        message: 'Mobile number must be in the format +91XXXXXXXXXX',
                      },
                    })}
                  />
                  {errors.mobile && <div className="invalid-feedback">{errors.mobile.message}</div>}
                </div>


                {/* Gender */}
                <div className="form-group">
                  <label htmlFor="gender">Gender</label>
                  <select
                    className={`form-control ${errors.gender ? 'is-invalid' : ''}`}
                    id="gender"
                    {...register('gender', {
                      required: 'Gender is required'
                    })}
                  >
                    <option value="">Select Gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="transgender">Transgender</option>
                  </select>
                  {errors.gender && <div className="invalid-feedback">{errors.gender.message}</div>}
                </div>



                {/* Current Address */}
                <div className="form-group">
                  <label htmlFor="current_address">Current Address</label>
                  <textarea
                    className={`form-control ${errors.current_address ? 'is-invalid' : ''}`}
                    id="current_address"
                    {...register('current_address', {
                      required: 'Current address is required'
                    })}
                  />
                  {errors.current_address && <div className="invalid-feedback">{errors.current_address.message}</div>}
                </div>

                {/* Photo */}
                <div className="form-group">
                  <label htmlFor="photo">Photo</label>
                  <input
                    type="file"
                    className={`form-control ${errors.photo ? 'is-invalid' : ''}`}
                    id="photo"
                    {...register('photo')}
                  />
                  {errors.photo && <div className="invalid-feedback">{errors.photo.message}</div>}
                </div>

                {/* Signature */}
                <div className="form-group">
                  <label htmlFor="signature">Signature</label>
                  <input
                    type="file"
                    className={`form-control ${errors.signature ? 'is-invalid' : ''}`}
                    id="signature"
                    {...register('signature')}
                  />
                  {errors.signature && <div className="invalid-feedback">{errors.signature.message}</div>}
                </div>

              </div>

            </div>

            <button type="submit" className="btn btn-primary btn d-flex justify-content-center mx-auto">
              Sign Up
            </button>

          </form>
        </div>
      </div>


      {showModal && (
        <div className="modal show fade" tabIndex="-1" style={{ display: 'block' }}>
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Signup Successful</h5>
                <button type="button" className="close" onClick={handleModalClose}>
                  <span>&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <p>Your account has been created successfully! Verify Email to Activate your account.</p>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-primary" onClick={handleModalClose}>
                  OK
                </button>
              </div>
            </div>
          </div>
        </div>
      )}




    </div>
  )
};

export default CustomerSignup;
