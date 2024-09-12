import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
const port = 3000;
var userIsAuthorised = false;

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
  });

app.use(bodyParser.urlencoded({ extended: true }));

app.use(passwardCheck)

app.get("/",(req,res)={
    res.sendFile(__dirname + "/public/index.html");
})