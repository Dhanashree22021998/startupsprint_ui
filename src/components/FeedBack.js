import React from 'react';
import { useState, useEffect } from 'react';
import "./FeedBack.css";
import { useForm } from 'react-hook-form'
import axios from 'axios';
import {NavLink,useNavigate,useParams} from 'react-router-dom'
//import {AI} from '../axios/AxiosInstance'



function FeedbackForm() {
  const {handleSubmit,register} = useForm()
	const nav = useNavigate()


  

  function saveFeedBackData(data){
    console.log(data)
    axios.post("http://localhost:8000/feedback_and_queries/feedback/", data).then(
      (response)=>{
        alert("data saved")
        console.log(response)
        nav('/feedback_list')
      }
    ).catch(
      (error)=>{
        console.error(error)
      }
    )
  }
 
  return (
   

    <div className='container'>
    <h1>Feedback Form</h1>
    <form onSubmit={handleSubmit(saveFeedBackData)}>
    <label htmlFor='firstname'>First Name</label>
    <input type="text" placeholder='Enter First Name' autoComplete='off' name="firstname"  required {...register('first_name')}/>


    <label htmlFor='lastname'>Last Name</label>
    <input type="text" placeholder='Enter Last Name' autoComplete='off' name="lastname"  required {...register('last_name')}/>

    <label htmlFor='email'>Email</label>
    <input type="text" placeholder='Enter Email' autoComplete='off' name="email"  required {...register('email')}/>
      
    <label htmlFor='Ratings'>Ratings</label>
    <input type="number" placeholder='Enter Ratings' min="0" 
        max="5" step="1.0" autoComplete='off' name="ratings"  required {...register('ratings')}/>
       
  
        
    <label htmlFor='feedback'>Feedback</label>
    <textarea name='feedback' id='feedback' cols="30" rows="10" placeholder='Enter Feedback'  {...register('feedback_text')}></textarea>

    <button type='submit' >Submit</button>

    </form>
    </div>

  );

}
export default FeedbackForm;