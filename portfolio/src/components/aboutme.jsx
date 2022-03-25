import React from 'react';
import './frontpage.css';


class AboutMe extends React.Component {

    render() {
      return (
            <div id="aboutMeMain" class="frontpage-parts">
                <h2>About me</h2>
                <p>I am soon done with a bachelors degree in web development from NTNU in Gjøvik, Norway. </p>
                <p>I am most passionate about front-end and css, and I love to watch things take form on my screen.</p>
                <p>Take a look at my projects above, and feel free to contact me!</p>
                <address>
                  <a href="https://www.linkedin.com/in/ingunn-hatlehol-andreassen/">LinkedIn</a>
                  <br/>
                  <a href="mailto:ingunand@stud.ntnu.no">ingunand@stud.ntnu.no</a>
                </address>


            </div>
            );
    }
}

export default AboutMe;