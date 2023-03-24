const mongoose = require('mongoose');

const {schema} = mongoose;

const UserSchema = new schema({
    name: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    emial: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    date: {
        type: DataTransfer,
        default: Date.now
    }

});

module.exports = mongoose.model('user', UserSchema);