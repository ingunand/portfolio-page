import React from 'react';
import './frontpage.css';
import linkedin from './assets/linkedin-white.png';
import email from './assets/email.png';
import github from './assets/github.png';


class AboutMe extends React.Component {

    render() {
      return (
            <div id="aboutMeMain" className="frontpageParts">
              <div id="aboutMeContent">
                <h2>About me</h2>
                <p>I have a bachelor's degree in web development from NTNU in Gjøvik, Norway. I finished my degree in 2022, and you can read more about the bachelor project in my projects below. 
                  I am most passionate about front-end and CSS, and I love to watch things take form on my screen.</p>
                <p>I am originaly from Vatne, Møre og Romsdal, but I moved to Gjøvik to study in 2019. 
                  I have a love for lemurs and dogs, I love watermelon and I eat tacos every week!</p>
               
                <div>

                </div>

                <p>Take a look at my projects, and feel free to contact me!</p>

                  <a href="https://www.linkedin.com/in/ingunn-hatlehol-andreassen/"><img className="logo" src={linkedin} alt="linkedin logo"/></a>
                  <a href="mailto:ingunnhatlehol@hotmail.com"><img className="logo" alt="mail envelope" src={email}/></a>
                  <a href="https://github.com/ingunand"><img className="logo" alt="github logo" src={github}/></a>
              </div>
            </div>
            );
    }
}

export default AboutMe;
