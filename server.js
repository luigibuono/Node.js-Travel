const app = require("./app");
const { connect, disconnect } = require("./database");

connect();

app.listen(3000, () => console.log("Server is listening on port 3000"));
