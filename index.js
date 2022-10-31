const express = require("express");
const app = express();
const port = process.env.PORT || 4000;

app.use("/", (req, res) > {
  res.send({
    status: 200,
    message: "Success"
  })
})

app.get('/home', (req, res) => {
  res.send({
      status: 200,
      message: "Added Home page"
  })
})

app.get('/hacktoberfest', (req, res) => {
  res.send({
      status: 200,
      message: "My First contribution to hacktoberfest! - 2022"
  })
})

app.listen(port, () => {
  console.log("Server active at port", port);
)
