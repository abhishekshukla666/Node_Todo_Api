const {MongoClient, ObjectId} = require('mongodb')

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to Mongodb Server')
    }

    console.log('Connected to MongoDB Server')

    // db.collection('Todos').findOneAndUpdate({
    //     _id: new ObjectId('5af06c1022aa6503af04172d')
    // },{
    //     $set: {
    //         completed: true
    //     }
    // }, {
    //     returnOriginal: false
    // }).then((result) => {
    //     console.log(result)
    // })

    db.collection('Users').findOneAndUpdate({
        _id: new ObjectId('5b0ec36bd09d83034422d109')
    }, {
        $set: { name: 'Abhishek Shukla' },
        $inc: { age: 1 }
    }, {
        returnOriginal: false
    }).then((result) => {
        console.log(result)
    })
    
    // db.collection('Todos').findOneAndUpdate({
    //     _id: new ObjectId('5af06c1022aa6503af04172d')
    // }).then((results) => {
    //     console.log(JSON.stringify(results, undefined, 2))
    // })
})