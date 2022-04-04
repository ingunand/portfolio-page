import React from 'react';
import './frontpage.css';
import linkedin from './assets/linkedin-white.png';
import email from './assets/email.png';


class AboutMe extends React.Component {

    render() {
      return (
            <div id="aboutMeMain" className="frontpage-parts">
              <div id="aboutMeContent">
                <h2>About me</h2>
                <p>I am soon done with a bachelors degree in web development from NTNU in Gjøvik, Norway. 
                  I am most passionate about front-end and CSS, and I love to watch things take form on my screen.</p>
                <p>I am originaly from Vatne, Møre og Romsdal, but I moved to Gjøvik to study in 2019. I have a love for dogs, and I eat taco every week!</p>
               
                <div>

                </div>

                <p>Take a look at my projects above, and feel free to contact me!</p>

                  <a href="https://www.linkedin.com/in/ingunn-hatlehol-andreassen/"><img className="logo" src={linkedin} alt="linkedin logo"/></a>
                  <a href="mailto:ingunand@stud.ntnu.no"><img className="logo" alt="mail envelope" src={email}/></a>
              </div>
              <div>
                <p>test</p>
              </div>
            </div>
            );
    }
}

export default AboutMe;