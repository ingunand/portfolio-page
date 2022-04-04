import './App.css';
import AboutMe from './components/aboutme';
import LandingPage from './components/landingpage';
import ProjectsSummary from './components/projectsSummary';
import {Link} from 'react-scroll';



function App() {
  return (
    <div className="App">
        <nav>
          <ul>
            <li><Link to="mainheader" activeClass="active" spy={true} smooth={true}>Welcome</Link></li>
            <li><Link to="projectsSummaryMain" activeClass="active" spy={true} smooth={true}>Projects</Link></li>
            <li><Link to="aboutMeMain" activeClass="active" spy={true} smooth={true}>About me</Link></li>
          </ul>
      </nav>
      <LandingPage/>
      <main>
      <ProjectsSummary/>
      <AboutMe/>
      </main>
    </div>
  );
}

export default App;
