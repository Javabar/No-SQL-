require("dotenv").config();
const {MongoClient} = require("mongodb")

const client = new MongoClient(process.env.MONGO_URI)

const connection = async () => {
    try{
        await client.connect();
        console.log("success");
        const db = client.db("files");
        return db.collection("files");
    } catch (error) {
    console.log(error);
}
}



//  use this function to check connection to db connection();


module.exports = {connection, client}

