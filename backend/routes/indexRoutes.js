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

    // -> id -> localhost:3000/:id -> fetch o axios
    config(){
        // localhost:3000/
        this.router.get('/', indexController.list);
        // localhost:3000/:id
        // localhost:3000/usuarioRandom12358
        this.router.get('/:id', indexController.getOne);
        // localhost:3000/ <- Creates
        this.router.post('/', indexController.create);
        // localhost:3000/ <- Updates
        this.router.put('/', indexController.create);
        // localhost:3000/ <- Delete
        this.router.put('/', indexController.create);
    }
}

const indexRoutes = new IndexRoutes();
module.exports = indexRoutes.router;