// Enable Strict Mode
("use strict");

// Require Dependency
const { BigQuery } = require("@google-cloud/bigquery");

// Instantiate Google BigQuery Client
const bigquery = new BigQuery();

// Set Credentials
const path =
  "C:/Users/teddy/Downloads/decoded-reducer-234800-f824d46ed564.json";
process.env.GOOGLE_APPLICATION_CREDENTIALS = path;

//example url: localhost:3030/api/reddit/comments/score&created_utc

// Query Function
// take in params for:
// SELECT [[x][y][z]]
// FROM \`[project-id].[dataset].[table]\`
// WHERE [] [operator] []

// dummy input
projectId = "fh-bigquery";
datasetId = "reddit_comments";
tableId = "2005";
colNames = ["score", "ups", "downs"];

function buildQueryURL(projectId, datasetID, tableID, colNames) {
  const tilde = "`";
  const tildeEsc = "`";
  const emptyQuery = ``;
  const select = "SELECT";
  const columnNames = ["", ""];
}

async function query() {
  // SQL Query String
  const sqlQuery = `
  SELECT
    author,
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
