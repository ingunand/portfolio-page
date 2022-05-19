import React from 'react';
import { Route, Link, Routes } from "react-router-dom";
import './frontpage.css';
import Bachelor from './projects/bachelor';
import WebCoding from './projects/webcoding';
import OverThere from './projects/overthere';


class ProjectsSummary extends React.Component {

    render() {
      return (
        <div id="projectsSummaryMain" className="frontpage-parts">
          <div className="projectsCommon">
            <div id="projectNavigation">
              <h2>Projects</h2>
              <Link to='/webcoding' >1. NTNU design</Link>
              <Link to='/overthere' >2. Over There Counter</Link>
              <Link to='/bachelor' >3. Bachelor project</Link>
            </div>

            <Routes>
              <Route path='/webcoding' element={<WebCoding/>} />
              <Route path='/overthere' element={<OverThere/>} />
              <Route path='/bachelor' element={<Bachelor/>} />
            </Routes>
          </div>
        </div>
      );
    }
}

export default ProjectsSummary;