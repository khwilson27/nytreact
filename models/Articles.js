// Include the Mongoose Dependencies
var mongoose = require("mongoose");

var Schema = mongoose.Schema;

// Create a Schema for NYT Articles.
var ArticlesSchema = new Schema({
  title: {
    type: String
  },
  date: {
    type: Date
  },
  url: {
    type: String
  } 
});

// Create the Model
var Articles = mongoose.model("Articles", ArticlesSchema);

// Export it for use elsewhere
module.exports = Articles;
