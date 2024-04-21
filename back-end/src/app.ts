import express from "express";

const port: number = 4000;

const app = express();

app.listen(port, () => {
  console.log(`server running on http://localhost:${port}`);
});
