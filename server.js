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
	let filteredData = startups;
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
	console.log(req.query);
	let { industry, country, continent, is_seeking_funding, has_mvp
	} = req.query;
	if (industry) {
		filteredData = filteredData.filter((data) => {
			return data.industry.toLowerCase() === industry.toLowerCase();
		})
	}
	if (country) {
		filteredData = filteredData.filter((data) => {
			return data.country.toLowerCase() === country.toLowerCase();
		})
	}
	if (continent) {
		filteredData = filteredData.filter((data) => {
			return data.continent.toLowerCase() === continent.toLowerCase();
		})
	}
	if (is_seeking_funding) {
		filteredData = filteredData.filter((data) => {
			return data.is_seeking_funding === JSON.parse(is_seeking_funding);
		})
	}
	if (has_mvp) {
		filteredData = filteredData.filter((data) => {
			return data.has_mvp === JSON.parse(has_mvp);
		})
	}
	res.json(filteredData);
});

app.get('/', (req, res) => {
	res.json(celebrity);
});

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
