const http = require("http");

const options = {
  host: "0.0.0.0",
  port: process.env.PORT || 3001,
  timeout: 2000,
  path: "/_health",
};

const request = http.request(options, (res) => {
  process.exit(res.statusCode === 200 ? 0 : 1);
});

request.on("error", function (err) {
  console.error("ERROR");
  process.exit(1);
});

request.end();
