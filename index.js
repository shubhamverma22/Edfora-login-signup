require("dotenv").config();

const express = require("express");
const app = express();
const mongoose = require("mongoose");
const logger = require("morgan");
const createError = require("http-errors");
const cookieparser = require("cookie-parser");

const PORT = process.env.PORT || 5050;

//Logger
app.use(logger("tiny"));

//Routes
const authRoutes = require("./routes/auth");
const userRoutes = require("./routes/user");

//db Connections
mongoose
	.connect(process.env.DATABASE, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
		useCreateIndex: true,
	})
	.then(() => {
		console.log("DB CONNECTED");
	});

//App level Middleware
app.use(express.json());
app.use(cookieparser());

app.get("/", async (req, res, next) => {
	res.send("Hello Edfora");
});

//My Routes
app.use("/api", authRoutes);
app.use("/api", userRoutes);

//Error Handler for unwanted routes
app.use(async (req, res, next) => {
	next(createError.NotFound("This Route does not Exist"));
});
app.use((err, req, res, next) => {
	res.status(err.status || 500);
	res.send({
		error: {
			status: err.status || 500,
			message: err.message,
		},
	});
});

app.listen(PORT, () => {
	console.log(`App is Running at the Port:${PORT}`);
});
