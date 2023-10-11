import express from 'express';
import authentification from './authentication';
import users from './users';


const router = express.Router();

export default (): express.Router => {
    authentification(router);
    users(router)
    return router;
}