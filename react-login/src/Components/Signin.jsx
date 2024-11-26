import React from 'react'
import './signin.css'
import { Link } from 'react-router-dom'
const signin = () => {
  return (
  <>
    <div className='signin'>
      <h4 className='signinheader p-4'>Sign Up</h4>
      <form className='signinform'>
      <div className="signinitems p-3">
        <label htmlFor="name" className='py-1'>FirstName</label>
        <input type='text' className='py-1' placeholder='Enter your First Name' id='name'/>
        <label htmlFor="name" className='py-1'>LastName</label>
        <input type='text' className='py-1' placeholder='Enter your Last Name' id='lname'/>
        <label htmlFor="name" className='py-1'>Email</label>
        <input type='email' className='py-1' placeholder='Enter your email address' id='email'/>
        <label htmlFor="password" className='py-1'>Password</label>
        <input type='password' className='py-1' placeholder='Enter your password' id='password'/>
        <button type="submit" className='py-1' class="btn btn-success mt-3">Sign Up</button>

        </div>

      </form>
      <div className="login mb-3">
        <p>Already have an account?</p>
        <Link to="/login" type="submit" class="btn btn-primary">Log In</Link>

      </div>
      </div>
  </>
  )
}

export default signin