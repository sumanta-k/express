import express from "express";
import { startups } from "./data/data.js";

const PORT = 8000;

const celebrity = {
	type: "action hero",
	name: "JSON Statham"
};

const app = express();

app.get("/api", (req, res) => {
	res.json(startups);
});

app.get('/', (req, res) => {
	res.json(celebrity);
});

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
