import {useState,useEffect} from 'react'
import {useForm} from 'react-hook-form'
import axios from 'axios'
import { NavLink,useNavigate,useParams } from 'react-router-dom'
// import { useAuth } from '../hooks/useAuth'
import 'bootstrap/dist/css/bootstrap.min.css';
import Table from 'react-bootstrap/Table';


function Feedback_List(){
const [feedbacks, setFeedbacks]=useState([])

function getFeedbacksFromServer(){
	axios.get("http://localhost:8000/feedback_and_queries/feedback_list/").then(
		(response)=>{
			console.log(response)
			setFeedbacks(response.data.feedback)
		}
	).catch((error)=>{
		console.error(error)
	})
}


useEffect(()=>{
  getFeedbacksFromServer()

  }
,[])

	return(
		<div className="p-3 mt-2">
 
			<div className="p-2">
			
				<table className="table table-striped table-hover">	
					<thead>
						<tr className="table-secondary" key="row-1">
							<th colSpan="9" className="text-center fs-5">Feedback List</th>
						</tr>
						<tr key='row-2'>
							<th>First Name</th>
							<th>Last Name</th>
							<th>Email ID</th>
							<th>Ratings</th>
                            <th>Feedback</th>
						</tr>
					</thead>
					<tbody>
						{
							feedbacks.map( e =>
								<tr key={e.id}>
									<td>{e.first_name}</td>
									<td>{e.last_name}</td>
									<td>{e.email}</td>
									<td>{e.ratings}</td>
                                    <td>{e.feedback_text}</td>
									
								</tr>
							)
						}
					</tbody>
				</table>
				
			</div>
		</div>
	)
}


export default Feedback_List