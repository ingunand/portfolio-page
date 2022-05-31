import './App.css';
import AboutMe from './components/aboutme';
import LandingPage from './components/landingpage';
import ProjectsSummary from './components/projectsSummary';
import Footer from './components/footer';
import {Link} from 'react-scroll';



function App() {
  return (
    <div className="App">
        <nav>
          <ul>
            <li><Link to="mainheader" activeClass="active" spy={true} smooth={true}>Welcome</Link></li>
            <li><Link to="aboutMeMain" activeClass="active" spy={true} smooth={true}>About me</Link></li>
            <li><Link to="projectsSummaryMain" activeClass="active" spy={true} smooth={true}>Projects</Link></li>
            <li><Link to="footer" activeClass="active" spy={true} smooth={true}>Background</Link></li>
          </ul>
      </nav>
      <LandingPage/>
      <main>
      <AboutMe/>
      <ProjectsSummary/>
      </main>
      <Footer/>
    </div>
  );
}

export default App;
