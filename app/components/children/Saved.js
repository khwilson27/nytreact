// Include React
import React from "react";
// Including the Link component from React Router to navigate within our application without full page reloads
const Link = require("react-router").Link;

class Saved extends React.Component {

  // // GrandChild has a state that follows the number of clicks
  // getInitialState: function() {
  //   return {
  //     number: 0
  //   };
  // },
  
  render() {
    return (
 
      <div className="panel panel-primary">
        <div className="panel-heading">
          <h3 className="panel-title">Saved</h3>
        </div>
        <div className="panel-body text-center">

          {/* This component will multiply it's own number on "this.state" with it's parent's
          number on "this.props" and then display the result in the <h1> tag */}
          <h1>Test test</h1>
        </div>
      </div>

    );
  }
};


// Export the component back for use in other files
module.exports = Saved;
