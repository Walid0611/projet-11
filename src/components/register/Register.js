import React from 'react'
import './register.css'

const Register = () => {
  return (
    <div className='bodyRegister'>
    <div className="wrapper">
  <div className="login-text">
    <button className="cta">
      <i className="fas fa-chevron-down fa-1x" />
    </button>
    <div className="text">
      <a href="">Login</a>
      <hr />
      <br />
      <input type="text" placeholder="Username" />
      <br />
      <input type="password" placeholder="Password" />
      <br />
      <button className="login-btn">Log In</button>
      <button className="signup-btn">Sign Up</button>
    </div>
  </div>
  <div className="call-text">
    <h1>
      Show us your <span>creative</span> side
    </h1>
    <button>Join the Community</button>
  </div>
</div>
    </div>
  )
}

export default Register