import express from "express";
import { startups } from "./data/data.js";
import { people } from "./data/people.js";

const PORT = 8000;

const celebrity = {
	type: "action hero",
	name: "JSON Statham"
};

const app = express();

app.get("/api/:category/:type", (req, res) => {
	let { category, type } = req.params;
	if (category.toLowerCase() === "crypto") {
		console.log({ category: "crypto-name", type: type });
	}
	if (category.toLowerCase() === "metals") {
		console.log(req.params);
	}
	res.json();
})

app.get("/people", (req, res) => {
	console.log(req.query);
	res.json(people);
});

app.get("/api", (req, res) => {
	let filteredData = startups;
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

app.listen(PORT, () => console.log(`Server is running on port ${PORT}. Use Ctrl + C to stop it.`));
