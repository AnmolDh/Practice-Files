const { MongoClient } = require("mongodb");

// Replace the uri string with your connection string.
const uri = "mongodb://localhost:27017";

const client = new MongoClient(uri);

async function run() {
    try {
        console.log("Connected");
        
        // create a database
        const database = client.db('fruitDB');

        // create a collection
        const fruits = database.collection("fruits");

        // create a document to insert
        const fruit = [
            {
                name: "Apple",
                score: 8
            },
            {
                name: "Orange",
                score: 7
            },
            {
                name: "Banana",
                score: 9
            }
        ];

        // this option prevents additional documents from being inserted if one fails
        const options = { ordered: true };

        // const result = await fruits.insertMany(fruit, options);
        // console.log(`${result.insertedCount} documents were inserted`);



        // Query for a movie that has the title 'The Room'
        const query = { score: { $gt: 7 } };
        const queryOptions = {
            // sort returned documents in ascending order by title (A->Z)
            sort: { score: 1 },
            // Include only the `title` and `imdb` fields in each returned document
            projection: { _id: 0, name: 1, score: 1 },
        };

        const queryResult = fruits.find(query, queryOptions);

        // print a message if no documents were found
        if ((await fruits.countDocuments(query)) === 0) {
            console.log("No documents found!");
        }
        for await (const doc of queryResult) {
            console.dir(doc);
        }

    } finally {
        // Ensures that the client will close when you finish/error
        await client.close();
    }
}
run().catch(console.dir);