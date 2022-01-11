const mongoose = require('mongoose')
const itemSchema = new mongoose.Schema({
    name:String,
    age:String,
})
const itemModel = mongoose.model('/testexcel',itemSchema)
module.exports = itemModel