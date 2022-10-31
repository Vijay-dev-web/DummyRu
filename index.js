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

app.listen(port, () => {
  console.log("Server active at port", port);
)
