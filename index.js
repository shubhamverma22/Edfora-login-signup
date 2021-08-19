require("dotenv").config();

const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cookieparser = require("cookie-parser");

const PORT = 5050;

//Routes
const authRoutes = require("./routes/auth");
const userRoutes = require("./controllers/user");

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

//My Routes
app.use("/api", authRoutes);
// app.use("/api", userRoutes);

app.listen(PORT, () => {
	console.log(`App is Running at the Port:${PORT}`);
});
