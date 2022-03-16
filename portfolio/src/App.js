import './App.css';
import AboutMe from './components/aboutme';
import FrontPage from './components/frontpage';
import ProjectsSummary from './components/projectsSummary';

function App() {
  return (
    <div className="App">
      <FrontPage/>
      <main>
      <AboutMe/>
      <ProjectsSummary/>
      </main>
    </div>
  );
}

export default App;
