const { MongoClient } = require("mongodb");
const uri = require("./atlas_uri");

console.log(uri);

const client = new MongoClient(uri);
const dbname = "bank";

const connectToDatabase = async () => {
  try {
    await client.connect();
    console.log(`Connected to ${dbname} database`);
  } catch (err) {
    console.log(`error connecting to DB: ${dbname}`);
  }
};

const main = async () => {
  try {
    await connectToDatabase();
  } catch (err) {
    console.log(`Error connecting to ${dbname}`);
  } finally {
    await client.close();
  }
};
main();
