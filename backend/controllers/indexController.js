const { Request, Response } = require('express');
const pool = require('../models/dbconnection');
const jwt = require('jsonwebtoken');
const CryptoJS = require('crypto-js');

const Secret_Key = process.env.ENCRYPTION_KEY || 'secret_key';

class PersonController{
    // Encryption
    static encryption(data) {
        return CryptoJS.AES.encrypt(data, Secret_Key).toString();
    }

    static decryption(data) {
        const bytes = CryptoJS.AES.decrypt(data, Secret_Key);
        return bytes.toString(CryptoJS.enc.Utf8);
    }
    
    // CRUD
    // Read
    async list(req = Request, res = Response){
        const persons = await pool.query('SELECT * FROM __table__');
        res.json(persons);
        // toda la tabla en formtato json
    }

    async getOne(req = Request, res = Response){
        /*
            json
            {
                "id": 1,
                "Id": 1,
                "name": "Juan",
                "lastname": "Perez",
                "age": 20
            }
        */
       // fuerte tipado
        const { id } = req.params;
        const persons = await pool.query('Select * FROM __table__ WHERE id = ?', [id]);
        if (persons.leng > 0){
            return res.json(persons[0]);
        }
        res.status(404).json({text: 'Person not found'});
    }

    // Create
    async create(req = Request, res = Response){
    /*
        json
        {
            "id": 1313100,
            "name": "Juanito",
            "lastname": "Pereztroica",
            "age": 28
        }
    */
        await pool.query('INSERT INTO __table__ set ?', [req.body]);
        res.json({message: 'Person Saved'});
    }
    // Update
       // -> les toca a uds. :) ♥
    // Delete
       // -> les toca a uds. :) ♥
}

module.exports = new PersonController();