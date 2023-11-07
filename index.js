import express from "express";
import mongoDB from "./db.js";
import router from "./Routes/createUser.js";
import disp_router from "./Routes/DisplayData.js";
import order_router from "./Routes/OrderData.js";
const app = express();
const port = 5000;
mongoDB();

import cors from "cors";

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.send("Hello world");
});
app.use("/api", router);
app.use("/api", disp_router);
app.use("/api", order_router);
app.listen(port, () => {
  console.log(`app listening on port ${port}`);
});
