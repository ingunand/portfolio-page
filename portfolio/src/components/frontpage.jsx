import React from 'react';
import './styles/frontpage.css';

class FrontPage extends React.Component {

    render() {
      return (
            <header id="mainheader">
                {//<nav></nav> tenker å ha navigasjon oppe i venstre hjørne med den beige sekundærfargen, som bare sender brukereren ned til elementet på siden.
                }
                <div id="headerintro">
                    <h1>Ingunn Hatlehol Andreassen</h1>
                    <h2>Web developer</h2>
                    <p>Front-end — CSS — React — Accessibility</p>
                </div>
            </header>
            );
    }
}

export default FrontPage;