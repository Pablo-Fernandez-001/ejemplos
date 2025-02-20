const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
require('dotenv').config();

// Routes
const indexRoutes = require('./routes/indexRoutes');

// Server
class Server {
  constructor() {
      this.app = express(); // to initialize the app
      this.config();
      this.middlewares();
      this.routes();
  }

  config() {
      this.app.set('port', process.env.API_PORT || 3000);
  }

  middlewares() {
      this.app.use(express.json());
      this.app.use(morgan('combined')); // it's recomended combined
      this.app.use(cors());
  }

  routes() {
      // All routes configuration
      this.app.get('/', indexRoutes);
  }

  start() {
      this.app.listen(this.app.get('port'), () => {
          console.log('Server is running on port:', this.app.get('port'));
      });
  }
}

const server = new Server();
server.start();
