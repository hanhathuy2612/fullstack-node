import express, {static as staticLib, urlencoded} from 'express';
import path, {join} from 'path';
import {fileURLToPath} from 'url';
import cors from "cors";

const app = express()
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const corsOptions = {
  origin: "*",
  methods: "*",
  allowedHeaders: "*",
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

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

app.get('/api/people/:id', (request, response) => {
  console.log("request: ", request.body)
  console.log("request: ", request.query)
  console.log("request: ", request.params.id)
  response.json(people)
})

app.get("/api/products", (_, res) => {
  const listProducts = Array(10).fill(null).map(
    (_, index) => ({
      name: `Áo Thun ${index + 1}`,
      imageUrl: "https://pos.nvncdn.net/492284-9176/ps/20231014_HrqUH8Savu.jpeg"
    })
  );
  res.json(listProducts);
})

const PORT = 3001

app.use(urlencoded({extended: true}));
app.use('/js', staticLib(join(__dirname, 'js')));
app.use('/css', staticLib(join(__dirname, 'css')));
// app.use(cors(corsOptions));

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
