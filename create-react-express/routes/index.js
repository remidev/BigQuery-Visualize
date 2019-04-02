// Enable Strict Mode
// ("use strict");
const { BigQuery } = require("@google-cloud/bigquery");
var indico = require("indico.io");
indico.apiKey = "84c0bce00bc55ebb8c950f6e351eee4d";

// Set Credentials
// const path = "/Users/teddy/Downloads/decoded-reducer-234800-2ce3ab5dfcc0.json";
const path = "/Users/kevinz/Downloads/decoded-reducer-234800-b532ca7bb227.json";
process.env.GOOGLE_APPLICATION_CREDENTIALS = path;

const router = require("express").Router();

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
};

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
  // console.log(
  //   `SELECT ${Xaxis},${content1},${content2} FROM \`${source}${contentType}.${year}\`LIMIT 10`
  // );
  const options = {
    query: sqlQuery,
    location: "US"
  };
  const [rows] = await bigquery.query(options);
  return [rows];
}

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
  ).then(function(resOfQuery) {
    var innerArr = resOfQuery[0];

    // if (
    //   Object.keys(innerArr[0])[1] === "body" ||
    //   Object.keys(innerArr[0])[1] === "author" ||
    //   Object.keys(innerArr[0])[1] === "subreddit"
    // ) {
    //   innerArr.map(j => {
    //     var value1 = Object.values(j)[1];

    //     var emotionKK = async function(valueOfEmotion) {
    //       var emotionSS = await getEmotion(valueOfEmotion);
    //       return emotionSS;
    //     };

    //     emotionKK(value1).then(function(result) {
    //        console.log(result); //This Will Return Sadness or Whatever Emotion
    //        typeof result == "string" ? j.emotion = result : j.emotion = "N/A"; 
    //       //  console.log(j);
    //     });
    //   });
    // }

  //   Promise.all(promises).then(function() {
  // }, function(err) {
  //   res.json(resOfQuery);
  // });

  // Promise.all([getEmotion(), emotionKK()]).then(function(values) {
  //   console.log("HI PROMISESS DOENIDEONDOEN");
  // });
      res.json(resOfQuery);

  });
});

module.exports = router;



// Catch query params from front-end

// router.post("/api/give", async function (req, res) {
//   params = req.body.queryInfo;
//   // Execute query with retrieved params
//   const resOfQuery = await query(
//     params.Source,
//     params.ContentType,
//     params.XAxis,
//     params.Content1,
//     params.Content2,
//     params.Year
//   );

//   var innerArr = resOfQuery[0];

//   if (
//     Object.keys(innerArr[0])[1] === "body" ||
//     Object.keys(innerArr[0])[1] === "author" ||
//     Object.keys(innerArr[0])[1] === "subreddit"
//   ) {
//     const queryResut = innerArr.map(async j => {
//       var result = await getEmotion(Object.values(j)[1])
//       typeof result == "string" ? j.emotion = result : j.emotion = "N/A";
//     })
//     console.log(queryResut)
//     res.json(queryResut)
//   }
// });
// module.exports = router;