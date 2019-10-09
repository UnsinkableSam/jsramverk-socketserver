"use strict";
const mongo = require("mongodb").MongoClient;
const dsn = process.env.DBWEBB_DSN || "mongodb://localhost:27017/chat";
const colName = "chat";


module.exports =  {
    /**
     * Connect to the database and search using a criteria.
     */
    

    







    /**
     * Add informaiton to database.
     * 
     *
     * @async
     *
     * @param {string} dsn     DSN to connect to database.
     * @param {string} colName Name of collection.
     * @param {string} doc     Documents to be inserted into collection.
     *
     * @throws Error when database operation fails.
     *
     * @return {Promise<void>} Void
     */
    // async function addCollection(doc) {
    //     const client = await mongo.connect(dsn);
    //     const db = await client.db();
    //     const col = await db.collection(colName);

    //     await col.deleteMany();
    //     await col.insertMany(doc);

    //     await client.close();
    // }

    addCollection: async function (doc) {
        console.log(doc);
        const client = await mongo.connect(dsn);
        const db = await client.db();
        const col = await db.collection(colName);

        await col.deleteMany();
        await col.insertMany(doc);

        await client.close();
    },



        getAll: async function (doc) {
            const client = await mongo.connect(dsn);
            const db = await client.db();
            const col = await db.collection(colName);
            if (!client) {
                return "no client";
            }
            try {
                const db = client.db("testdb");
                return await col.find().toArray();
            } catch (err) {
                console.log(err);
            } finally {
                client.close();
            }
        }
       
    
}
