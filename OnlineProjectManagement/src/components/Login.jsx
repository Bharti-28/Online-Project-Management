import React, {useState} from 'react'
import './style.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const [values, setValues] = useState({
        email: '',
        password: ''
    })
    const [error, setError] = useState(null)
    const navigate = useNavigate()
    axios.defaults.withCredentials = true;
    const handleSubmit = (event) =>{
        event.preventDefault()
        axios.post('http://localhost:3000/auth/userlogin', values)
        .then(result => {
            if(result.data.loginStatus) {
                navigate('/dashboard');
            } else {
                setError(result.data.Error)
            }
        })
        .catch(err => console.log(err))
    }


  return (
    <>
      <div className=" d-flex justify-content-center align-items-center vh-100 loginPage">
        <div className=" p-4  rounded  border border-12 loginForm">
          <div className='logo' > <br />
            <h4 className='main text-secondary'>Online Project Management</h4>
          </div>
          <h6 className="login mb-4">Login to get started</h6>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                autoComplete="off"
                className="form-control rounded-2"
                onChange={(e) =>
                  setValues({ ...values, email: e.target.value })
                }
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                className="form-control rounded-2"
                onChange={(e) =>
                  setValues({ ...values, password: e.target.value })
                }
              />
            </div>
            <div>
              <h6 className='forgotpassword'>Forgot Password?</h6>
            </div>
            <button className="btn loginbtn btn-primary color-blue rounded-4 ">
              Login
            </button>
            <div className="text-danger">{error && error}</div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login