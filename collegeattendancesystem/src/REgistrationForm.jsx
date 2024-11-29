import React from 'react'
import { lessonplan } from './lessonplan'

export const REgistrationForm = () => {

  const check=(e)=>{
    let passwordm=document.getElementById('passw').value;
    let cpasswordm=document.getElementById('cpassw').value;
    if (passwordm===cpasswordm) {
      document.getElementById('error').innerHTML=`<p style="color:green">Password matched</p>`;
    }
    else{
      document.getElementById('error').innerHTML=`<p style="color:red">Confirm Password doesn't matches</p>`;
    }
  }

  return (

    <form action="http://localhost:3000/student-registration" method="post" id='regform'>
      <h2>Register yourself to the portal</h2>
      <label htmlFor="user">Enter your name</label>
      <div>
        <input type="text" name="user" id="user" className="data" />
      </div>

      <label htmlFor="email">Enter your email</label>
      <div>
        <input type="email" name="email" id="email" className="data" />
      </div>
      <label htmlFor="dept">Enter your department</label>
      <div>
        <input type="text" name="dept" id="dept" className="data" />
      </div>
      <label htmlFor="regno">Enter your Registration number</label>
      <div>
        <input type="text" name="regno" id="regno" className="data" />
      </div>
     

      <label htmlFor="passw">Create your password</label>
      <div>
        <input type="password" name="passw" id="passw" className="data" />
      </div>
      <label htmlFor="cpassw">Confirm your password</label>
      <div>
        <input type="password" name="cpassw" id="cpassw" className="data" onKeyUp={check} />
        <div id="error"></div>
      </div>
     

      <button>Register me</button>
    </form>
  )
}
