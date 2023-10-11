import expresse from 'express';
import http from 'http';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import compression from 'compression';
import cors from 'cors'
import mongoose from 'mongoose';
import router from './router';


const app = expresse()

app.use(cors({
    credentials:true
}))

app.use(compression())
app.use(cookieParser())
app.use(bodyParser.json())

const server = http.createServer(app);
server.listen(3000,() => {
    console.log("Server running")
})

mongoose.Promise = Promise
mongoose.set('strictQuery', true);
mongoose.connect("mongodb+srv://badiniibrahim:SA3Bkfn3snFqP5I3@cluster0.v7hitmq.mongodb.net/?retryWrites=true&w=majority")
mongoose.connection.on('Error', (error:Error) => console.log(error))

app.use('/', router())