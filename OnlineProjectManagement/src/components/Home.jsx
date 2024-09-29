import React from 'react'

const Home = () => {
  return (
    <div>
      <div className="p-3 pt-2 d-flex justify-content-around">
        <div className="px-4 pt-4 pb-4 m-4 border rounded-2 shadow-sm w-25">
          <div className="text-start ">
            <h6 className="text-secondary">Total Projects</h6>
          </div>
          <hr />
          <div>
            <h1 className="d-flex ">
              8
            </h1>
          </div>
        </div>
        <div className="px-4 pt-4 pb-4 m-4 border rounded-2 shadow-sm w-25">
          <div className="text-start">
            <h6 className="text-secondary">Closed</h6>
          </div>
          <hr />
          <div>
            <h1 className="d-flex ">
              2
            </h1>
          </div>
        </div>
        <div className="px-4 pt-4 pb-4 m-4 border rounded-2 shadow-sm w-25">
          <div className="text-start ">
            <h6 className="text-secondary">Running</h6>
          </div>
          <hr />
          <div>
            <h1 className="d-flex">
              3
            </h1>
          </div>
        </div>
        <div className="px-4 pt-4 pb-4 m-4 border rounded-2 shadow-sm w-25">
          <div className="text-start">
            <h6 className="text-secondary">Closure Delay</h6>
          </div>
          <hr />
          <div>
            <h1 className="d-flex ">
              2
            </h1>
          </div>
        </div>
        <div className="px-4 pt-4 pb-4 m-4 border rounded-2 shadow-sm w-25">
          <div className="text-start ">
            <h6 className="text-secondary">Cancelled</h6>
          </div>
          <hr />
          <div>
            <h1 className="d-flex">
              3
            </h1>
          </div>
        </div>
      </div>
      <div className="ms-4 ps-2 shadow graph">
        <h5 className="ms-4 ps-2 ">Department wise - Total VS Closed</h5>
      </div>
    </div>
  );
}


export default Home