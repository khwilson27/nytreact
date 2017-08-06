// Include React
import React from "react";
// Including the Link component from React Router to navigate within our application without full page reloads
const Link = require("react-router").Link;
import axios from "axios";


// Create the Main Component
class Main extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
    this.state.searchKey = "";
    this.state.endYear = "";
    this.state.beginYear = "";
    this.state.searchData = [];
    this.state.savedArticles = [];

    this.searchSubmit = this.searchSubmit.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.handleSave = this.handleSave.bind(this);
  }

  searchSubmit(event) {
    event.preventDefault();

    const searchKeyFormVal = document.getElementById("search-term").value;
    const beginYearFormVal = document.getElementById("start-year").value || "";
    const endYearFormVal = document.getElementById("end-year").value || "";

    console.log(searchKeyFormVal, beginYearFormVal, endYearFormVal);

    this.setState({
      searchKey: searchKeyFormVal,
      endYear: endYearFormVal,
      beginYear: beginYearFormVal
    })
  }

  handleSearch() {
    // Define search params
    const paramsGet = {
      "api-key": "915d7986df92477680a1da6511ab82c1",
      "q": this.state.searchKey
    };

    if (this.state.beginYear.length > 0) {
      paramsGet.begin_date = this.state.beginYear + "0101";
    };

    if (this.state.endYear.length > 0) {
      paramsGet.end_date = this.state.endYear + "1231";
    };

    // NYT Get search results
    axios.get("https://api.nytimes.com/svc/search/v2/articlesearch.json", {
      params: paramsGet
    })
      .then((response) => {
        console.log(response);
        this.setState({
          "searchData": response.data.response.docs
        })
      })
      .catch(function (error) {
        console.log(error);
      });
  }

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

  // Whenever our component updates, the code inside componentDidUpdate is run
  componentDidUpdate(prevProps, prevState) {
    console.log("COMPONENT UPDATED");

    console.log(prevState.searchKey, this.state.searchKey);
    // We will check if the click count has changed...
    if (prevState.searchKey !== this.state.searchKey) {
      this.handleSearch();
    } else {
      console.log("searched articles updated!");
    }
  }
  // // Whenever the button is clicked we'll use setState to add to the clickCounter
  // // Note the syntax for setting the state
  handleSave(title, date, url) {
    axios.post("/save", {
      params: {
        title: title,
        date: date,
        url: url
      }
    })
      .then((response) => {
        console.log(response);
        this.setState({
          "savedArticles": response.data
        })
      })
      .catch(function (error) {
        console.log(error);
      });

  }

  // // Whenever the button is clicked we'll use setState to reset the clickCounter
  // // This will reset the clicks -- and it will be passed ALL children
  // resetClick: function () {
  //   this.setState({ clicks: 0 });
  // },

  // Here we render the function
  render() {

    const childrenWithProps = React.cloneElement(this.props.children, {
      searchData: this.state.searchData,
      savedArticles: this.state.savedArticles,
      handleSave: this.handleSave
    });


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
                  {/* <div className="form-group">
                    <label htmlFor="pwd">Number of Records to Retrieve:</label>
                    <select className="form-control" id="num-records-select" defaultValue="5">
                      <option value="1">1</option>
                      <option value="5">5</option>
                      <option value="10">10</option>
                    </select>
                  </div>   */}
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
                  <button type="submit" onClick={this.searchSubmit} className="btn btn-default" id="run-search"><i className="fa fa-search"></i> Search</button>
                </form>
              </div>
            </div>
          </div>
        </div>

        <div>

          {/* Added this.props.children to dump all of the child components into place */}
          {childrenWithProps}

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
};

module.exports = Main;