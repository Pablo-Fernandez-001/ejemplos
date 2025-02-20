const express = require('express');
// controladores
const indexController = require('../controllers/indexController');

//rutas
// localhost:3000/-

class IndexRoutes {
    constructor(){
        this.router = express.Router();
        this.config();
    }

    config(){
        // localhost:3000/
        this.router.get('/',indexController.index);
    }
}

const indexRoutes = new IndexRoutes();
module.exports = indexRoutes.router;