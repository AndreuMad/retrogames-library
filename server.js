import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import morgan from 'morgan';
// "C:\Program Files\MongoDB\Server\3.4\bin\mongod.exe"

// We gotta import our models and routes
import Game from './app/models/game';
import { getGames, getGame, postGame, deleteGame } from './app/routes/game';

const app = express(); // Express server
const port = process.env.PORT || 8080;

// DB connection throw Mongoose

const options = {
    server: { socketOptions: { keepAlive: 1, connectTimeoutMS: 30000 } },
    replset: { socketOptions: { keepAlive: 1, connectTimeoutMS: 30000 } }
}; // just a bunch of options for the db connection

// Don't forget to substitute it with your connection string
mongoose.connect(/*'YOUR_MONGO_CONNECTION'*/ 'mongodb://localhost/retrogames', options);

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

// Body parser and Morgan middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(morgan('dev'));

// We tell express where to find static assets
app.use(express.static(__dirname + '/client/dist'));

// Enable CORS so that we can make HTTP request from webpack-dev-derver
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'GET,POST,DELETE');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

// API routes
app.route('/games')
    //create a game
    .post(postGame)
    //get all the games
    .get(getGames);

app.route('/games/:id')
    // get a single game
    .get(getGame)
    // Delete a single game
    .delete(deleteGame);

// .. For all the other requests just sends back the Homepage
app.route('*').get((req, res) => {
    res.sendFile('client/dist/index.html', { root: __dirname });
});

app.listen(port);

console.log(`listening on port ${port}`);