// import React, { useState } from "react";
// import axios from "axios";

// const ContactForm = () => {
//   const [fullName, setFullName] = useState("");
//   const [mobile, setMobile] = useState("");
//   const [email, setEmail] = useState("");
//   const [jobType, setJobType] = useState("");
//   const [applyingFor, setApplyingFor] = useState("");
//   const [resume, setResume] = useState(null);
//   const [error, setError] = useState({});
//   const [success, setSuccess] = useState("");
//   const [isSubmitting, setIsSubmitting] = useState(false);

//   const handleChange = (e) => {
//     const { name, value, files } = e.target;
//     setError((prev) => ({ ...prev, [name]: "" })); // Clear individual field error on change
//     switch (name) {
//       case "fullName":
//         setFullName(value);
//         break;
//       case "mobileNumber":
//         setMobile(value);
//         break;
//       case "email":
//         setEmail(value);
//         break;
//       case "jobType":
//         setJobType(value);
//         break;
//       case "applyingFor":
//         setApplyingFor(value);
//         break;
//       case "resume":
//         setResume(files[0]);
//         break;
//       default:
//         break;
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const errors = {};
//     if (!fullName) errors.fullName = "Full Name is required";
//     if (!mobile) errors.mobileNumber = "Mobile Number is required";
//     if (!email) errors.email = "Email is required";
//     if (!jobType) errors.jobType = "Job Type is required";
//     if (!applyingFor) errors.applyingFor = "Applying For is required";
//     if (!resume) errors.resume = "Resume is required";

//     if (Object.keys(errors).length > 0) {
//       setError(errors);
//       return;
//     }

//     setError({});
//     setIsSubmitting(true);

//     const formData = new FormData();
//     formData.append("fullName", fullName);
//     formData.append("mobileNumber", mobile);
//     formData.append("email", email);
//     formData.append("jobType", jobType);
//     formData.append("applyingFor", applyingFor);
//     formData.append("resume", resume);

//     try {
//       const response = await axios.post(
//         `${server.SERVER_FROM}contact-form-7/v1/Contact-form/102/feedback`,
//         formData,
//         {
//           headers: {
//             "Content-Type": "multipart/form-data",
//           },
//         }
//       );

//       if (response.status === 200) {
//         setSuccess("Thank you for submitting!");
//         // Clear form fields
//         setFullName("");
//         setMobile("");
//         setEmail("");
//         setJobType("");
//         setApplyingFor("");
//         setResume(null);
//       } else {
//         setError({
//           form: "Failed to submit the form. Please try again later.",
//         });
//       }
//     } catch (error) {
//       setError({
//         form: "Failed to submit the form. Please try again later.",
//       });
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   return (
//     <>
    //   <div className="container mx-auto px-4">
    //     <div className="bg-[#4A4A4A] py-4 px-6 mt-5 rounded-lg">
    //       <div className="mt-6 text-center">
    //         <p className="text-white">
    //           If you would like to explore an opportunity to work with Upfront,
    //         </p>
    //         <p className="text-white">please fill up this form and submit!</p>

    //         <div className="mt-8 p-4">
    //           <form
    //             onSubmit={handleSubmit}
    //             className="grid grid-cols-1 gap-4 md:grid-cols-3"
    //           >
    //             <div className="mb-3">
    //               <input
    //                 type="text"
    //                 className={`form-input w-full border ${
    //                   error.fullName ? "border-red-500" : "border-gray-500"
    //                 } px-3 py-2`}
    //                 id="fullName"
    //                 placeholder="*Full Name"
    //                 name="fullName"
    //                 value={fullName}
    //                 onChange={handleChange}
    //               />
    //               {error.fullName && (
    //                 <p className="text-red-500">{error.fullName}</p>
    //               )}
    //             </div>
    //             <div className="mb-3">
    //               <input
    //                 type="tel"
    //                 className={`form-input w-full border ${
    //                   error.mobileNumber ? "border-red-500" : "border-gray-500"
    //                 } px-3 py-2`}
    //                 id="mobile"
    //                 placeholder="*Mobile Number"
    //                 name="mobileNumber"
    //                 value={mobile}
    //                 onChange={handleChange}
    //               />
    //               {error.mobileNumber && (
    //                 <p className="text-red-500">{error.mobileNumber}</p>
    //               )}
    //             </div>
    //             <div className="mb-3">
    //               <input
    //                 type="email"
    //                 className={`form-input w-full border ${
    //                   error.email ? "border-red-500" : "border-gray-500"
    //                 } px-3 py-2`}
    //                 id="email"
    //                 placeholder="*Email"
    //                 name="email"
    //                 value={email}
    //                 onChange={handleChange}
    //               />
    //               {error.email && (
    //                 <p className="text-red-500">{error.email}</p>
    //               )}
    //             </div>
    //             <div className="mb-3">
    //               <select
    //                 className={`form-select w-full border ${
    //                   error.jobType ? "border-red-500" : "border-gray-500"
    //                 } text-gray-500 px-3 py-2`}
    //                 id="jobtype"
    //                 name="jobType"
    //                 value={jobType}
    //                 onChange={handleChange}
    //               >
    //                 <option value="">*Job Type</option>
    //                 <option value="Part-Time">Part-Time</option>
    //                 <option value="Full-Time">Full-Time</option>
    //               </select>
    //               {error.jobType && (
    //                 <p className="text-red-500">{error.jobType}</p>
    //               )}
    //             </div>
    //             <div className="mb-3">
    //               <select
    //                 className={`form-select w-full border ${
    //                   error.applyingFor ? "border-red-500" : "border-gray-500"
    //                 } text-gray-500 px-3 py-2`}
    //                 id="applyfor"
    //                 name="applyingFor"
    //                 value={applyingFor}
    //                 onChange={handleChange}
    //               >
    //                 <option value="">*Applying For</option>
    //                 <option value="Project A">Project A</option>
    //                 <option value="Project B">Project B</option>
    //                 <option value="Project C">Project C</option>
    //               </select>
    //               {error.applyingFor && (
    //                 <p className="text-red-500">{error.applyingFor}</p>
    //               )}
    //             </div>
    //             <div className="mb-3">
    //               <input
    //                 type="file"
    //                 className={`form-input w-full text-gray-500 bg-white border ${
    //                   error.resume ? "border-red-500" : "border-gray-500"
    //                 } px-3`}
    //                 id="resume"
    //                 name="resume"
    //                 onChange={handleChange}
    //               />
    //               {error.resume && (
    //                 <p className="text-red-500">{error.resume}</p>
    //               )}
    //             </div>
    //             <div className="col-span-full text-center">
    //               {isSubmitting && (
    //                 <p className="text-gray-500">Submitting...</p>
    //               )}
    //               {success && <p className="text-green-500">{success}</p>}
    //               {error.form && <p className="text-red-500">{error.form}</p>}
    //               <button
    //                 type="submit"
    //                 className="focus:outline-none w-full text-white bg-red-500 hover:bg-red-600 font-normal text-md px-4 py-2"
    //                 disabled={isSubmitting}
    //               >
    //                 Submit
    //               </button>
    //             </div>
    //           </form>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
//     </>
//   );
// };

// export default ContactForm;





// import { useState } from 'react';
// import axios from 'axios';
// import { Button, Input, Checkbox } from 'flowbite-react'; // Import components from Flowbite React
// // import { RotatingLines } from 'react-loading-icons';

// const ContactForm    = ({ customTitle, pdfFile }) => {
//   const [formData, setFormData] = useState({
//     firstName: '',
//     mobile: '',
//     businessEmail: '',
//     jobtype: '',
//     applyfor: '',
//     subscribe: false,
//     title: customTitle,
//     pdf: pdfFile,
//   });
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [error, setError] = useState('');
//   const [successMessage, setSuccessMessage] = useState('');
//   const [formVisible, setFormVisible] = useState(true);

//   const handleChange = (e) => {
//     const { name, value, type, checked } = e.target;
//     setFormData({
//       ...formData,
//       [name]: type === 'checkbox' ? checked : value,
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setIsSubmitting(true);

//     const { firstName, mobile, businessEmail, jobtype, applyfor } = formData;
//     if (!firstName.trim()) {
//       setError('Please enter a full name.');
//       setIsSubmitting(false);
//       return;
//     }
//     if (!mobile.trim()) {
//       setError('Please enter a valid phone number.');
//       setIsSubmitting(false);
//       return;
//     }
//     if (!businessEmail.trim()) {
//       setError('Please enter an email.');
//       setIsSubmitting(false);
//       return;
//     }
//     if (!jobtype.trim()) {
//       setError('Please enter a job type.');
//       setIsSubmitting(false);
//       return;
//     }
//     if (!applyfor.trim()) {
//       setError('Please enter the field.');
//       setIsSubmitting(false);
//       return;
//     }

//     try {
//       const response = await axios.post(
//         `${server.SERVER_FROM}contact-form-7/v1/contact-forms/102/feedback`,
//         formData,
//         {
//           headers: {
//             'Content-Type': 'multipart/form-data',
//           },
//         }
//       );

//       if (response.data.status === 'mail_sent') {
//         setFormVisible(false);
//         setSuccessMessage('Thank you for your submission!');
//       } else {
//         setError('An error occurred. Please try again.');
//       }
//     } catch (err) {
//       setError('An error occurred. Please try again.');
//     }

//     setIsSubmitting(false);
//   };

//   return (
//     <div className="form-bg">
//       {formVisible ? (
//         <form onSubmit={handleSubmit} encType="multipart/form-data">
//           <div className="mb-3">
//             <Input
//               type="text"
//               name="firstName"
//               className={error.includes('full name') ? 'is-invalid' : ''}
//               id="fullName"
//               placeholder="Full Name"
//               value={formData.firstName}
//               onChange={handleChange}
//             />
//             <Input
//               type="text"
//               name="mobile"
//               className={error.includes('phone number') ? 'is-invalid' : ''}
//               id="mobile"
//               placeholder="Mobile Number"
//               value={formData.mobile}
//               onChange={handleChange}
//             />
//             <Input
//               type="email"
//               name="businessEmail"
//               className={error.includes('email') ? 'is-invalid' : ''}
//               id="businessEmail"
//               placeholder="Business Email"
//               value={formData.businessEmail}
//               onChange={handleChange}
//             />
//           </div>
//           <div className="mb-3">
//             <Input
//               type="text"
//               name="jobtype"
//               className={error.includes('job type') ? 'is-invalid' : ''}
//               id="jobtype"
//               placeholder="Job Type"
//               value={formData.jobtype}
//               onChange={handleChange}
//             />
//             <Input
//               type="text"
//               name="applyfor"
//               className={error.includes('field') ? 'is-invalid' : ''}
//               id="applyfor"
//               placeholder="Applying For"
//               value={formData.applyfor}
//               onChange={handleChange}
//             />
//             <Checkbox
//               id="subscribe"
//               label="To subscribe and receive future communication from SunTec, check the box"
//               checked={formData.subscribe}
//               onChange={handleChange}
//             />
//           </div>
//           <div>
//             <Button type="submit" className="btn b-btn text-white w-100" disabled={isSubmitting}>
//               Submit
//               {isSubmitting && (
//                 <RotatingLines
//                   strokeColor="white"
//                   strokeWidth="3"
//                   animationDuration="1"
//                   width="20"
//                   visible={true}
//                 />
//               )}
//             </Button>
//           </div>
//           {error && <p className="text-danger mt-3">{error}</p>}
//         </form>
//       ) : (
//         <div>
//           <h2>Thank You</h2>
//         </div>
//       )}
//     </div>
//   );
// };

// export default ContactForm;


'use client'
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Col, Row, Form } from 'react-bootstrap';
import { useRouter } from 'next/navigation';
import ConfigData from '../config'
// import { State, City } from 'country-state-city';


const vessel =[

        { id: '1', vessel_name: 'Part Time' },
        { id: '2', vessel_name: 'Full Time' },
    

]


const ContactForm = ({ subject }) => {
  const [yourState, setState] = useState(null);
  const [yourCity, setCity] = useState(null);
  const [file, setFile] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({});
  const [fileErrors, setFileErrors] = useState(false);
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState(false);
  const [formVisible, setFormVisible] = useState(true);
  const [selectCountry, setSelectCountry] = useState('IN');
  const [selectState, setSelectState] = useState('KA');
  const [hideSubmitButton, setHideSubmitButton] = useState(true);
  const [selectedVessel, setSelectedVessel] = useState('');
  const [positions, setPositions] = useState([]);
  const [newPosition, setPosition] = useState('');



  const vessels = [
    { id: '1', vessel_name: 'Project A' },
    { id: '2', vessel_name: 'Project B' },
    { id: '3', vessel_name: 'Project C' },
  ];

  const [formData, setFormData] = useState({
    firstname: '',
    contactNo: '',
    email: '',
    vessel: '',
    position: '',
    resume: '',

  })


  const handleStateChange = (event) => {
    const selectedValue = event.target.value;
    const selectedLabel = event.target.options[event.target.selectedIndex].text;
    setSelectState(selectedValue);
    setState(selectedLabel);
  };

  const handleCityChange = (event) => {
    const selectedLabel = event.target.options[event.target.selectedIndex].text;
    setCity(selectedLabel);
  };

  const handleVesselChange = (event) => {
    const vesselId = event.target.value;
    const selectedLabel = event.target.options[event.target.selectedIndex].text;
    setSelectedVessel(selectedLabel);
    switch (vesselId) {
      case '1':
        setPositions(['Chief Officer', 'Chief Engineer']);
        break;
      case '2':
        setPositions(['NCV Master', 'NCV Mate']);
        break;
      case '3':
        setPositions(['Chief Officer', '2nd Officer', '3rd Officer', '4th Engineer', 'Oiler']);
        break;
      case '4':
        setPositions(['Master', 'Chief Officer', '2nd Officer', '3rd Officer', '2nd Engineer', '3rd Engineer', '4th Engineer', 'AB (Able Bodied Seaman)']);
        break;
      case '5':
        setPositions(['Chief Officer', '2nd Officer', '3rd Officer', 'Chief Engineer', '2nd Engineer', '3rd Engineer', '4th Engineer', 'Junior Engineer', 'Electrical officers', 'ABs (Able Bodied Seaman)', 'OS (Ordinary Seaman)']);
        break;
      default:
        setPositions([]);
    }
    setPosition('');
  };

  const handlePositionChange = (event) => {
    setPosition(event.target.value);
  };

 

  const isBlank = (str) => !str.trim();
  const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
  const notAllowedDomains = ['test.com', 'sample.com', 'example.com', 'testing.com'];

  const isValidEmail = (email) => {
    const domain = email.split('@')[1];
    return !notAllowedDomains.includes(domain);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    if (name === 'contactNo' && !/^\d+$/.test(value)) {
      setErrors(prevErrors => ({ ...prevErrors, contactNo: 'Please enter only numbers.' }));
      return;
    } else {
      setErrors(prevErrors => ({ ...prevErrors, contactNo: '' }));
    }

    if (name === 'email') {
      if (!emailRegex.test(value)) {
        setErrors(prevErrors => ({ ...prevErrors, email: 'Please enter a valid email address.' }));
      } else if (!isValidEmail(value)) {
        setErrors(prevErrors => ({ ...prevErrors, email: 'This email domain is not allowed.' }));
      } else {
        setErrors(prevErrors => ({ ...prevErrors, email: '' }));
      }
    }

    setFormData(prevData => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      const allowedExtensions = ['pdf', 'doc', 'docx', 'rtf', 'txt'];
      const fileExtension = selectedFile.name.split('.').pop().toLowerCase();
      if (allowedExtensions.includes(fileExtension)) {
        setFile(selectedFile);
        setErrors(prevErrors => ({ ...prevErrors, resume: '' }));
        setHideSubmitButton(false);
      } else {
        setFile(null);
        setErrors(prevErrors => ({ ...prevErrors, resume: 'Invalid file type. Allowed types are PDF, DOC, DOCX, RTF, and TXT.' }));
        setHideSubmitButton(true);
      }
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);

    const formDataToSend = new FormData();
    for (const key in formData) {
      formDataToSend.append(key, formData[key]);
    }
    formDataToSend.append('state', yourState);
    formDataToSend.append('city', yourCity);
    formDataToSend.append('vessel', selectedVessel);
    formDataToSend.append('position', newPosition);

    if (file) {
      formDataToSend.append('resume', file);
    } else {
      setFileErrors(true);
      setHideSubmitButton(true);
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await axios.post(`${ConfigData.apiDomainUrl}wp-json/contact-form-7/v1/contact-forms/102/feedback`, formDataToSend, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      if (response.data.status === 'mail_sent') {
        setFormVisible(false);
        setSuccessMessage(true);
      } else if (response.data.status === 'validation_failed') {
        const fieldErrors = {};
        response.data.invalid_fields.forEach(field => {
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
      {successMessage ? '' : (<small className="text-gray-700">All fields are mandatory</small>)}
      {successMessage ? '' : (<h3 className="text-lg font-semibold">Submit a CV/Resume:</h3>)}
      <div className="bg-gray-100 p-16 rounded-lg mb-5">
        {formVisible ? (
          <form onSubmit={handleSubmit} encType="multipart/form-data" className='w-36'>
            <div className="grid grid-cols-1 gap-6">
              <div>
                <input type="text"
                  name="firstname"
                  id="firstName"
                  className={`form-input mt-1 block w-full ${errors && errors.firstname ? 'border-red-500' : 'border-gray-300'}`}
                  placeholder="Full Name"
                  value={formData.name}
                  onChange={handleChange}
                  maxLength="6"
                />
                {errors && errors.firstname && <div className="text-red-500 text-sm">{errors.firstname}</div>}
              </div>
            </div>
  
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
              <div>
                <input type="phone"
                  name="contactNo"
                  id="mobile"
                  maxLength="10"
                  className={`form-input mt-1 block w-full p-3 ${errors && errors.contactNo ? 'border-red-500' : 'border-gray-300'}`}
                  placeholder="Mobile Number"
                  value={formData.contactNo}
                  onChange={handleChange} />
                {errors && errors.contactNo && <div className="text-red-500 text-sm">{errors.contactNo}</div>}
              </div>
  
              <div>
                <input type="email" name="email"
                id="email" 
                className={`form-input mt-1 block w-full ${errors && errors.email ? 'border-red-500' : 'border-gray-300'}`}
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange} />
                {errors && errors.email && <div className="text-red-500 text-sm">{errors.email}</div>}
              </div>
            </div>
  
           
  
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
              <div>
                <select
                  className={`form-select mt-1 block w-full ${errors && errors.vessel ? 'border-red-500' : 'border-gray-300'}`}
                  id="jobtype"
                  name="vessel"
                  onChange={handleVesselChange}>
                  <option value="">Job Type</option>
                  {vessel.map((option, index) => (
                    <option key={index} value={option.id}>
                      {option.vessel_name}
                    </option>
                  ))}
                </select>
                {errors && errors.vessel && <div className="text-red-500 text-sm">{errors.vessel}</div>}
              </div>
  
              <div>
                <select
                  className={`form-select mt-1 block w-full ${errors && errors.vessel ? 'border-red-500' : 'border-gray-300'}`}
                  id="applyfor"
                  name="vessel"
                  onChange={handleVesselChange}>
                  <option value="">Applying For </option>
                  {vessels.map((option, index) => (
                    <option key={index} value={option.id}>
                      {option.vessel_name}
                    </option>
                  ))}
                </select>
                {errors && errors.vessel && <div className="text-red-500 text-sm">{errors.vessel}</div>}
              </div>
            </div>
  
            <div className="grid grid-cols-1 gap-6 mt-4">
              <div className="relative">
                <input type="file" name="resume" id="resume" className={`form-input mt-1 block w-full ${errors && errors.resume ? 'border-red-500' : 'border-gray-300'} ${fileErrors ? 'border-red-500' : 'border-gray-300'}`} onChange={handleFileChange} aria-describedby="inputGroupFileAddon04" aria-label="Upload" />
                <p className="text-gray-500 text-xs mt-1">Complete your job application by uploading your resume or CV. Upload either DOC, DOCX, PDF, RTF or TXT file types, 4 MB max.</p>
                {errors && errors.resume && <div className="text-red-500 text-sm">{errors.resume}</div>}
                {fileErrors ? <div className="text-red-500 text-sm">Please upload the resume. (doc, docx, pdf)</div> : ''}
              </div>
            </div>
  
            <div className="grid grid-cols-1 gap-6 mt-4">
              <div>
                <button type="submit" className={`btn btn-primary register ${hideSubmitButton ? 'opacity-50 cursor-not-allowed' : ''}`} disabled={isSubmitting}>
                  Submit
                  {/* {isSubmitting && (
                    <RotatingLines strokeColor="white" strokeWidth="3" animationDuration="1" width="20" visible={true} />
                  )} */}
                </button>
              </div>
            </div>
          </form>
        ) : (
          <div className="mt-5 text-center mb-5">
            <h3 className="text-lg font-semibold">Thank you for your interest in Nautilus Shipping.</h3>
            <h3 className="text-lg font-semibold">We will get in touch with you as soon as possible.</h3>
          </div>
        )}
      </div>
    </>
  );}
  

export default ContactForm;