module.exports = {
	env: {
		apiURL: process.env.API_URL || "http://localhost:80",
		wheelApiURL:
			process.env.WHEEL_API_URL || "http://localhost:8000/src/app.php",
	},
};
