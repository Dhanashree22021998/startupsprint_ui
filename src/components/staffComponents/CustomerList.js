import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

function CustomerList() {
 
  const { register, handleSubmit } = useForm();
  
  
  const [customers, setCustomers] = useState([]);
  const [hoveredCustomer, setHoveredCustomer] = useState(null);

  
  useEffect(() => {
    fetch('http://127.0.0.1:8000/staff/api/customers/') 
    
      .then((response) => response.json())
      .then((data) => setCustomers(data))
      .catch((error) => console.error('Error fetching customers:', error));
  }, []);


  const onSubmit = (data) => {
    console.log('Form Data:', data); 
  };

  return (
    <div className="container mt-4">
      <h1>Customer List</h1>

      
      {/* <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-3">
          <label htmlFor="search" className="form-label">Search by Name</label>
          <input
            type="text"
            className="form-control"
            id="search"
            placeholder="Enter customer name"
            {...register('search')}
          />
        </div>
        <button type="submit" className="btn btn-primary">Search</button>
      </form> */}

      
      <table className="table table-bordered mt-4">
        <thead>
          <tr>
            <th>#</th>
            <th>Photo</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Mobile</th>
            <th>Date of Birth</th>
            <th>Current Address</th>
          </tr>
        </thead>
        <tbody>
          {customers.map((customer, index) => (
            <tr key={customer.id}
            onMouseEnter={() => setHoveredCustomer(customer)} 
            onMouseLeave={() => setHoveredCustomer(null)} 
            >
              <td>{index + 1}</td>
              <td>
                {customer.photo ? (
                  <img src={customer.photo} className="img-thumbnail" style={{ width: '50px' }} alt="Customer"/>
                ) : (
                  'No Photo'
                )}
              </td>
              <td>{customer.first_name}</td>
              <td>{customer.last_name}</td>
              <td>{customer.email}</td>
              <td>{customer.mobile}</td>
              <td>{customer.dob}</td>
              <td>{customer.current_address}</td>
            </tr>
          ))}
        </tbody>
      </table>
       
       {hoveredCustomer && (
        <div className="hovered-details mt-4 p-3 bg-light border">
          <h4>Details for {hoveredCustomer.first_name} {hoveredCustomer.last_name}</h4>
          <p><strong>Email:</strong> {hoveredCustomer.email}</p>
          <p><strong>Mobile:</strong> {hoveredCustomer.mobile}</p>
          <p><strong>Date of Birth:</strong> {hoveredCustomer.dob}</p>
          <p><strong>Current Address:</strong> {hoveredCustomer.current_address}</p>
          <p><strong>Additional Information:</strong> </p>
          
          <p><strong>Family Information:</strong></p>
          <ul>
            <li><strong>Father's Name:</strong> {hoveredCustomer.family.father_name}</li>
            <li><strong>Mother's Name:</strong> {hoveredCustomer.family.mother_name}</li>
            <li><strong>Marital Status:</strong> {hoveredCustomer.family.marital_status}</li>
            <li><strong>Spouse Name:</strong> {hoveredCustomer.family.spouse_name}</li>
          </ul>

          <p><strong>Bank Information:</strong></p>
          <ul>
            {hoveredCustomer.banks.map((bank, index) => (
              <li key={index}>
                <strong>Bank Name:</strong> {bank.bank_name} <br />
                <strong>Account Number:</strong> {bank.account_number} <br />
                <strong>IFSC Code:</strong> {bank.ifsc_code} <br />
                <strong>Bank Address:</strong> {bank.bank_address} <br />
              </li>
            ))}
          </ul>

          <h5>Applications:</h5>
          {hoveredCustomer.applications.length > 0 ? (
            hoveredCustomer.applications.map((app, index) => (
              <div key={index}>
                <p><strong>Aadhaar No:</strong> {app.aadhaar_no}</p>
                <p><strong>PAN No:</strong> {app.pan_no}</p>
                <p><strong>Employment Type:</strong> {app.type_of_employment}</p>
                <p><strong>Business Title:</strong> {app.business_title}</p>
                <p><strong>Status:</strong> {app.status}</p>

                <h6>Guarantors:</h6>
                {app.guarantors.length > 0 ? (
                  app.guarantors.map((guar, gindex) => (
                    <div key={gindex}>
                      <p><strong>Name:</strong> {guar.name}</p>
                      <p><strong>Relation:</strong> {guar.relation_with_customer}</p>
                      <p><strong>Mobile:</strong> {guar.mobile}</p>
                      <p><strong>Profession:</strong> {guar.profession}</p>
                      <p><strong>Bank:</strong> {guar.bank_name}</p>
                      <p><strong>IFSC Code:</strong> {guar.ifsc_code}</p>
                    </div>
                  ))
                ) : (
                  <p>No Guarantors</p>
                )}
        </div>
         ))
        ) : (
          <p>No Applications</p>
        )}
      </div>
    )}
    </div>
  );
}

export default CustomerList;
