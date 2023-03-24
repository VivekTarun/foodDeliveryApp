// const mongoose = require('mongoose');
// const mongoURI = "mongodb+srv://gofood:gofood1234@gofood.lkgc13m.mongodb.net/?retryWrites=true&w=majority"

// // const mongoDB = async() => {
// //    await mongoose.connect(mongoURI, {useNewUrlParser: true}, (err, result) => {
// //         if(err)
// //         console.log("---", err);
// //         else
// //         console.log("connected");
// //     });

// // }




// module.exports = mongoDB;

const mongoose = require('mongoose')

const url = `mongodb+srv://gofood:gofood1234@gofood.lkgc13m.mongodb.net/?retryWrites=true&w=majority`;

const connectionParams={
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true 
}
mongoose.connect(url,connectionParams)
    .then( () => {
        console.log('Connected to the database ')
    })
    .catch( (err) => {
        console.error(`Error connecting to the database. n${err}`);
    })
