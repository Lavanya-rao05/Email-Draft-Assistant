const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const emailRoutes = require("./routes/emailRoutes");
const cors = require("cors");

dotenv.config();
const app = express();

app.use(express.json());

app.use(cors({
  origin: "*", // allow Vite dev server
}));


app.get("/", (req, res) => {
  res.send(`
    <h1>Email Draft Assistant API</h1>
    <p>Welcome! Use the endpoints to generate professional email drafts.</p>
  `);
});

app.use("/", emailRoutes);

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB connected");
    app.listen(process.env.PORT || 5000, () =>
      console.log(`Server running on port ${process.env.PORT || 5000}`)
    );
  })
  .catch((err) => console.log(err));
