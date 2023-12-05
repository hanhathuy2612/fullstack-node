import express, {static as staticLib, urlencoded} from 'express';
import path, {join} from 'path';
import {fileURLToPath} from 'url';
import * as Mysql from "./mysql-connection.cjs";
import {ProductController} from "./controllers/product.controller.cjs";
import bodyParser from "body-parser";
import cors from "cors";
import mainRoutes from "./router/main.router.cjs";

const app = express()
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const corsOptions = {
  origin: "http://locahost:3001",
  methods: "*",
  allowedHeaders: "*",
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}
app.use(cors(corsOptions));

app.use(urlencoded({extended: true}));
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.json())

app.use('/js', staticLib(join(__dirname, 'js')));
app.use('/css', staticLib(join(__dirname, 'css')));

app.set('view engine', 'ejs');

app.use(mainRoutes);



app.use((req, res) => {
  res.status(404).send("<h1>Page Not Found</h1>");
  res.status(403).send("<h1>Page Not Found</h1>");
  res.status(500).send("<h1>Server has error</h1>");
})

app.listen(3001, () => {
  console.log(`Server running on port ${3001}`)
})

Mysql.mysqlConnection();


