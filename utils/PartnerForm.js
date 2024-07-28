import React, { useState } from 'react';
import axios from 'axios';

const PartnerForm = ({ subject }) => {
  const [formData, setFormData] = useState({
    firstname: '',
    contactNo: '',
    email: '',
    resume: '',
  });

  const [errors, setErrors] = useState({});
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState(false);
  const [formVisible, setFormVisible] = useState(true);
  const [selectedVessel, setSelectedVessel] = useState('');
  const [newPosition, setNewPosition] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const jobType = [
    { id: '1', name: 'Part Time' },
    { id: '2', name: 'Full Time' },
  ];

  const applying = [
    { id: '1', position: 'Project A' },
    { id: '2', position: 'Project B' },
    { id: '3', position: 'Project C' },
  ];

  const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
  const notAllowedDomains = ['test.com', 'sample.com', 'example.com', 'testing.com'];

  const customErrors = {
    email: 'Please enter a valid email address',
    emailDomain: 'This email domain is not allowed',
    contactNo: 'Please enter only numbers.',
    firstname: 'Please enter your name',
    contactNoEmpty: 'Please enter your mobile number',
    emailEmpty: 'Please enter your email',
  };

  const isValidEmail = (email) => {
    const [, domain] = email.split('@');
    return notAllowedDomains.includes(domain);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    const newErrors = { ...errors };

    if (name === 'contactNo') {
      if (!/^\d+$/.test(value)) {
        newErrors.contactNo = customErrors.contactNo;
      } else {
        delete newErrors.contactNo;
      }
      if (!value) {
        newErrors.contactNo = customErrors.contactNoEmpty;
      } else {
        delete newErrors.contactNo;
      }
    } else if (name === 'email') {
      if (!emailRegex.test(value)) {
        newErrors.email = customErrors.email;
      } else if (isValidEmail(value)) {
        newErrors.email = customErrors.emailDomain;
      } else {
        delete newErrors.email;
      }
      if (!value) {
        newErrors.email = customErrors.emailEmpty;
      } else {
        delete newErrors.email;
      }
    } else if (name === 'firstname') {
      if (value.length < 10 || value.length > 15) {
        newErrors.firstname = customErrors.firstname;
      } else {
        delete newErrors.firstname;
      }
      if (!value) {
        newErrors.firstname = customErrors.firstname;
      } else {
        delete newErrors.firstname;
      }
    } else {
      delete newErrors[name];
    }

    setErrors(newErrors);
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Check for empty fields before submission
    const newErrors = { ...errors };
    if (!formData.firstname) {
      newErrors.firstname = customErrors.firstname;
    }
    if (!formData.contactNo) {
      newErrors.contactNo = customErrors.contactNoEmpty;
    }
    if (!formData.email) {
      newErrors.email = customErrors.emailEmpty;
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setIsSubmitting(false);
      return;
    }

    try {
      const formDataToSend = new FormData();
      for (const key in formData) {
        formDataToSend.append(key, formData[key]);
      }
      formDataToSend.append('jobtype', selectedVessel);
      formDataToSend.append('applyingfor', newPosition);

      const response = await axios.post(
        'https://beta.upfront.global/wp-json/contact-form-7/v1/contact-forms/157/feedback',
        formDataToSend,
        { headers: { 'Content-Type': 'multipart/form-data' } }
      );

      if (response.data.status === 'mail_sent') {
        setFormVisible(false);
        setSuccessMessage(true);
      } else if (response.data.status === 'validation_failed') {
        const fieldErrors = {};
        response.data.invalid_fields.forEach((field) => {
          fieldErrors[field.field] = field.message;
        });
        setErrors(fieldErrors);
      } else {
        setError('An error occurred. Please try again.');
      }
    } catch (err) {
      setError('An error occurred. Please try again.');
    }

    setIsSubmitting(false);
  };

  return (
    <>
      <div className="form-bg mb-5 bg-[#4A4A4A] lg:w-1/2 w-full container">
        {formVisible ? (
          <form onSubmit={handleSubmit} encType="multipart/form-data" className="px-5 py-2 gap-4">
            <p className='text-white text-sm contact-text'>All fileds are mandatory<span className='text-red-600'>*</span></p>
            <div className="mb-3 border mt-">
              <input
                name="firstname"
                className={`form-control ${errors.firstname ? 'is-invalid' : ''} w-full p-2`}
                placeholder="Enter Name"
                value={formData.firstname}
                onChange={handleChange}
                // minLength={10}
                maxLength={20}
              />
              {errors.firstname && <div className="invalid-feedback text-red-500">{errors.firstname}</div>}
            </div>
            <div className="mb-3 col-span-3 md:col-span-1">
              <input
                name="contactNo"
                maxLength="10"
                className={`form-control ${errors.contactNo ? 'is-invalid' : ''} w-full p-2`}
                placeholder="Contact No."
                value={formData.contactNo}
                onChange={handleChange}
              />
              {errors.contactNo && <div className="invalid-feedback text-red-500">{errors.contactNo}</div>}
            </div>

            <div className="mb-3 border">
              <input
                type="email"
                name="email"
                className={`form-control ${errors.email ? 'is-invalid' : ''} w-full p-2 border-0`}
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
              />
              {errors.email && <div className="invalid-feedback text-red-500">{errors.email}</div>}
            </div>

            <div className="mb-3 border">
              <input
                type="text"
                name="jobType"
                className={`form-control ${errors.jobType ? 'is-invalid' : ''} w-full p-2 border-0`}
                placeholder="Organisation"
                value={formData.jobType}
                onChange={handleChange}
              />
              {errors.jobType && <div className="invalid-feedback text-red-500">{errors.jobType}</div>}
            </div>

            <div className="mb-3">
              <textarea
                name="position"
                className={`form-control ${errors.position ? 'is-invalid' : ''} w-full p-2 border-0`}
                placeholder="Message"
                rows={4}
                value={formData.position}
                onChange={handleChange}
              />
              {errors.position && <div className="invalid-feedback text-red-500">{errors.position}</div>}
            </div>

            <button
              type="submit"
              className="focus:outline-none w-44 rounded-sm text-white bg-red-500 hover:bg-red-600 font-normal text-md px-2 py-2 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900 p-2"
              disabled={isSubmitting}
            >
              Submit
            </button>
          </form>
        ) : (
          <div className="mt-5 text-center mb-5 p-5">
            <h3 className="fs-4 text-white">Thank you for your interest.</h3>
            <h3 className="fs-4 text-white">We will get in touch with you as soon as possible.</h3>
          </div>
        )}
      </div>
    </>
  );
};

export default PartnerForm;
