import React from 'react';


class Footer extends React.Component {

    render() {
      return (
            <footer id="footer">
                <section>
                    <h2>Behind the portfolio</h2>
                    <p>This portfolio is made for an exhibition in the course <em>IDG3800 - Portfolio and Exhibition</em>. In the start of the course I made a plan on how 
                        I should make my portfolio, and my roles in the course. 
                    </p>
                    <p>For the portfolio, I didnt quite stick to my plan, but the portfolio turned out better than planned anyway. I had a plan to use Gatsby, and a template to quicly set up a page and design.
                        I had some troubles installing Gastsby and adding the project to my GitHub. I had a CMS called Wix as my backup, but I wanted to make something personal
                        and show off my skills as a web developer. 

                        I ended up using React, where I have made everything from scratch. I already knew React, and I love to work with CSS,
                        and even though I am not a designer I am satisfied with how it turned out. In my plan I had set up a timeline, and had a goal to pick a technology to work with by March 18th,
                        and to be done with the whole portfolio by May 1st. I managed to pick the technology by the time I set, but since I was working on the bachelor thesis
                        until May 13th I had to set the portfolio on pause and pick it up and finish it when the bachelor was delivered. I think that worked great, since I then had one less thing
                        to worry about and could focus on only the portfolio (and the bachelor presentation, but I had some time for that after the portfolio).
                    </p>
                    <p>The projects I had planned to use in my portfolio are all added to this page. I hade some things I reflected on in my plan that I wantged to make better in my projects,
                        and I got some time to fix some of them before adding it to my portfolio. Further reflections over each project can be find in <em>Projects</em>.
                    </p>
                </section>
                <p id="footerEnd">
                    &copy; Ingunn Hatlehol Andreassen 2022
                </p>
            </footer>
            );
    }
}

export default Footer;