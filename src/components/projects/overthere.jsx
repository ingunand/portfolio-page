import React from 'react';
import overthere from './overthere-mockup.png';


class OverThere extends React.Component {

    render() {
      return (
            <div className="individualProjects">
                <span>
                    <h3>Over There Counter</h3>
                    <img src ={overthere} alt="Screenshot of over there webpage on pc and phone"/>
                </span>
                <section>
                    <h4>Background</h4>
                    <p>This is a “for fun” project made to keep track of the amount of times one of our lecturers, Attila, said “over there” during the lecture. 
                        And that was a lot. During the first lecture I noticed that he said “Over there” many times, and decided to count it the second lecture. 
                        The second lecture he said it <em>192 times</em>. I made my friends guess how many times he said it, and it became a fun thing to do during the lectures. 
                        It all started with pen and paper, but as a web development student I of course wanted a digital solution. 
                    </p>
                    <p>The result was a web app made from React, 
                        where the previous counters get data from a csv file. As soon as the page was a MVP it was deployed to Netlify from GitHub, so that I could share 
                        it with my classmates. The button were in the start just a box, but it was later fixed to be Attilas face, and a mobile version was added. 
                        I made a big button of Attila's face for the counter, and a list of previous counters. I got to use the counter for the couple last lectures in the course,
                        and since I have a touch screen on my computer I could just split my computer in two windows and click the button to count in between taking notes.
                        This made the lectures more fun, and I actually paid more attention because I needed to hear all the times he said over there. 
                    </p>
                </section>
                <section>
                    <h4>Improvements</h4>
                    <p>For improvements, I would like to add a “add to previous counters”-button. This would add the current number counted, and the date to the file to make 
                        it possible to add the data to the previous counters without hardcoding it. The page is now static with just the counter and a hard to update list.
                        To make it more usable there could also be added edit and delete buttons to the previous counters to make it easier to update. The mobile version
                        would also be updated, as of now there is a strange big gap between the counter and the previous counters. I also have an aesthetic improvement
                        that would be fun to add. I want to add Attila's face flying across the screen when the button is pressed, to further visualize that the button
                        is pressed and to make it more fun. I plan to send this to the class that is having Attila this fall, so that they can also make use of the fun
                        counter I made. If they are as observant as we were, that is.  
                    </p>
                </section>

            </div>
            );
    }
}

export default OverThere;