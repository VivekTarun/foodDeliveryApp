const mongoose = require('mongoose')

const mongoURI = `mongodb+srv://gofood:gofood1234@gofood.lkgc13m.mongodb.net/gofoodmern?retryWrites=true&w=majority`;



const mongoDB = async() => {
    await mongoose.connect(mongoURI, {useNewUrlParser: true})
    console.log(mongoose.connection.readyState);

    const fetched_data = await mongoose.connection.db.collection("food_items")
    fetched_data.find({}).toArray((err, data) => {
        if(err)
        console.log(err);
        else 
        console.log(data);
    })
}

module.exports = mongoDB;



// ready states being:

// 0: disconnected
// 1: connected
// 2: connecting
// 3: disconnecting