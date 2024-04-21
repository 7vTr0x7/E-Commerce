import express from "express";

//routes
import userRoute from "./routes/user.js";

const port: number = 4000;

const app = express();

//using routes
app.use("/api.v1/user", userRoute);

app.listen(port, () => {
  console.log(`server running on http://localhost:${port}`);
});
