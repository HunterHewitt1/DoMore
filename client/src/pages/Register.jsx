import { useState } from 'react'
import { RegisterUser } from '../services/Auth'
import { useNavigate } from 'react-router-dom'
const Register = () => {
  let navigate = useNavigate()

  const [formValues, setFormValues] = useState({
    username: '',
    firstname: '',
    lastname: '',
    email: '',
    password: '',
    confirmPassword: ''
  })

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    await RegisterUser({
      username: formValues.username,
      email: formValues.email,
      password: formValues.password,
      firstname: formValues.firstname,
      lastname: formValues.lastname

    })
    setFormValues({
      username: '',
      firstname: '',
      lastname: '',
      email: '',
      password: '',
      confirmPassword: ''
    })
    navigate('/signin')
  }

  return (
    <section>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#6d3d14"
          fill-opacity="1"
          d="M0,288L12.6,272C25.3,256,51,224,76,213.3C101.1,203,126,213,152,218.7C176.8,224,202,224,227,240C252.6,256,278,288,303,272C328.4,256,354,192,379,165.3C404.2,139,429,149,455,170.7C480,192,505,224,531,218.7C555.8,213,581,171,606,176C631.6,181,657,235,682,256C707.4,277,733,267,758,272C783.2,277,808,299,834,288C858.9,277,884,235,909,192C934.7,149,960,107,985,80C1010.5,53,1036,43,1061,48C1086.3,53,1112,75,1137,101.3C1162.1,128,1187,160,1213,186.7C1237.9,213,1263,235,1288,250.7C1313.7,267,1339,277,1364,250.7C1389.5,224,1415,160,1427,128L1440,96L1440,0L1427.4,0C1414.7,0,1389,0,1364,0C1338.9,0,1314,0,1288,0C1263.2,0,1238,0,1213,0C1187.4,0,1162,0,1137,0C1111.6,0,1086,0,1061,0C1035.8,0,1011,0,985,0C960,0,935,0,909,0C884.2,0,859,0,834,0C808.4,0,783,0,758,0C732.6,0,707,0,682,0C656.8,0,632,0,606,0C581.1,0,556,0,531,0C505.3,0,480,0,455,0C429.5,0,404,0,379,0C353.7,0,328,0,303,0C277.9,0,253,0,227,0C202.1,0,177,0,152,0C126.3,0,101,0,76,0C50.5,0,25,0,13,0L0,0Z"
        ></path>
      </svg>
      <div className="signin col">
        <div className="card-overlay centered">
          <form className="col" onSubmit={handleSubmit}>
          <div className="input-wrapper">
              <label htmlFor="name">User Name</label>
              <input
                onChange={handleChange}
                name="username"
                type="text"
                placeholder="John Smith"
                value={formValues.username}
                required
              />
            </div>
            <div className="input-wrapper">
              <label htmlFor="name">First Name</label>
              <input
                onChange={handleChange}
                name="firstname"
                type="text"
                placeholder="John"
                value={formValues.firstname}
                required
              />
            </div>
            <div className="input-wrapper">
              <label htmlFor="name">Last Name</label>
              <input
                onChange={handleChange}
                name="lastname"
                type="text"
                placeholder="Smith"
                value={formValues.lastname}
                required
              />
            </div>
            <div className="input-wrapper">
              <label htmlFor="email">Email</label>
              <input
                onChange={handleChange}
                name="email"
                type="email"
                placeholder="example@example.com"
                value={formValues.email}
                required
              />
            </div>
            <div className="input-wrapper">
              <label htmlFor="password">Password</label>
              <input
                onChange={handleChange}
                type="password"
                name="password"
                value={formValues.password}
                required
              />
            </div>
            <div className="input-wrapper">
              <label htmlFor="password">Confirm Password</label>
              <input
                onChange={handleChange}
                type="Password"
                name="confirmPassword"
                value={formValues.confirmPassword}
                required
              />
            </div>
            <button
              disabled={
                !formValues.email ||
                (!formValues.password &&
                  formValues.confirmPassword === formValues.password)
              }
            >
              Sign In
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Register
