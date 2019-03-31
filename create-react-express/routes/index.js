// Enable Strict Mode
("use strict");
const { BigQuery } = require("@google-cloud/bigquery");

// Set Credentials
//const path = "C:/Users/teddy/Downloads/decoded-reducer-234800-f824d46ed564.json";
const path = "/Users/kevinz/Downloads/decoded-reducer-234800-b532ca7bb227.json";
process.env.GOOGLE_APPLICATION_CREDENTIALS = path;

const router = require("express").Router();

async function query(source, contentType, Xaxis, content1, content2, year) {
  // Instantiate BigQuery Client
  const bigquery = new BigQuery();
  // SQL Query String
  var sqlQuery = `SELECT ${Xaxis},${content1},${content2} FROM \`${source}${contentType}.${year}\`ORDER BY ${content1},${content2} ASC LIMIT 20`;
  console.log(
    `SELECT ${Xaxis},${content1},${content2} FROM \`${source}${contentType}.${year}\`LIMIT 10`
  );
  // Query Options,
  const options = {
    query: sqlQuery,
    location: "US"
  };
  const [rows] = await bigquery.query(options);
  return [rows];
}

// Catch query params from front-end
router.post("/api/give", function(req, res) {
  console.log(req.body.queryInfo);
  params = req.body.queryInfo;

  // Execute query with retrieved params
  query(
    params.Source,
    params.ContentType,
    params.XAxis,
    params.Content1,
    params.Content2,
    params.Year
  ).then(function(resOfQuery) {
    // console.log(resOfQuery);
    // Return query function response
    res.json(resOfQuery);
  });
});

//emotions returned:
//anger, fear, joy, sadness, surprise
function getEmotion(inputStr) {
  // Emotion parser URL
  queryURL = "https://apiv2.indico.io/emotion";

  // Send user speech input
  $.post(
    queryURL,
    JSON.stringify({
      api_key: "84c0bce00bc55ebb8c950f6e351eee4d",
      data: inputStr,
      //only return values more than 0.1 (confidence threshold)
      threshold: 0.1
    })
  ).then(function(response) {
    //return the name of the key with the highest value
    let obj = response.results;
    let emotion = Object.keys(obj).reduce((a, b) => (obj[a] > obj[b] ? a : b));
    return emotion;
  });
}

module.exports = router;
