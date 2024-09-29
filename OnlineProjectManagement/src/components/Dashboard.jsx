import React from 'react'
import { Link, Outlet  } from 'react-router-dom'
import "bootstrap-icons/font/bootstrap-icons.css"
import "./style.css";


const Dashboard = () => {
  return (
    <div className="container-fluid">
      <div className="row flex-nowrap">
        <div className="col-auto p-0 bg-white shadow">
          <div className="d-flex flex-column align-items-center px-4 dashboard-icons text-white min-vh-100">
            <Link
              to="/dashboard"
              className="d-flex align-items-center pb-3 mb-md-1 mt-md-3 me-md-auto text-white"
            >
              <span className="fs-5 fw-bolder d-none d-sm-inline"></span>
            </Link>
            <ul
              className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-center pb-3 mb-md-1 mt-md-3 me-md-auto text-white text-decoration-none"
              id="menu"
            >
              <li className="w-100">
                <Link
                  to="/dashboard"
                  className="nav-link text-white px-0 align-middle"
                >
                  <i className="fs-2  i bi-speedometer2 ms-2"></i>
                  {/* <span className="ms-2 d-none d-sm-inline">Dashboard</span> */}
                </Link>
              </li>
              <li className="w-100">
                <Link
                  to="/dashboard/projectlist"
                  className="nav-link text-white px-0 align-middle"
                >
                  <i className="fs-2 i bi-list ms-2"></i>
                  {/* <span className="ms-2 d-none d-sm-inline">Project List</span> */}
                </Link>
              </li>
              <li className="w-100">
                <Link
                  to="/dashboard/project_created"
                  className="nav-link text-white px-0 align-middle"
                >
                  <div>
                    <i className="fs-2 i bi-plus ms-2"></i>
                  </div>
                  {/* <span className="ms-2 d-none d-sm-inline">
                    Create Project
                  </span> */}
                </Link>
              </li>
              <li className="w-100">
                <Link
                  to="/userlogin"
                  className="nav-link text-white logout px-0"
                >
                  <i className="fs-2 i bi-box-arrow-right ms-2"></i>
                  {/* <span className="ms-2 d-none d-sm-inline">Logout</span> */}
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="col">
          <div className=" header">
            <h4 className="text ms-4 pb-4 pt-4 text-white">
              Online Project Management
            </h4>
            <div className="headerlogo pb-4">.</div>
          </div>
          <Outlet />
        </div>
      </div>
    </div>
  );
}



//   {
//   return (
//     <div className="w-20">
//       <div className="row flex-nowrap">
//         <div className="col-1 px-0 shadow rounded-4 sidebar">
//           <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
//             <ul className="">
//               <ul className="">
//                 <Link
//                   to="/dashboard"
//                   className="nav-link text white px-0 align-middle"
//                 >
//                   <i className="fs-4 bi-speedometer2 ms-2 icon"></i>
//                 </Link>
//               </ul>
//               <ul className="">
//                 <Link
//                   to="/dashboard/projectlist"
//                   className="nav-link text white px-0 align-middle"
//                 >
//                   <i className="fs-4 bi-list ms-2 icon"></i>
//                 </Link>
//               </ul>
//               <ul className="w-100">
//                 <Link
//                   to="/dashboard/createproject"
//                   className="nav-link text white px-0 align-middle"
//                 >
//                   <i className="fs-4 bi-plus ms-2 icon"></i>
//                 </Link>
//               </ul>
//               <ul className="w-100">
//                 <Link
//                   to="/dashboard"
//                   className="nav-link text white px-0 align-middle"
//                 >
//                   <i className="fs-4 bi-box-arrow-right ms-2 icon"></i>
//                 </Link>
//               </ul>
//             </ul>
//           </div>
//         </div>
//         <div className="col p-0 m-0">
//           <div className="p-2 d-flex justify-content-center title">
//             <h4 className="projectname">Online Project Management</h4>
//           </div>
//           <Outlet />
//         </div>
//       </div>
//     </div>
//   );
// }

export default Dashboard