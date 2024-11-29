import React, { useCallback } from 'react';
import "./App.css";
import { NavLink } from 'react-router-dom';

export const Homepage = () => {



  return (
    <div className="canvasHome">
      <div className="container">
        <div id='collegeName'>Government Polytechnic Buxar</div>
        <div id='projectName'>Sarthak Shikshak </div><div id='dev'>developed by Akarsh Kumar Mishra</div>

        <div>
          <nav>
            <ul>
              <NavLink to="/" className={(component) => { return component.isActive ? "activePage" : "" }}> <li>Login</li></NavLink>
              <NavLink to="/professor-registration" className={(component) => {
                return component.isActive ? "activePage" : ""
              }}> <li>Professor Registration</li></NavLink>
              <NavLink to="/student-registration" className={(component) => { return component.isActive ? "activePage" : "" }}><li>Student Registration</li></NavLink>
              <NavLink to="/student-scores" className={(component) => { return component.isActive ? "activePage" : "" }}><li id='studentScore' >Student Score Entry</li></NavLink>
            </ul>
          </nav>


        </div>
      </div>

    </div>
  )
}
