import React from 'react';
import './frontpage.css';
import self from './assets/tittei.png';
//import {Link} from 'react-scroll';

class LandingPage extends React.Component {

    render() {
      return (
            <header id="mainheader" class="frontpage-parts">
               {/* <nav>
                    <ul>
                        {// activeClass="active" kan legges inn i link tagg, active class activated when element is reached https://medium.com/how-to-react/scroll-to-an-element-on-click-in-react-js-8424e478bb9
                        }
                        <li><Link to="projectsSummaryMain" spy={true} smooth={true}>Projects</Link></li>
                        <li><Link to="aboutMeMain" spy={true} smooth={true}>About me</Link></li>
                    </ul>
                </nav>*/
                }
                <div id="headerintro" >
                    <img src={self} class="portrait" alt="Cartoon portrait of Ingunn"/>
                    <h1>Ingunn Hatlehol Andreassen</h1>
                    <h2><i>Web developer</i></h2>
                    <p>Front-end — CSS — React</p>
                </div>
            </header>
            );
    }
}

export default LandingPage;