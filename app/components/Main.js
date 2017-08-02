// Include React
var React = require("react");
// Including the Link component from React Router to navigate within our application without full page reloads
var Link = require("react-router").Link;

// Create the Main Component
var Main = React.createClass({

  // Here we set a generic state associated with the number of clicks
  // getInitialState: function () {
  //   return {
  //     // clicks: 0,
  //     // clickID: "Main"
  //   };
  // },

  // //  On load display the number of clicks
  // componentDidMount: function () {
  //   console.log("COMPONENT MOUNTED");

  //   // The moment the page renders on page load, we will retrieve the previous click count.
  //   // We will then utilize that click count to change the value of the click state.
  //   helpers.getClicks()
  //     .then(function (response) {
  //       // Using a ternary operator we can set newClicks to the number of clicks in our response object
  //       // If we don't have any clicks in our database, set newClicks to 0
  //       var newClicks = response.data.length ? response.data[0].clicks : 0;
  //       this.setState({
  //         clicks: newClicks
  //       });
  //       console.log("RESULTS", response);
  //       console.log("Saved clicks", newClicks);
  //     }.bind(this));
  // },
  // // Whenever our component updates, the code inside componentDidUpdate is run
  // componentDidUpdate: function (prevState) {
  //   console.log("COMPONENT UPDATED");

  //   // We will check if the click count has changed...
  //   if (prevState.clicks !== this.state.clicks) {

  //     // If it does, then update the clickcount in MongoDB
  //     helpers.saveClicks({ clickID: this.state.clickID, clicks: this.state.clicks })
  //       .then(function () {
  //         console.log("Posted to MongoDB");
  //       });
  //   }
  // },
  // // Whenever the button is clicked we'll use setState to add to the clickCounter
  // // Note the syntax for setting the state
  // handleClick: function () {
  //   this.setState({ clicks: this.state.clicks + 1 });
  // },

  // // Whenever the button is clicked we'll use setState to reset the clickCounter
  // // This will reset the clicks -- and it will be passed ALL children
  // resetClick: function () {
  //   this.setState({ clicks: 0 });
  // },

  // Here we render the function
  render: function () {
    return (

      //  <!--Main Bootstrap Search -- >
      <div className="container">
        {/* <!-- Jumbotron for Title --> */}
        <div className="jumbotron" style={{ backgroundColor: "#20315A", color: "white" }}>
          <h1 className="text-center"><strong><i className="fa fa-newspaper-o"></i> New York Times Search</strong></h1>
        </div>
        {/* <!-- Row for Searching New York Times --> */}
        <div className="row">
          <div className="col-sm-12">
            <br />
            {/* <!-- First panel is for handling the search parameters --> */}
            <div className="panel panel-primary">
              <div className="panel-heading">
                <h3 className="panel-title"><strong><i className="fa  fa-list-alt"></i>   Search Parameters</strong></h3>
              </div>
              <div className="panel-body">
                {/* <!-- Here we create an HTML Form for handling the inputs--> */}
                <form role="form">
                  {/* <!-- Here we create the text box for capturing the search term--> */}
                  <div className="form-group">
                    <label htmlFor="search">Search Term:</label>
                    <input type="text" className="form-control" id="search-term" />
                  </div>
                  {/* <!-- Here we capture the number of records that the user wants to retrieve  --> */}
                  <div className="form-group">
                    <label htmlFor="pwd">Number of Records to Retrieve:</label>
                    <select className="form-control" id="num-records-select" defaultValue="5">
                      <option value="1">1</option>
                      {/* <!-- Setting the option for 5 as default --> */}
                      <option value="5">5</option>
                      <option value="10">10</option>
                    </select>
                  </div>
                  {/* <!-- Here we capture the Start Year Parameter--> */}
                  <div className="form-group">
                    <label htmlFor="start-year">Start Year (Optional):</label>
                    <input type="text" className="form-control" id="start-year" />
                  </div>
                  {/* <!-- Here we capture the End Year Parameter --> */}
                  <div className="form-group">
                    <label htmlFor="end-year">End Year (Optional):</label>
                    <input type="text" className="form-control" id="end-year" />
                  </div>
                  {/* <!-- Here we have our final submit button --> */}
                  <button type="submit" className="btn btn-default" id="run-search"><i className="fa fa-search"></i> Search</button>
                  <button type="button" className="btn btn-default" id="clear-all"><i className="fa fa-trash"></i> Clear Results</button>
                </form>
              </div>
            </div>
          </div>
        </div>

        <div>

          {/* Added this.props.children to dump all of the child components into place */}
          {this.props.children}

        </div>

        {/* <!-- Footer Region --> */}
        <div className="row">
          <div className="col-sm-12">
            {/* <!-- Line Break followed by closing --> */}
            <hr />
            <h5 className="text-center"><small>khwilson<i className="fa fa-heart"></i></small></h5>
          </div>
        </div>

      </div>
    );
  }
});

module.exports = Main;