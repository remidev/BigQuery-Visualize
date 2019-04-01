// Enable Strict Mode
// ("use strict");
const { BigQuery } = require("@google-cloud/bigquery");
var indico = require("indico.io");
indico.apiKey = "84c0bce00bc55ebb8c950f6e351eee4d";

// Set Credentials
const path = "/Users/teddy/Downloads/decoded-reducer-234800-2ce3ab5dfcc0.json";
// const path = "/Users/kevinz/Downloads/decoded-reducer-234800-b532ca7bb227.json";
process.env.GOOGLE_APPLICATION_CREDENTIALS = path;

const router = require("express").Router();

//emotions returned:
//anger, fear, joy, sadness, surprise
function getEmotion(input) {
  // var response = function(res) {
  //   console.log(res);
  // };
  var logError = function(err) {
    console.log(err);
  };

  // single example
  indico
    .emotion(input)
    .then(function(response) {
      //console.log(response);

      //return the name of the key with the highest value
      let emotion = Object.keys(response).reduce((a, b) =>
        response[a] > response[b] ? a : b
      );
      // console.log(typeof emotion, emotion);
      return emotion;
      // console.log(responseect.keys(response)[0]);
    })
    .catch(logError);
}

async function query(source, contentType, Xaxis, content1, content2, year) {
  // Instantiate BigQuery Client
  const bigquery = new BigQuery();
  // SQL Query String
  var sqlQuery = "";

  if (content1 === "subreddit" || "author" || "body") {
    sqlQuery = `SELECT ${Xaxis},${content1},${content2} FROM \`${source}${contentType}.${year}\`ORDER BY ${content2} ASC LIMIT 20`;
  } else if (cotent2 === "subreddit" || "author" || "body") {
    sqlQuery = `SELECT ${Xaxis},${content1},${content2} FROM \`${source}${contentType}.${year}\`ORDER BY ${content1} ASC LIMIT 20`;
  } else if (
    cotent2 === "subreddit" ||
    "author" ||
    ("body" && content1 === "subreddit") ||
    "author" ||
    "body"
  ) {
    sqlQuery = `SELECT ${Xaxis},${content1},${content2} FROM \`${source}${contentType}.${year}\`LIMIT 20`;
  } else {
    sqlQuery = `SELECT ${Xaxis},${content1},${content2} FROM \`${source}${contentType}.${year}\`ORDER BY ${content1},${content2} ASC LIMIT 20`;
  }
  console.log(
    `SELECT ${Xaxis},${content1},${content2} FROM \`${source}${contentType}.${year}\`LIMIT 10`
  );
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
    var innerArr = resOfQuery[0];
    //console.log(Object.keys(innerArr[0])[1]);
    if (
      Object.keys(innerArr[0])[1] === "body" ||
      Object.keys(innerArr[0])[1] === "author" ||
      Object.keys(innerArr[0])[1] === "subreddit"
    ) {
      // console.log( await getEmotion("Hello"));
      // innerArr.map(j => {
      //   var value1 = Object.values(j)[1];
      //   //console.log(value1);
      //   //console.log("get emotion:", getEmotion(value1));
      //   // console.log("j.emotion: ", j.emotion);\
      //   console.log(typeof getEmotion(value1), getEmotion(value1));
      //   if (typeof getEmotion(value1) === "string") {
      //     j.emotion = "hello";
      //     //j.emotion = getEmotion(value1);
      //   } else {
      //     j.emotion = "N/A";
      //   }
      // });
    }
    console.log(resOfQuery);
    res.json(resOfQuery);
  });
});

// getEmotion();

module.exports = router;

// for (var key in innerArr) {
//   if (responseect.prototype.hasOwnProperty.call(innerArr, key)) {
//     var val = innerArr;
//     //console.log(Object.keys(val));
//     var body1 = Object.keys(val)[1];
//     var body2 = Object.keys(val)[2];
//     //console.log(body1, body2);
//   }
// }

//console.log(innerArr.length);
// for (let i = 0; i < innerArr.length; i++) {
//   //console.log("Keys: ", Object.keys(innerArr[i]));
//   for (var property in innerArr) {
//     if (innerArr.hasOwnProperty(property)) {
//       if (property === "body") {
//         console.log("Property === body");
//         console.log(innerArr.body);
//         if (
//           innerArr.body !== (null || "deleted") ||
//           innerArr.body.length > 10
//         ) {
//           console.log("success");
//           console.log(innerArr.body);
//         }
//       }
//     }
//   }
// }
