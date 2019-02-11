const mongoose = require('mongoose')
const Schema = mongoose.Schema

const geoSchema = new Schema({
    type: {
        type: String,
        default: 'Point'
    },
    coordinates: {
        type: [Number],
        index: "2dsphere"
    }
})

const ninjaSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    rank: {
        type: String
    },
    available: {
        type: Boolean,
        default: true
    },
    geometry: geoSchema
})

module.exports = mongoose.model('Ninja', ninjaSchema)