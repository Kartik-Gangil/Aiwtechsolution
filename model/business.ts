import mongoose, { Schema } from 'mongoose'

const Business = new Schema({
    name: String,
    category: String,
    address: String,
    phoneNumber: String,
    website: String,
    description: String,
    timing: String,
    logo: String,
    coverImages: [String],
    googleMap: String,
    appleMap: String,
    yelp: String,
})

export default mongoose.models.Business || mongoose.model('Business', Business);