import React from 'react';
import { Route, Routes, Link } from "react-router-dom";
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
              <Link to='/' className="projectsButton" >NTNU design</Link>
              <Link to='/overthere' className="projectsButton">Over There Counter</Link>
              <Link to='/bachelor' className="projectsButton">Bachelor project</Link>
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