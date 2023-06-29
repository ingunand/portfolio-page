import React from 'react';
import { Route, Routes, NavLink } from "react-router-dom";
import './frontpage.css';
import Bachelor from './projects/bachelor';
import WebCoding from './projects/webcoding';
import OverThere from './projects/overthere';



class ProjectsSummary extends React.Component {

    render() {
      return (
        <div id="projectsSummaryMain" className="frontpageParts">
            <div id="projectNavigation">
              <h2>Projects</h2>
              <NavLink to='/' className="projectsButton" >NTNU design</NavLink>
              <NavLink to='/overthere'className="projectsButton">Over There Counter</NavLink>
              <NavLink to='/bachelor' className="projectsButton">Bachelor project</NavLink>
            </div>

            <Routes>
              <Route path='/' element={<WebCoding/>} />
              <Route path='/overthere' element={<OverThere/>} />
              <Route path='/bachelor' element={<Bachelor/>} />
            </Routes>
        </div>
      );
    }
}

export default ProjectsSummary;