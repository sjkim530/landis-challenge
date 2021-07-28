const express = require("express");
const morgan = require("morgan");
const PORT = process.env.PORT || 3000;

const app = express();

// logging middleware
app.use(morgan("dev"));

// body parsing middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// error handler
app.use((err, req, res, next) => {
  console.error(err);
  console.error(err.stack);
  res.status(err.status || 500).send(err.message || "Internal server error.");
});

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
