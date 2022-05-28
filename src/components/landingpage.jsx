import React from 'react';
import './frontpage.css';
import self from './assets/ingunn.png';
//import {Link} from 'react-scroll';

class LandingPage extends React.Component {

    render() {
      return (
            <header id="mainheader" className="frontpageParts">
                <div id="headerintro" >
                    <img src={self} className="portrait" alt="Portrait of Ingunn"/>
                    <h1>Ingunn Hatlehol Andreassen</h1>
                    <h2><i>Web developer</i></h2>
                    <h3>Front-end — CSS — HTML — JavaScript — React</h3>
                </div>
            </header>
            );
    }
}

export default LandingPage;