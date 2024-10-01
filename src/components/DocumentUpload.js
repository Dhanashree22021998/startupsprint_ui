import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';  // To get applicationId from the URL
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';  // Import Bootstrap styles

function DocumentUpload() {
    const { applicationId } = useParams();  // Extract applicationId from URL
    const { register, handleSubmit, formState: { errors } } = useForm();  // Using react-hook-form
    const [statusMessage, setStatusMessage] = useState('');

    const onSubmit = async (data) => {
        const formData = new FormData();
        formData.append('aadhaar_card', data.aadhaar_card[0]);  // Append Aadhaar card file
        formData.append('pan_card', data.pan_card[0]);  // Append PAN card file
        formData.append('application_id', applicationId);  // Append applicationId from URL

        // Append additional files
        formData.append('business_address_proof_or_copy_of_rent_agreement', data.business_address_proof_or_copy_of_rent_agreement[0]);
        formData.append('electricity_bill', data.electricity_bill[0]);
        formData.append('msme_certificate', data.msme_certificate[0]);
        formData.append('gst_certificate', data.gst_certificate[0]);
        formData.append('udyog_aadhaar_registeration', data.udyog_aadhaar_registeration[0]);
        formData.append('business_license', data.business_license[0]);
        formData.append('business_plan_or_proposal', data.business_plan_or_proposal[0]);
        formData.append('three_year_itr_with_balance_sheet', data.three_year_itr_with_balance_sheet[0]);

        try {
            // Make the API call to the backend for document upload
            const response = await axios.post(
                `http://127.0.0.1:8000/uploaddocument/upload/`,  // Backend endpoint for document upload
                formData
            );
            setStatusMessage('Document uploaded successfully!');
        } catch (error) {
            // Log the error and set a user-friendly message
            console.error(error);
            setStatusMessage('Error uploading documents. Please try again.');
        }
    };

    return (
        <div className="container mt-5">
            <h2 className="text-center mb-4">Upload Documents for Application ID: {applicationId}</h2>  {/* Display application ID */}
            <form onSubmit={handleSubmit(onSubmit)}>
                {/* Aadhaar Card */}
                <div className="form-group mb-3">
                    <label>Aadhaar Card (PNG, JPEG, PDF)</label>
                    <input
                        type="file"
                        className={`form-control ${errors.aadhaar_card ? 'is-invalid' : ''}`}
                        {...register('aadhaar_card', { required: 'Aadhaar card is required' })}
                    />
                    {errors.aadhaar_card && <div className="invalid-feedback">{errors.aadhaar_card.message}</div>}
                </div>

                {/* PAN Card */}
                <div className="form-group mb-3">
                    <label>PAN Card (PNG, JPEG, PDF)</label>
                    <input
                        type="file"
                        className={`form-control ${errors.pan_card ? 'is-invalid' : ''}`}
                        {...register('pan_card', { required: 'PAN card is required' })}
                    />
                    {errors.pan_card && <div className="invalid-feedback">{errors.pan_card.message}</div>}
                </div>

                {/* Business Address */}
                <div className="form-group mb-3">
                    <label>Business Address (PNG, JPEG, PDF)</label>
                    <input
                        type="file"
                        className={`form-control ${errors.business_address_proof_or_copy_of_rent_agreement ? 'is-invalid' : ''}`}
                        {...register('business_address_proof_or_copy_of_rent_agreement', { required: 'Business Address is required' })}
                    />
                    {errors.business_address_proof_or_copy_of_rent_agreement && <div className="invalid-feedback">{errors.business_address_proof_or_copy_of_rent_agreement.message}</div>}
                </div>

                {/* Electricity Bill */}
                <div className="form-group mb-3">
                    <label>Electricity Bill (PNG, JPEG, PDF)</label>
                    <input
                        type="file"
                        className={`form-control ${errors.electricity_bill ? 'is-invalid' : ''}`}
                        {...register('electricity_bill', { required: 'Electricity Bill is required' })}
                    />
                    {errors.electricity_bill && <div className="invalid-feedback">{errors.electricity_bill.message}</div>}
                </div>

                {/* MSME Certificate */}
                <div className="form-group mb-3">
                    <label>MSME Certificate (PNG, JPEG, PDF)</label>
                    <input
                        type="file"
                        className={`form-control ${errors.msme_certificate ? 'is-invalid' : ''}`}
                        {...register('msme_certificate', { required: 'MSME Certificate is required' })}
                    />
                    {errors.msme_certificate && <div className="invalid-feedback">{errors.msme_certificate.message}</div>}
                </div>

                {/* GST Certificate */}
                <div className="form-group mb-3">
                    <label>GST Certificate (PNG, JPEG, PDF)</label>
                    <input
                        type="file"
                        className={`form-control ${errors.gst_certificate ? 'is-invalid' : ''}`}
                        {...register('gst_certificate', { required: 'GST Certificate is required' })}
                    />
                    {errors.gst_certificate && <div className="invalid-feedback">{errors.gst_certificate.message}</div>}
                </div>

                {/* Udyog Aadhaar Registration */}
                <div className="form-group mb-3">
                    <label>Udyog Aadhaar Registration (PNG, JPEG, PDF)</label>
                    <input
                        type="file"
                        className={`form-control ${errors.udyog_aadhaar_registeration ? 'is-invalid' : ''}`}
                        {...register('udyog_aadhaar_registeration', { required: 'Udyog Aadhaar Registration is required' })}
                    />
                    {errors.udyog_aadhaar_registeration && <div className="invalid-feedback">{errors.udyog_aadhaar_registeration.message}</div>}
                </div>

                {/* Business License */}
                <div className="form-group mb-3">
                    <label>Business License (PNG, JPEG, PDF)</label>
                    <input
                        type="file"
                        className={`form-control ${errors.business_license ? 'is-invalid' : ''}`}
                        {...register('business_license', { required: 'Business License is required' })}
                    />
                    {errors.business_license && <div className="invalid-feedback">{errors.business_license.message}</div>}
                </div>

                {/* Business Plan or Proposal */}
                <div className="form-group mb-3">
                    <label>Business Plan or Proposal (PNG, JPEG, PDF)</label>
                    <input
                        type="file"
                        className={`form-control ${errors.business_plan_or_proposal ? 'is-invalid' : ''}`}
                        {...register('business_plan_or_proposal', { required: 'Business Plan or Proposal is required' })}
                    />
                    {errors.business_plan_or_proposal && <div className="invalid-feedback">{errors.business_plan_or_proposal.message}</div>}
                </div>

                {/* Three Year ITR with Balance Sheet */}
                <div className="form-group mb-3">
                    <label>Three Year ITR with Balance Sheet (PNG, JPEG, PDF)</label>
                    <input
                        type="file"
                        className={`form-control ${errors.three_year_itr_with_balance_sheet ? 'is-invalid' : ''}`}
                        {...register('three_year_itr_with_balance_sheet', { required: 'Three Year ITR with Balance Sheet is required' })}
                    />
                    {errors.three_year_itr_with_balance_sheet && <div className="invalid-feedback">{errors.three_year_itr_with_balance_sheet.message}</div>}
                </div>

                {/* Submit Button */}
                <div className="d-grid gap-2">
                    <button type="submit" className="btn btn-primary btn-block">Upload Documents</button>
                </div>
            </form>

            {/* Status message */}
            {statusMessage && <div className="alert mt-4 alert-info">{statusMessage}</div>}
        </div>
    );
}

export default DocumentUpload;