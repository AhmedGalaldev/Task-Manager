const { MongoClient, ObjectID } = require("mongodb");

//const MongoClient = mongodb.MongoClient;
const id = new ObjectID();
console.log(id);

const connectionURL = "mongodb://127.0.0.1:27017";
const databaseName = "task-manager-app";

MongoClient.connect(
  connectionURL,
  { useNewUrlParser: true },
  (error, client) => {
    if (error) {
      return console.log("can not connect with database");
    }

    const db = client.db(databaseName);

    // start to interact with database

    // db.collection("users").insertOne({
    //   name: "Ahmed",
    //   age: 27,
    // });

    // db.collection("tasks").insertMany(
    //   [
    //     {
    //       description: "this is the first task",
    //       completed: true,
    //     },
    //     {
    //       description: "this is the second task",
    //       completed: false,
    //     },
    //   ],
    //   (error, result) => {
    //     if (error) {
    //       return console.log("can not insert many");
    //     }
    //     console.log(result.ops);
    //   }
    // );

    // db.collection("tasks")
    //   .find({ completed: false })
    //   .toArray((error, tasks) => {
    //     if (error) {
    //       return console.log("error");
    //     }
    //     console.log(tasks);
    //   });

    // db.collection("tasks").findOne(
    //   { _id: new ObjectID("5eff488b4340d82943c0960a") },
    //   (error, tasks) => {
    //     console.log(tasks);
    //   }
    // );

    // db.collection("users")
    //   .updateOne(
    //     { _id: new ObjectID("5eff46f9dac6e7289f1a9ca0") },
    //     {
    //       $inc: {
    //         age: 1,
    //       },
    //     }
    //   )
    //   .then((result) => {
    //     console.log(result);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });

    // db.collection("tasks")
    //   .updateMany(
    //     { completed: false },
    //     {
    //       $set: {
    //         completed: true,
    //       },
    //     }
    //   )
    //   .then((result) => {
    //     console.log(result);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });

    // db.collection("tasks")
    //   .deleteMany({ completed: true })
    //   .then((result) => {
    //     console.log(result);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });

    // db.collection("users")
    //   .deleteOne({ _id: new ObjectID("5eff46f9dac6e7289f1a9ca0") })
    //   .then((result) => {
    //     console.log(result);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
  }
);
