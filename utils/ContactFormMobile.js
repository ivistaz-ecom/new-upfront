// import React, { useState } from "react";

// const ContactForm = () => {
//   const [fullName, setFullName] = useState("");
//   const [mobile, setMobile] = useState("");
//   const [email, setEmail] = useState("");
//   const [jobType, setJobType] = useState("");
//   const [applyingFor, setApplyingFor] = useState("");
//   const [resume, setResume] = useState(null);
//   const [error, setError] = useState({});
//   const [success, setSuccess] = useState("");

//   const handleChange = (e) => {
//     const { name, value, files } = e.target;
//     setError((prev) => ({ ...prev, [name]: "" })); // Clear individual field error on change
//     switch (name) {
//       case "fullName":
//         setFullName(value);
//         break;
//       case "mobile":
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

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const errors = {};
//     if (!fullName) errors.fullName = "Full Name is required";
//     if (!mobile) errors.mobile = "Mobile Number is required";
//     if (!email) errors.email = "Email is required";
//     if (!jobType) errors.jobType = "Job Type is required";
//     if (!applyingFor) errors.applyingFor = "Applying For is required";
//     if (!resume) errors.resume = "Resume is required";

//     if (Object.keys(errors).length > 0) {
//       setError(errors);
//       return;
//     }

//     setError({});
//     setSuccess("Thank you for submitting!");

//     // Submit form logic here

//     // Clear form fields
//     setFullName("");
//     setMobile("");
//     setEmail("");
//     setJobType("");
//     setApplyingFor("");
//     setResume(null);
//   };

//   return (
//     <div className="bg-[#4A4A4A] py-1 px-5 mt-5">
//       <div className="mt-10">
//         <p className="text-white">
//           If you would like to explore an opportunity to work with Upfront,
//         </p>
//         <p className="text-white">please fill up this form and submit</p>

//         <div className="mt-5 p-5">
//           <form onSubmit={handleSubmit}>
//             <div className="flex flex-wrap gap-4 justify-center">
//               <div className="mb-3 w-full md:w-1/3">
//                 <input
//                   type="text"
//                   className={`form-select border w-full px-3 py-2`}
//                   id="fullName"
//                   placeholder="*Full Name"
//                   name="fullName"
//                   value={fullName}
                 
//                 />
                
//               </div>
//               <div className="mb-3 w-full md:w-1/3">
//                 <input
//                   type="tel"
//                   className={`form-select border ${
//                     error.mobile ? "border-red-500" : "border-gray-500"
//                   } w-full px-3 py-2`}
//                   id="mobile"
//                   placeholder="*Mobile Number"
//                   name="mobile"
//                   value={mobile}
//                   onChange={handleChange}
//                 />
               
//               </div>
//               <div className="mb-3 w-full md:w-1/3">
//                 <input
//                   type="email"
//                   className={`form-select border ${
//                     error.email ? "border-red-500" : "border-gray-500"
//                   } w-full px-3 py-2`}
//                   id="email"
//                   placeholder="*Email"
//                   name="email"
//                   value={email}
//                   onChange={handleChange}
//                 />
//                 {error.email && <p className="text-red-500">{error.email}</p>}
//               </div>
//               <div className="mb-3 w-full md:w-1/3">
//                 <select
//                   className={`form-select border ${
//                     error.jobType ? "border-red-500" : "border-gray-500"
//                   } text-gray-500 w-full px-3 py-2`}
//                   id="jobType"
//                   name="jobType"
//                   value={jobType}
//                   onChange={handleChange}
//                 >
//                   <option value="">*Job Type</option>
//                   <option value="Part-Time">Part-Time</option>
//                   <option value="Full-Time">Full-Time</option>
//                 </select>
//                 {error.jobType && (
//                   <p className="text-red-500">{error.jobType}</p>
//                 )}
//               </div>
//               <div className="mb-3 w-full md:w-1/3">
//                 <select
//                   className={`form-select border ${
//                     error.applyingFor ? "border-red-500" : "border-gray-500"
//                   } text-gray-500 w-full px-3 py-2`}
//                   id="applyingFor"
//                   name="applyingFor"
//                   value={applyingFor}
//                   onChange={handleChange}
//                 >
//                   <option value="">*Applying For</option>
//                   <option value="Project A">Project A</option>
//                   <option value="Project B">Project B</option>
//                   <option value="Project C">Project C</option>
//                 </select>
//                 {error.applyingFor && (
//                   <p className="text-red-500">{error.applyingFor}</p>
//                 )}
//               </div>
//               <div className="mb-3 w-full md:w-1/3">
//                 <input
//                   type="file"
//                   className={`form-select text-gray-500 bg-white w-full border ${
//                     error.resume ? "border-red-500" : "border-gray-500"
//                   } px-3`}
//                   id="resume"
//                   name="resume"
//                   onChange={handleChange}
//                 />
//                 {error.resume && <p className="text-red-500">{error.resume}</p>}
//               </div>
//             </div>
//             <div className="text-center mt-5">
//               {success && <p className="text-green-500">{success}</p>}
//               <button
//                 type="submit"
//                 className="focus:outline-none w-44 rounded-sm text-white bg-red-500 hover:bg-red-600 font-normal text-md px-2 py-2"
//               >
//                 Submit
//               </button>
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ContactForm;
<div className="bg-[#4A4A4A] py-1 px-5 mt-5 ">
              <div className=" mt-10 ">
                <p className="text-white ">
                  If you would like to explore an opportunity to work with
                  Upfront,
                </p>
                <p className="text-white">
                  please fill up this form and submit
                </p>

                <div className="mt-5 p-5">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="mb-3">
                      <input
                        type="text"
                        className="form-select border border-gray-500 lg:w-full px-3 py-2"
                        id="*firstName"
                        placeholder="*First Name"
                        name="*firstName"
                        required
                      />
                    </div>
                    <div className="mb-3 col-span-3 md:col-span-1" >
                      <input
                        type="tel"
                        className="form-select border border-gray-500 lg:w-full px-3 py-2"
                        id="phone"
                        placeholder="*Mobile Number"
                        name="phone"
                        required
                      />
                    </div>

                    <div className="mb-3">
                      <input
                        type="email"
                        className="form-select border border-gray-500 lg:w-full px-3 py-2"
                        id="email*"
                        placeholder="*Email"
                        name="email"
                        required
                      />
                    </div>

                    <div className="mb-3 col-span-3 md:col-span-1">
                      <select
                        className="form-select border border-gray-500 text-gray-500 lg:w-full px-3 py-2"
                        id="jobType"
                        name="jobType"
                        required
                      >
                        <option value="">*Job Type</option>
                        <option value="Part-Time">Part-Time</option>
                        <option value="Full-Time">Full-Time</option>
                      </select>
                    </div>

                    <div className="mb-3">
                      <select
                        className="form-select border border-gray-500 text-gray-500  lg:w-full px-3 py-2"
                        id="Applying For"
                        name="Applying For"
                        required
                      >
                        <option value="Project A">*Applying For</option>
                        <option value="Project A">Project A</option>
                        <option value="Project B">Project B</option>
                        <option value="Project C">Project C</option>
                      </select>
                    </div>

                    <div className="mb-3 col-span-3 md:col-span-1">
                      <input
                        type="file"
                        className="form-select text-gray-500 bg-white actual-file-input  lg:w-full border"
                        id="location"
                        placeholder="Attach Your Cv"
                        name="location"
                        required
                      />
                    </div>
                    <button
                      type="button"
                      className="focus:outline-none w-44  rounded-sm text-white bg-red-500 hover:bg-red-600  font-normal text-md px-2 py-2 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                    >
                      submit
                    </button>
                  </div>
                </div>
              </div>
            </div>