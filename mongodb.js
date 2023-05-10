//CRUD create read update delete

const { MongoClient, ObjectId } = require('mongodb');

const connectionUrl = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'
const client = new MongoClient(connectionUrl);
const name = 'tasks'
/*
const id = new ObjectId();
console.log(id.toHexString())
*/
async function main() {

    await client.connect();
  //  console.log('Connected successfully to server');
    const db = client.db(databaseName);
  
   /* 
    await db.collection('users').deleteMany({
      age: 25
    }).then(result => {
      console.log(result)
    })
    .catch(error => {
      console.error("Error al eliminar el documento: ", error);
    });
  */
    await db.collection('tasks').deleteOne({ 
      description: "desayunar" 
    }).then(result => {
      console.log(result)
    })
    .catch(error => {
      console.error("Error al eliminar el documento: ", error);
    });

/*
 await db.collection('users').updateOne({
      _id: new ObjectId("64552e53fb3537aed921a063")
    }, {
      $inc: {
        age: 1
      }
    }).then(result => {
      console.log(result)
    })
    .catch(error => {
      console.error("Error al actualizar el documento: ", error);
    });

    await db.collection('tasks').updateMany({
      completed: false
    }, {
      $set: {
        completed: true
      }
    }).then(result => {
      console.log(result)
    })
    .catch(error => {
      console.error("Error al actualizar el documento: ", error);
    });




   await db.collection('users').findOne({
        age: { $eq: 26 }
    }).then(result => {
        if(result) console.log(result);
        
        else console.log('no se encontraron resultados')
      })
      .catch(error => {
        console.error("Error al buscar el documento: ", error);
      });

      await db.collection('users').find({ age:{ $type: "number", $nin: [19, 26] }}).toArray()
      .then(results => {
        if (results.length > 0) {
          results.forEach(doc => console.log(doc));
        } else {
          console.log('No se encontraron resultados');
        }
      })
      .catch(error => {
        console.error("Error al buscar el documento: ", error);
      });

      await db.collection('tasks').find({ completed: {$eq: false }}).toArray()
      .then(results => {
        if (results.length > 0) {
          results.forEach(doc => console.log(doc));
        } else {
          console.log('No se encontraron resultados');
        }
      })
      .catch(error => {
        console.error("Error al buscar el documento: ", error);
      });
   




    await db.collection('users').insertOne({
        name: "Soke",
        age: 26
    });

    await db.collection('users').insertMany([
        {
            name: "ruben castro",
            age: 19
        },
        {
            name: "jose luis",
            age: 26
        },
        {
            name: "ron",
            age: 25
        }
    ])

    await db.collection('tasks').insertMany([
        {
            description: 'ir al trabajo',
            completed: true
        },
        {
            description: 'dormir',
            completed: false
        },
        {
            description: 'desayunar',
            completed: true
        }
    ])
*/
    return 'done.';
}
  
  main()
    .then(console.log)
    .catch(console.error)
    .finally(() => client.close());