import React from 'react'

export const StudentsScores = () => {
  return (
    <form action="http://localhost:3000/student-scores" method='post' className='loginForm'>
      <label htmlFor="code">Enter your code</label>
      <div className="data">
        <input type="number" name="code" id="code" />
      </div>
        <label htmlFor="rego">Student roll number</label>
        <div className='data'>
        <input type="number" name="regno" id="regno" className="data" />
        </div>
        <label htmlFor="score">Student score</label>
        <div className='data'>
        <input type="number" name="marks" id="score" className="data" />
        </div>
        <label htmlFor="attendance">Student attendance</label>
        <div className='data'>
        <input type="number" name="satt" id="attendance" className="data" />
        </div>
        <button>Upload</button>
    </form>
  )
}

//export default StudentsScores