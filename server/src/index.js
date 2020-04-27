const express = require("express");
const serveStatic = require("serve-static");

const app = express();

const port = process.env.PORT || 8080;

app.use(serveStatic("src/public/", { index: ["index.html"] }));

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
