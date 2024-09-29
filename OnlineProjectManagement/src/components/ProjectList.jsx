import React from 'react'
import { Link } from 'react-router-dom'


const ProjectList = () => {
  return (
    <div className="px-5 mt-3">
      <div className="d -flex justify-content-center">
        <h4>Project List</h4>
      </div>
      {/* <div>
        <h4 className="w-25">Search</h4>
        <hr />
      </div> */}
      <div>
        <table className="table">
          <thead>
            <tr>
              <th>Project Name</th>
              <th>Reason</th>
              <th>Type</th>
              <th>Division</th>
              <th>Category</th>
              <th>Priority</th>
              <th>Dept.</th>
              <th>Location</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="m-2">
                <h6>Line Filter</h6>
                <td>Jun-21, 2020 to Jan-01,2021</td>
              </td>
              <td className="m-2">Business</td>
              <td className="m-2">Internal</td>
              <td className="m-2">Compressor</td>
              <td className="m-2">Quality A</td>
              <td>High</td>
              <td>Startegy</td>
              <td>Pune</td>
              <td>Running</td>
              <td>
                <Link
                  to="/dashboard/project_created"
                  className="btn btn-primary rounded-4 btn-sm me-2"
                >
                  Start
                </Link>
                <button className="btn border-primary rounded-4 btn-sm m-2">
                  Close
                </button>
                <button className="btn border-primary rounded-4 btn-sm">
                  Cancel
                </button>
              </td>
            </tr>
            <tr>
              <td className="m-2">
                <h6>Sticker Management</h6>
                <td>Jun-01, 2021 to Jan-31,2021</td>
              </td>
              <td>Dealership</td>
              <td>External</td>
              <td>Filters</td>
              <td>Quality B</td>
              <td>Low</td>
              <td>Fianace</td>
              <td>Delhi</td>
              <td>Running</td>
              <td>
                <Link
                  to="/dashboard/project_created"
                  className="btn btn-primary rounded-4 btn-sm me-2"
                >
                  Start
                </Link>
                <button className="btn border-primary rounded-4 btn-sm m-2">
                  Close
                </button>
                <button className="btn border-primary rounded-4 btn-sm">
                  Cancel
                </button>
              </td>
            </tr>
            <tr>
              <td className="m-2">
                <h6>Pumps Connector</h6>
                <td>Feb-01,2021 to July-31,2021</td>
              </td>
              <td className="m-2">Transport</td>
              <td className="m-2">Internal</td>
              <td className="m-2">Compressor</td>
              <td className="m-2">Quality C</td>
              <td>Medium</td>
              <td>Quality</td>
              <td>Mumbai</td>
              <td>Registered</td>
              <td>
                <Link
                  to="/dashboard/project_created"
                  className="btn btn-primary rounded-4 btn-sm me-2"
                >
                  Start
                </Link>
                <button className="btn border-primary rounded-4 btn-sm m-2">
                  Close
                </button>
                <button className="btn border-primary rounded-4 btn-sm">
                  Cancel
                </button>
              </td>
            </tr>
            <tr>
              <td className="m-2">
                <h6>Wall Reflector</h6>
                <td>Mar-05,2021 to Dec-31,2021</td>
              </td>
              <td className="m-2">Business</td>
              <td className="m-2">Vendor</td>
              <td className="m-2">Pumps</td>
              <td className="m-2">Quality A</td>
              <td>High</td>
              <td>Maintenance</td>
              <td>Pune</td>
              <td>Cancelled</td>
              <td>
                <Link
                  to="/dashboard/project_created"
                  className="btn btn-primary rounded-4 btn-sm me-2"
                >
                  Start
                </Link>
                <button className="btn border-primary rounded-4 btn-sm m-2">
                  Close
                </button>
                <button className="btn border-primary rounded-4 btn-sm">
                  Cancel
                </button>
              </td>
            </tr>
            <tr>
              <td className="m-2">
                <h6>Tank Filter</h6>
                <td>Jan-01,2021 to Nov-20,2021</td>
              </td>
              <td className="m-2">Business</td>
              <td className="m-2">External </td>
              <td className="m-2">Glass</td>
              <td className="m-2">Quality A</td>
              <td>High</td>
              <td>Stores</td>
              <td>Mumbai</td>
              <td>Registered</td>
              <td>
                <Link
                  to="/dashboard/project_created"
                  className="btn btn-primary rounded-4 btn-sm me-2"
                >
                  Start
                </Link>
                <button className="btn border-primary rounded-4 btn-sm m-2">
                  Close
                </button>
                <button className="btn border-primary rounded-4 btn-sm">
                  Cancel
                </button>
              </td>
            </tr>
            <tr>
              <td className="m-2">
                <h6>Water Heater</h6>
                <td>July-01,2021 to Nov-20,2022</td>
              </td>
              <td className="m-2">Dealership</td>
              <td className="m-2">Venodr</td>
              <td className="m-2">Compressor</td>
              <td className="m-2">Quality D</td>
              <td>Low</td>
              <td>Fianance</td>
              <td>Pune</td>
              <td>Cancelled</td>
              <td>
                <Link
                  to="/dashboard/project_created"
                  className="btn btn-primary rounded-4 btn-sm me-2"
                >
                  Start
                </Link>
                <button className="btn border-primary rounded-4 btn-sm m-2">
                  Close
                </button>
                <button className="btn border-primary rounded-4 btn-sm">
                  Cancel
                </button>
              </td>
            </tr>
            <tr>
              <td className="m-2">
                <h6>Large Mixer</h6>
                <td>Feb-01,2021 to Oct-20,2021</td>
              </td>
              <td className="m-2">Transport</td>
              <td className="m-2">External</td>
              <td className="m-2">Water Heater</td>
              <td className="m-2">Quality A</td>
              <td>Low</td>
              <td>Stores</td>
              <td>Delhi</td>
              <td>Closed</td>
              <td>
                <Link
                  to="/dashboard/project_created"
                  className="btn btn-primary rounded-4 btn-sm me-2"
                >
                  Start
                </Link>
                <button className="btn border-primary rounded-4 btn-sm m-2">
                  Close
                </button>
                <button className="btn border-primary rounded-4 btn-sm">
                  Cancel
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ProjectList