const mongoose = require('mongoose');

const User=new mongoose.Schema({
    Name:String,
    Email:String,
    Password:String,
    Position:String,
    Address:String,
    Coor:String,
    text:String,
    age:String,
    sex:String,
    reason:String,
    amount:[String],
    time:[String],
    charity:String
});

module.exports = mongoose.model('User', User);