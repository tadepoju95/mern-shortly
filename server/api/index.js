import 'dotenv/config';
import axios from 'axios';
import express from "express";
import cors from "cors";
import { MongoClient, ObjectId} from "mongodb";
import sanitizeHtml from "sanitize-html";
let db;

//const port = process.env.PORT will access the port variable from the config.env we’ll create next.
const PORT = process.env.PORT || 5050;


const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());


app.get("/api/links", async (req, res) => {
	const allLinks = await db.collection("links").find().toArray();
	console.log(allLinks);
	res.json(allLinks);
});


app.post("/create-link", cleanup, async (req, res) => {

	const info = await db.collection("links").insertOne(req.cleanData);
	const newLink = await db.collection("links").findOne({ _id: new ObjectId(info.insertedId) })
	res.send(newLink);
});



app.post('/api/v1/shorten', async (req, res) => {
    try {
        const { url } = req.body;
        if (!url) {
            return res.status(400).json({ error: 'URL is required' });
        }
        const response = await axios.post('https://cleanuri.com/api/v1/shorten', {
            url: url
        });
        res.status(200).json(response.data);
    } catch (error) {
        res.status(500).json({ error: 'Failed to shorten URL' });
    }
});


function cleanup(req, res, next) {
	if (typeof req.body.url != "string") req.body.url = ""
	if (typeof req.body.shorturl != "string") req.body.shorturl = ""
 	if (typeof req.body._id != "string") req.body._id = ""

 	req.cleanData = {
 		url: sanitizeHtml(req.body.url.trim(), { allowedTags: [], allowedAttributes: {} }),
    	shorturl: sanitizeHtml(req.body.shorturl.trim(), { allowedTags: [], allowedAttributes: {} })
 	}
 	next();
}


async function start() { 
	const client = new MongoClient(process.env.URI)
	await client.connect()
	db = client.db()
	app.listen(PORT)
}
start()



