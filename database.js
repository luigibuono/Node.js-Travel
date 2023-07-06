const mongoose = require("mongoose");
const { MongoMemoryServer } = require("mongodb-memory-server");

require("dotenv").config();

let mongoMock = null;

const connect = async () => {
  try {
    let uri = process.env.DB_URI;
    if (process.env.NODE_ENV === "test") {
      mongoMock = await MongoMemoryServer.create();
      uri = mongoMock.getUri();
    }
    const connected = await mongoose.connect(uri, {
      dbName: "TravelAgency",
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    console.log(`mongoDB connected: ${connected.connection.host}`);
  } catch (err) {
    console.log(err);
  }
};

const disconnect = async () => {
  try {
    await mongoose.connection.close();
    if (mongoMock) {
      await mongoMock.stop();
    }
  } catch (err) {
    console.log(err);
  }
};

module.exports = { connect, disconnect };
