// Include React
var React = require("react");
// Including the Link component from React Router to navigate within our application without full page reloads
var Link = require("react-router").Link;

// Create the Main component
var Search = React.createClass({

    // Here we render the component
    render: function () {

        return (
            <div className="container">
                {/* Panel Heading */}
                <div className="panel panel-default">
                    <div className="panel-heading">
                        <h3 className="panel-title">Search</h3>
                    </div>
                    {/* Panel body & Beginning of form */}
                    <div className="panel-body">
                        <form>
                            <div className="form-group">
                                <label htmlFor="topic">Topic</label>
                                <input type="email" className="form-control" id="newsTopic" placeholder="Enter News Topic" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="start-year">Start Year</label>
                                <input type="text" className="form-control" id="startYear" placeholder="Start Year" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="end-year">End Year</label>
                                <input type="text" className="form-control" id="endYear" placeholder="End Year" />
                            </div>
                            <button type="submit" className="btn btn-default">Submit</button>
                        </form>
                    </div>
                </div>
            </div> // Closes container
        );
    }
});

// Export the component back for use in other files
module.exports = Search;
