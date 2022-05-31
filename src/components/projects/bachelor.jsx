import React from 'react';
import hamleMockup from './hamle-mockup.png';
import hamleMockupWEBP from './hamle-mockup.webp';


class Bachelor extends React.Component {

    render() {
      return (
        <div className="individualProjects">
        <span>
            <h3>Hamle — Bachelor project</h3>
            <picture>
                <source srcSet={hamleMockupWEBP} type="image/webp"/>
                <img src ={hamleMockup} alt="Screenshot of Hamle webpage phone on three pages"/>
            </picture>
        </span>
        <section>
            <h4>Background</h4>
            <p>The bachelor project was a group project of 22.5 study points  where we worked a semester to make an app and a report to show what we have learned over 
                the 3 years we have studied at NTNU. I had a group with another web development student, and one interaction design student. 
                We got the project from Gjøvik municipality, which wanted a local solution for food waste. The result of this whole process is the mobile app Hamle.
                Hamle is an app made with React, with back-end and login from Firebase, deployed to Netlify. 
                The app is made to help households to keep track of what they need to buy with a shopping list, and keep track of what they already have with an inventory list.
                Since this was a big project we used a lot of hours to research food waste, mobile-first, send out a survey and have interviews with potential users. 
                There was also a long design process with a lot of ideating before we landed on the app that was made. 
            </p>
            <p>We had to make a lot of choices in the process, to prioritize functionalities to include in the app. The goal was to make an MVP that we could test. 
                To make that happen some functionalities that we wanted to include were not prioritized. The app is made in a calm pink color, and a hamster is 
                the mascot. The hamster that was the inspiration for the logo and mascot is actually a hamster I had a couple of years ago named Chilli. 
            </p>
        </section>
        <section>
            <h4>Improvements</h4>
            <p>The first improvements I would want to make is to make the inventory list and shopping list more distinct from each other. 
                The inventory does not need a checkbox as the shopping list does. It would also be good to have an overview of how long you have had the food in your 
                fridge, and how many of it you have. 
                I would do that by adding a timer, that would register the day the item was added, and then count how many 
                days today's day is from that date. That would make it easier to keep track of how long I have had the food 
                in my fridge. I would also like to add categories on the item, of where they are stored. The category would 
                by default be empty when added from the shopping list, but could easily be added by editing the item or 
                adding it directly to the inventory. The category should be chosen with a drop down menu. The categories 
                should be fridge, freezer and cabinet. I would also like to add the possibility to move an item from a 
                category to another. When editing the item it should be possible to change the category in the drop down 
                menu, and when the category is changed the timer should restart to know how long the item has been stored 
                in the new storage space.
            </p>
        </section>

    </div>
        );
    }
}

export default Bachelor;