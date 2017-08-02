// Include React
var React = require("react");
// Including the Link component from React Router to navigate within our application without full page reloads
var Link = require("react-router").Link;

// Create the Main component
var Search = React.createClass({

    // Here we render the component
    render: function () {

        return (
            // <!-- This row will handle all of the retrieved articles -->
            <div className="row">
                <div className="col-sm-12">
                    <br />
                    {/* <!-- This panel will initially be made up of a panel and wells for each of the articles retrieved --> */}
                    <div className="panel panel-primary">
                        {/* <!-- Panel Heading for the retrieved articles box --> */}
                        <div className="panel-heading">
                            <h3 className="panel-title"><strong><i className="fa fa-table"></i>   Top Articles</strong></h3>
                        </div>
                        {/* <!-- This main panel will hold each of the resulting articles --> */}
                        <div className="panel-body" id="well-section">
                        </div>
                    </div>
                </div>
            </div>
        );
    }
});

// Export the component back for use in other files
module.exports = Search;
