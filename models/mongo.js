"use strict";
const mongo = require("mongodb").MongoClient;
const dsn = "mongodb://localhost:27017/chat";
const colName = "chat";


module.exports =  {





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
