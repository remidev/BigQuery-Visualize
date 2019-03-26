// Enable Strict Mode
//========================================================================
("use strict");
//========================================================================

// Require Dependencies
//========================================================================
const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");
const { BigQuery } = require("@google-cloud/bigquery");
//========================================================================

// Instantiate Express App
//========================================================================
const app = express();
//========================================================================

// Configure Port For Local/Heroku
//========================================================================
const PORT = process.env.PORT || process.argv[2] || 8080;
//========================================================================

// Instantiate Google BigQuery Client
//========================================================================
const bigquery = new BigQuery();
//========================================================================

// Middleware
//========================================================================
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);
//========================================================================

// Mongoose Connection
//========================================================================
const URI = process.env.MONGODB_URI || "mongodb://localhost/database";

const options = {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false
};

// Attempt Connection
mongoose.connect(URI, options).then(
  result => {
    // Connection Success
    console.log(
      `Connected to database '${result.connections[0].name}' on ${
        result.connections[0].host
      }:${result.connections[0].port}`
    );
  },
  err => {
    // Connection Fail
    console.log("There was an error with your connection:", err);
  }
);
//========================================================================

// Express Connection
//========================================================================
app.listen(PORT, function() {
  console.log(
    `🌎  ==> API Server now listening on port ${PORT} at localhost:${PORT}`
  );
});
//========================================================================

// Google BigQuery Query Code [!MOVE THIS ELSEWHERE!]
//========================================================================

// Asynchronous query function
//============================
async function query() {
  // SQL Query String
  const sqlQuery = `#Query-Goes-Here`;
  // Query Options,
  // See link for list of options:

  const options = {
    query: sqlQuery,
    location: "US"
  };

  // Runs and stores the query results
  const [rows] = await bigquery.query(options);

  console.log("Query Results:");
  rows.forEach(row => {
    // Accessing the data within the rows
    const url = row["url"];
    const viewCount = row["view_count"];
    console.log(`url: ${url}, ${viewCount} views`);
  });
}

// Query function call
//query().catch(console.error);

// __BigQuery Code Snippets__
//========================================================================

// Alternate query with cmd line params
//query(...process.argv.slice(2)).catch(console.error);

// Query Option Params
// Full list & Explanation here:
// https://cloud.google.com/bigquery/docs/reference/rest/v2/jobs/query#request-body

// Example Query
/*
`
SELECT
  CONCAT( 'https://stackoverflow.com/questions/', CAST(id AS STRING) ) AS url,
  view_count
FROM
  `bigquery-public-data.stackoverflow.posts_questions`
WHERE
  tags LIKE '%google-bigquery%'
ORDER BY
  view_count DESC
LIMIT
  10
`
*/

//========================================================================
