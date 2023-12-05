import express, {static as staticLib, urlencoded} from 'express';
import path, {join} from 'path';
import {fileURLToPath} from 'url';
import * as Mysql from "./mysql-connection.cjs";
import {ProductController} from "./controllers/product.controller.cjs";
import bodyParser from "body-parser";
// import cors from "cors";

const app = express()
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.use(urlencoded({extended: true}));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json())
app.use('/js', staticLib(join(__dirname, 'js')));
app.use('/css', staticLib(join(__dirname, 'css')));

// const corsOptions = {
//   origin: "*",
//   methods: "*",
//   allowedHeaders: "*",
//   optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
// }


const people = [
  {
    name: "Hannah Rickard",
    number: "06-51-99-56-83",
    id: 1
  },
  {
    name: "Hyun Namkoong",
    number: "10987654",
    id: 2
  },
  {
    name: "Courtney Martinez",
    number: "3691215",
    id: 3
  }
]


app.get('/', (request, response) => {
  response.sendFile('views/index.html', {root: __dirname});
})

app.get("/api/products", [
  ProductController.list
]);

app.post("/api/products",  [ProductController.create])

const PORT = 3001


// app.use(cors(corsOptions));

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})

Mysql.mysqlConnection();


