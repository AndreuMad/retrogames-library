// Dependencies
import mongoose from 'mongoose';
const Schema = mongoose.Schema;

// Our schema definition
const gameSchema = new Schema({
    name: String,
    year: Number,
    description: String,
    picture: String,
    postDate: {type: Date, default: Date.now} // timestamp
});

export default mongoose.model('Game', gameSchema);
