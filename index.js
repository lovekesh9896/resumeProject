const express = require("express");
const app = express();
const port = 3001;

app.use(express.urlencoded({ extended: false }));

app.use("/", require("./routes")); // telling app to use routes

app.use(express.static(__dirname + "/assets"));

// test commit
app.listen(port, function (err) {
	if (err) {
		console.log("Error in starting the server", err);
		return;
	}
	console.log("App is started on port ", port);
});
