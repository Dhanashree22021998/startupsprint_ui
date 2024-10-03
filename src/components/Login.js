import React from 'react'
import { useForm } from 'react-hook-form'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css'
import './Login.css'
import { useNavigate } from 'react-router-dom'
import { AI } from '../axios/AxiosInstance'

const Login = () => {
    const { register, handleSubmit, formState: { errors } } = useForm()

    const navigate = useNavigate()

    const onSubmit = async (data) => {
        try {
            const res = await AI.post('login/', data)

            if (res.status === 200) {
                console.log('Login successful')

                const url = res.data.redirect_urls

                navigate(url)

            }
        } catch (error) {
            console.error('Login failed', error)
        }
    }

        return (
            <div className="login-container">
                <form className="login-form" onSubmit={handleSubmit(onSubmit)}>
                    <h2 className="text-center mb-4">Login</h2>


                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email address</label>
                        <input
                            type="email"
                            className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                            id="email"
                            placeholder="Enter your email"
                            {...register('email', { required: 'Email is required', pattern: { value: /^\S+@\S+$/i, message: 'Invalid email address' } })}
                        />
                        {errors.email && <div className="invalid-feedback">{errors.email.message}</div>}
                    </div>


                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">Password</label>
                        <input
                            type="password"
                            className={`form-control ${errors.password ? 'is-invalid' : ''}`}
                            id="password"
                            placeholder="Enter your password"
                            {...register('password', { required: 'Password is required' })}
                        />
                        {errors.password && <div className="invalid-feedback">{errors.password.message}</div>}
                    </div>


                    <button type="submit" className="btn btn-primary w-100">Login</button>
                </form>
            </div>
        )
}

export default Login