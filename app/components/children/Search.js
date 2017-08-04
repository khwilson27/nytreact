// Include React
import React from "react";
// Including the Link component from React Router to navigate within our application without full page reloads
const Link = require("react-router").Link;

// Create the Main component
class Search extends React.Component {

    // Here we render the component
    render() {

        console.log(this.props.searchData);

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

                            {this.props.searchData.map((article, i) => {
                                return (
                                    <div key={article._id} className="well" id={article._id}>
                                        <h3 className="articleHeadline">
                                            <span className='label label-primary'>{i+1}</span>
                                            <strong>{article.headline.main || ""}</strong>
                                        </h3>
                                        <h5>{article.byline.original}</h5>
                                        <h5>{article.pub_date}</h5>
                                        <a href={article.web_url}> {article.web_url} </a>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
};

// Export the component back for use in other files
module.exports = Search;
