import React from 'react';
import overthere from './overthere-mockup.png';


class OverThere extends React.Component {

    render() {
      return (
            <div className="overThereMain">
                <h3>Over There Counter</h3>
                <img src ={overthere} ></img>
               

            </div>
            );
    }
}

export default OverThere;