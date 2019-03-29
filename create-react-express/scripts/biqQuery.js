// Enable Strict Mode
("use strict");

// Require Dependency
const { BigQuery } = require("@google-cloud/bigquery");

// Instantiate Google BigQuery Client
const bigquery = new BigQuery();

// Set Credentials
//const path =
  //"C:/Users/teddy/Downloads/decoded-reducer-234800-f824d46ed564.json";
const path = "/Users/kevinz/Downloads/decoded-reducer-234800-b532ca7bb227.json"
process.env.GOOGLE_APPLICATION_CREDENTIALS = path;

// Query Function
// take in params for:
async function query() {
  // SQL Query String
  const sqlQuery = `
  SELECT
    ups,
    score
  FROM
  \`fh-bigquery.reddit_comments.2005\`
  LIMIT
    10
  `;

  // Query Options,
  const options = {
    query: sqlQuery,
    location: "US"
  };

  // Runs and stores the query results
  const [rows] = await bigquery.query(options);

  // Log response data
  // console.log("Query Results:");
  // console.log(rows);
  return [rows];
}

module.exports = query;
// Query function call
// query().catch(console.error);

// Resources
//===================================================================================

// -Query Option Params
// --https://cloud.google.com/bigquery/docs/reference/rest/v2/jobs/query#request-body

// -Uploading Credentials to Heroku
// --https://medium.com/@naz_islam/how-to-authenticate-google-cloud-services-on-heroku-for-node-js-app-dda9f4eda798

/*  `
  SELECT
    CONCAT( 'https://stackoverflow.com/questions/', CAST(id AS STRING) ) AS url,
    view_count,
    creation_date
  FROM
    \`bigquery-public-data.stackoverflow.posts_questions\`
  WHERE
    tags LIKE '%google-bigquery%'
  ORDER BY
    view_count DESC
  LIMIT
    10
  `; */

//===================================================================================
