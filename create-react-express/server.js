const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;

// Credentials environment variable
// New credentials object can be created at:
// Updated path to credentials object needs to be supplied
process.env.GOOGLE_APPLICATION_CREDENTIALS =
  "C:/Users/teddy/Downloads/decoded-reducer-234800-f5cfbc301aaf.json";

// Imports the Google Cloud client library
const { BigQuery } = require("@google-cloud/bigquery");

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Add routes, both API and view
app.use(routes);

// Connect to the Mongo DB
//mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/kt_database");

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});

// Creates a client
const bigquery = new BigQuery();

async function query() {
  // The SQL query to run
  const sqlQuery = `SELECT
    CONCAT(
      'https://stackoverflow.com/questions/',
      CAST(id as STRING)) as url,
    view_count
    FROM \`bigquery-public-data.stackoverflow.posts_questions\`
    WHERE tags like '%google-bigquery%'
    ORDER BY view_count DESC
    LIMIT 10`;

  const options = {
    query: sqlQuery,
    // Location must match that of the dataset(s) referenced in the query.
    location: "US"
  };

  // Runs the query
  const [rows] = await bigquery.query(options);

  console.log("Query Results:");
  rows.forEach(row => {
    const url = row["url"];
    const viewCount = row["view_count"];
    console.log(`url: ${url}, ${viewCount} views`);
  });
}

// NOTE!: un-comment this line to log big query response data
query(...process.argv.slice(2)).catch(console.error); 
