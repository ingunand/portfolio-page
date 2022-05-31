import React from 'react';
import './project.css';
import webCodingMockup from './ntnudesign-mockup.png';
import webCodingMockupWEBP from './ntnudesign-mockup.webp';


class WebCoding extends React.Component {

    render() {
      return (
        <div className="individualProjects">
            <span className="doublePictures">
                <h3>Web Coding — NTNU design</h3>
                <picture>
                    <source srcSet={webCodingMockupWEBP} type="image/webp"/>
                    <img src ={webCodingMockup} alt="Screenshot of NTNU design webpage on pc and phone"/>
                </picture>
            </span>
            <section>
                <h4>Background</h4>
                <p>This project was part of the course IDG1292 Web Coding with 7.5 study points, and was my exam assignment. We had already had two other assignments, 
                    one that was a page made to introduce us that we coded ourselves, and one that we just made the CSS for a HTML-page from screenshot-mockups. The assignment 
                    was to improve, or redesign the NTNU design homepage. We had to include a big picture with the name of the department on the homepage, and the rest 
                    of the design was mostly up to us. We also needed to include a program, application and contact page. These had their own requirements, 
                    but the design was up to us. The page is made out of HTML and CSS. 
                </p>
                <p>Even though I knew a bit of HTML and CSS from before starting at NTNU I learned a lot in Web Coding and while making the exam page. 
                    The page works well now as a basic static website, but you would want the form to work and to sort the programs there must have been added 
                    some JavaScript and back-end. 
                </p>
            </section>
            <section>
                <h4>Improvements</h4>
                <p>For improvements there are some design choices I could take another look at. Almost all elements on the pages are squared, except for 
                    the navigation choices. I would set a standard and choose only squared elements to make a standard for the whole page. 
                    I can also see that the logo in the navigation bar looks dragged out, so that needs to be resized, especially in the mobile version. 
                    The mobile version could also benefit from some bigger text and elements, to make it more readable and usable for everyone. To make the page more usable and not so 
                    static, I would add sorting options on the programmes-page, to make it possible to sort courses by what study program they belong to, and by 
                    level or year. 
                </p>
            </section>
        </div>
    );
    }
}

export default WebCoding;