//const user = require('../models/users');

class IndexController{

    async index(req, res){
        res.send('Hola Grupo');
    } 

    /* async createUser(req, res){
        //acciones
        try {
            const { id, name } = req.body; // <-json con todos los datos

            const newUser = new user({
                id: id,
                name: name
            });

            await newUser.insert('INSERT INTO users SET ?', newUser);
            res.status(201).json({message: 'User created'});

        } catch (error) {
            console.log(error);
            res.status(500).json(
                {
                    success:false, 
                    message: 'Internal server error' + error
                });
        }
    } */
}

module.exports = new IndexController();