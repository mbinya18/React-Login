import React from 'react';
import './signin.css';
import { Link } from 'react-router-dom'; // Correct import for Link

const Login = () => { // Changed the component name to PascalCase (Login)
  return (
    <>
      <div className='signin'>
        <h4 className='signinheader p-4'>Log In</h4>
        <form className='signinform'>
          <div className="signinitems p-3">
            <label htmlFor="name" className='py-1'>First Name</label>
            <input
              type='text'
              className='py-1'
              placeholder='Enter your First Name'
              id='name'
            />
            <label htmlFor="lname" className='py-1'>Last Name</label>
            <input
              type='text'
              className='py-1'
              placeholder='Enter your Last Name'
              id='lname'
            />
            <label htmlFor="email" className='py-1'>Email</label>
            <input
              type='email'
              className='py-1'
              placeholder='Enter your email address'
              id='email'
            />
            <label htmlFor="password" className='py-1'>Password</label>
            <input
              type='password'
              className='py-1'
              placeholder='Enter your password'
              id='password'
            />
            <button type="submit" className="btn btn-success mt-3">Log In</button>
          </div>
        </form>
        <div className="login mb-3">
          <p>Don't have an account?</p>
          <Link to="/" className="btn btn-primary">Sign Up</Link> {/* Fixed Link usage */}
        </div>
      </div>
    </>
  );
}

export default Login;
