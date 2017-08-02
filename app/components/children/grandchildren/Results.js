// Include React
var React = require("react");
// Including the Link component from React Router to navigate within our application without full page reloads
var Link = require("react-router").Link;

// Create the Main component
var Results = React.createClass({

    // Here we render the component
    render: function () {

        return (
            <div className="container">

                <div className="panel panel-default">
                    <div className="panel-heading">
                        <h3 className="panel-title">Search Results</h3>
                    </div>
                    <div className="panel-body">
                        Panel content
                    </div>
                </div>
            </div> // Closes container
        );
    }
});

// Export the component back for use in other files
module.exports = Results;
