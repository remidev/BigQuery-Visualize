// Enable Strict Mode
("use strict");

// Require Dependencies
const indico = require("indico.io");
const router = require("express").Router();
const { BigQuery } = require("@google-cloud/bigquery");

// Set Credentials
const path = "/Users/kevinz/Downloads/decoded-reducer-234800-b532ca7bb227.json";
// const path = "/Users/teddy/Downloads/decoded-reducer-234800-2ce3ab5dfcc0.json";
process.env.GOOGLE_APPLICATION_CREDENTIALS = path;
indico.apiKey = "84c0bce00bc55ebb8c950f6e351eee4d";

//==========================================================================================================================================

function getEmotion(input) {
  return new Promise(resolve => {
    var logError = function(err) {
      console.log(err);
    };

    indico
      .emotion(input)
      .then(function(response) {
        let emotion = Object.keys(response).reduce((a, b) =>
          response[a] > response[b] ? a : b
        );
        resolve(emotion); //anger, fear, joy, sadness, surprise
      })
      .catch(logError);
  });
}

//==========================================================================================================================================

async function query(source, contentType, Xaxis, content1, content2, year) {
  // Instantiate BigQuery Client
  const bigquery = new BigQuery();
  // Init SQL Query String
  var sqlQuery = "";

  // Reddit
  if (source === "fh-bigquery.reddit_") {
    // Content 1 contains string type...
    if (content1 === "subreddit" || "author" || "body") {
      // avoid string conversion, order by content 2 instead.
      //=============================================================
      sqlQuery = `
                  SELECT
                    ${Xaxis},
                    ${content1},
                    ${content2}
                  FROM 
                    \`${source}${contentType}.${year}\`
                  ORDER BY 
                    ${content2} DESC
                  LIMIT
                    20
                `;
      //=============================================================
      // Content 2 contains string type...
    } else if (cotent2 === "subreddit" || "author" || "body") {
      // order by content 1
      //=============================================================
      sqlQuery = `
                  SELECT
                    ${Xaxis},
                    ${content1},
                    ${content2}
                  FROM 
                    \`${source}${contentType}.${year}\`
                  ORDER BY 
                    ${content1} DESC
                  LIMIT
                    20
                `;
      //=============================================================
      //Both contain string values...
    } else if (
      (content1 === "body" || "author" || "subreddit") &&
      (content2 === "body" || "author" || "subreddit")
    ) {
      // Order by X Axis, (Always Date/Time)
      //=============================================================
      sqlQuery = `
                  SELECT
                    ${Xaxis},
                    ${content1},
                    ${content2}
                  FROM 
                    \`${source}${contentType}.${year}\`
                  ORDER BY 
                    ${Xaxis} DESC
                  LIMIT
                    20
                `;
      //=============================================================
      // If neither...
    } else {
      // Order by both
      //=============================================================
      sqlQuery = `
                  SELECT
                    ${Xaxis},
                    ${content1},
                    ${content2}
                  FROM 
                    \`${source}${contentType}.${year}\`
                  ORDER BY 
                    ${content1},${content2} DESC
                  LIMIT
                    20
                `;
      //=============================================================
    }

    console.log(sqlQuery);

    // datasource is stackoverflow
  } else {
    // stackoverflow comments
    if (contentType === "comments") {
      //=============================================================
      sqlQuery = `
                  SELECT
                    creation_date,
                    ${content1},
                    ${content2}
                  FROM 
                    \`${source}${contentType}\`
                  WHERE
                    EXTRACT( YEAR FROM creation_date) = ${year}
                  ORDER BY 
                    ${content1} DESC
                  LIMIT
                    20
                `;
      //=============================================================

      // stackoverflow posts
    } else if (contentType === "stackoverflow_posts") {
      //=============================================================
      sqlQuery = `
                  SELECT
                    creation_date,
                    ${content1},
                    ${content2}
                  FROM
                    \`${source}${contentType}\`
                  WHERE 
                    ${content1} IS NOT NULL
                    AND ${content2} IS NOT NULL
                    AND EXTRACT( YEAR FROM creation_date) = ${year}
                  ORDER BY
                    ${content1} DESC
                  LIMIT 
                    200
                `;
      //=============================================================
    }
  }

  /*
===========================================================
SELECT
  creation_date,
  view_count,
  answer_count,
  EXTRACT( YEAR FROM creation_date) as year_created
FROM
  `bigquery-public-data.stackoverflow.stackoverflow_posts`
WHERE
  view_count IS NOT NULL
  AND answer_count IS NOT NULL
  AND EXTRACT( YEAR FROM creation_date) = 2009
ORDER BY
  answer_count DESC
LIMIT
  1000
===========================================================
*/

  const options = {
    query: sqlQuery,
    location: "US"
  };

  try {
    console.log("Query @ Execution: ", options.query);
    const [rows] = await bigquery.query(options);
    return [rows];
  } catch (err) {
    console.log(err);
  }
}

//==========================================================================================================================================

router.post("/api/give", function(req, res) {
  params = req.body.queryInfo;

  // Execute query with retrieved params
  query(
    params.Source,
    params.ContentType,
    params.XAxis,
    params.Content1,
    params.Content2,
    params.Year
  ).then(queryResponse => {
    var objArr = queryResponse[0];
    console.log("BigQuery Response: ", objArr);
    res.json(queryResponse);
  });
});

module.exports = router;
//==========================================================================================================================================
