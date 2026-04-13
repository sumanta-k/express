import express from "express";

const PORT = 8000;

const celebrity = {
	type: "action hero",
	name: "JSON Statham"
};

const app = express();

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
