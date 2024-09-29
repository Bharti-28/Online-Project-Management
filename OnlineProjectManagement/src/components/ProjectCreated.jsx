import axios from "axios";
import React, { useEffect, useState } from "react";

const ProjectCreated = () => {
  const [createproject, setCreateProject] = useState({
    projecttheme: "",
    reason: "",
    type: "",
    division: "",
    category: "",
    priority: "",
    startdate: "",
    enddate: "",
    location: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post('http://localhost:3000/auth/project_created', createproject)
      .then((result) => console.log(result.data))
      .catch((err) => console.log(err));
  };

  return (
    <div className="d-flex justify-content-center align-items-center mt-3">
      <div className="p-4 rounded w-100 border">
        <h4>Create Project</h4>
        <form className="row g-1" onSubmit={handleSubmit}>
          <div className="col-4 pt-4">
            <textarea
              className="form-control rounded-2"
              placeholder="Enter project theme"
              onChange={(e) =>
                setCreateProject({
                  ...createproject,
                  projecttheme: e.target.value,
                })
              }
            />
          </div>
          <div className=" saveproject ">
            <button type="submit" className="btn btn-primary w-20">
              Save Project
            </button>
          </div>
          <div className="col-4 pt-4">
            <label className="form-label text-secondary">Reason</label>
            <input
              type="text"
              className="form-control rounded-2"
              placeholder="For Business"
              onChange={(e) =>
                setCreateProject({ ...createproject, reason: e.target.value })
              }
            />
          </div>
          <div className="col-4 pt-4">
            <label className="form-label text-secondary">Type</label>
            <input
              type="text"
              className="form-control rounded-2"
              placeholder="Internal"
              onChange={(e) =>
                setCreateProject({ ...createproject, type: e.target.value })
              }
            />
          </div>
          <div className="col-4 pt-4">
            <label className="form-label text-secondary">Division</label>
            <input
              type="text"
              className="form-control rounded-2"
              placeholder="Filters"
              onChange={(e) =>
                setCreateProject({ ...createproject, division: e.target.value })
              }
            />
          </div>
          <div className="col-4 pt-4">
            <label className="form-label text-secondary">Category</label>
            <input
              type="text"
              className="form-control rounded-2"
              placeholder="Quality A"
              onChange={(e) =>
                setCreateProject({ ...createproject, category: e.target.value })
              }
            />
          </div>
          <div className="col-4 pt-4">
            <label className="form-label text-secondary">Priority</label>
            <input
              type="text"
              className="form-control rounded-2"
              placeholder="High"
              onChange={(e) =>
                setCreateProject({ ...createproject, priority: e.target.value })
              }
            />
          </div>
          <div className="col-4 pt-4">
            <label className="form-label text-secondary">Department</label>
            <input
              type="text"
              className="form-control rounded-2"
              placeholder="Startegy"
              // onChange={(e) =>
              //   setCreateProject({
              //     ...createproject,
              //     startdate: e.target.value,
              //   })
              // }
            />
          </div>
          <div className="col-4 pt-4">
            <label className="form-label text-secondary">
              Start date as per Project Plan
            </label>
            <input
              type="text"
              className="form-control rounded-2"
              placeholder="D Month, Yr"
              onChange={(e) =>
                setCreateProject({
                  ...createproject,
                  startdate: e.target.value,
                })
              }
            />
          </div>
          <div className="col-4 pt-4">
            <label className="form-label text-secondary">
              End date as per Project Plan
            </label>
            <input
              type="text"
              className="form-control rounded-2"
              placeholder="D Month, Yr"
              onChange={(e) =>
                setCreateProject({ ...createproject, enddate: e.target.value })
              }
            />
          </div>
          <div className="col-4 pt-4">
            <label className="form-label text-secondary">Location</label>
            <input
              type="text"
              className="form-control rounded-2"
              placeholder="Pune"
              onChange={(e) =>
                setCreateProject({ ...createproject, location: e.target.value })
              }
            />
          </div>
          <div className="status col-4 pt-4 text-secondary">
            <h6>
              Status:
              <h6 className="text-dark"> Registered</h6>
            </h6>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProjectCreated;
