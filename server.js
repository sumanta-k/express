import express from "express";
import { startups } from "./data/data.js";
import { people } from "./data/people.js";

const PORT = 8000;

const celebrity = {
	type: "action hero",
	name: "JSON Statham"
};

const app = express();

app.get("/people", (req, res) => {
	console.log(req.query);
	res.json(people);
});

app.get("/api", (req, res) => {
	// TODO: based on the query serve the data to user
	/*
	Challenge:
	1. When a user hits the /api endpoint with query params, filter the data so 
	we only serve objects that meet their requirements. 
		 
	The user can filter by the following properties:
	  industry, country, continent, is_seeking_funding, has_mvp
	
	Test Cases
	
	/api?industry=renewable%20energy&country=germany&has_mvp=true
	  Should get the "GreenGrid Energy" object.
	
	/api?industry=renewable%20energy&country=germany&has_mvp=false
	  Should not get any object
	
	/api?continent=asia&is_seeking_funding=true&has_mvp=true
	  should get for objects with IDs 3, 22, 26, 29
	*/
	res.json(startups);
});

app.get('/', (req, res) => {
	res.json(celebrity);
});

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
