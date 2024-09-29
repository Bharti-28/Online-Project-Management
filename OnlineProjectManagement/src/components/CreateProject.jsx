import React from "react";
import { Link } from "react-router-dom";

const CreateProject = () => {
    <div className="px-5 mt-3">
        <div className="d -flex justify-content-center">
        <h4>Create Project</h4>
        </div>
        <Link to="/dashboard/project_created" className="btn btn-primary">
        Save Project 
        </Link>
    </div>
}

export default CreateProject;



// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import axios from "axios";


// const CreateProject = () => {
//     const [project, setProject] = useState({
//         projecttheme: "",
//         reason: "",
//         type: "",
//         division: "",
//         category: "",
//         priority: "",
//         department: "",
//         startdate: "",
//         enddate: "",
//         location: "",
//     })

//     const handleSubmit = (e) => {
//         e.preventDefault() 
//         axios.post('http://localhost:3000/auth/createproject', project)
//         .then(result => console.log(result.data))
//         .catch(err => console.log(err))
//     }

//   return (
//     <div className="d-flex justify-content-center align-items-center mt-3">
//       <div className="p-4 rounded w-100 border">
//         <h3 className="text-center">Create Project</h3>
//         <form className="row g-1" onSubmit={handleSubmit} >
//           <div className="col-4 pt-4">
//             <label className="form-label text-secondary">
//               Enter Project Theme
//             </label>
//             <input
//               type="textarea"
//               className="form-control rounded-2"
//               placeholder="Enter project theme"
//               onChange={(e) =>
//                 setProject({ ...project, projecttheme: e.target.value })
//               }
//             />
//           </div>
//           <div className="col-4 pt-4">
//             <label className="form-label text-secondary">
//               Reason
//             </label>
//             <input
//               type="text"
//               className="form-control rounded-2"
//               placeholder="For exa. business"
//               onChange={(e) =>
//                 setProject({ ...project, reason: e.target.value })
//               }
//             />
//           </div>
//           <div className="col-4 pt-4">
//             <label className="form-label text-secondary">
//               Type
//             </label>
//             <input
//               type="text"
//               className="form-control rounded-2"
//               placeholder="Internal"
//               onChange={(e) => setProject({ ...project, type: e.target.value })}
//             />
//           </div>
//           <div className="col-4 pt-4">
//             <label className="form-label text-secondary">
//               Division
//             </label>
//             <input
//               type="text"
//               className="form-control rounded-2"
//               placeholder=""
//               onChange={(e) =>
//                 setProject({ ...project, division: e.target.value })
//               }
//             />
//           </div>
//           <div className="col-4 pt-4">
//             <label className="form-label text-secondary">
//               Category
//             </label>
//             <input
//               type="text"
//               className="form-control rounded-2"
//               placeholder="Quality A, B.."
//               onChange={(e) =>
//                 setProject({ ...project, category: e.target.value })
//               }
//             />
//           </div>
//           <div className="col-4 pt-4">
//             <label className="form-label text-secondary">
//               Priority
//             </label>
//             <input
//               type="text"
//               className="form-control rounded-2"
//               placeholder="Priority High, Low"
//               onChange={(e) =>
//                 setProject({ ...project, priority: e.target.value })
//               }
//             />
//           </div>
//           <div className="col-4 pt-4">
//             <label className="form-label text-secondary">
//               Start date as per Project Plan
//             </label>
//             <input
//               type="text"
//               className="form-control rounded-2"
//               placeholder="DD/MM/YY"
//               onChange={(e) =>
//                 setProject({ ...project, startdate: e.target.value })
//               }
//             />
//           </div>
//           <div className="col-4 pt-4">
//             <label className="form-label text-secondary">
//               End date as per Project Plan
//             </label>
//             <input
//               type="text"
//               className="form-control rounded-2"
//               placeholder="DD/MM/YY"
//               onChange={(e) =>
//                 setProject({ ...project, enddate: e.target.value })
//               }
//             />
//           </div>
//           <div className="col-4 pt-4">
//             <label className="form-label text-secondary">
//               Location
//             </label>
//             <input
//               type="text"
//               className="form-control rounded-2"
//               placeholder="City"
//               onChange={(e) =>
//                 setProject({ ...project, location: e.target.value })
//               }
//             />
//           </div>
//           <div className=" pt-4 ">
//             <button type="submit" className="btn btn-primary w-20">
//               Save Project
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

//     {
//   return (
//     <div className='px-5 mt-5'>
//         <div className='d-flex justify-content-center'>
//             <h3>Create Project</h3>
//         </div>
//         <Link to='/dashboard/project_created' className='btn btn-primary'>Create Project</Link>
//     </div>
//   )
// }


//createproject- category for now
