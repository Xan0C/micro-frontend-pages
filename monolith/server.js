const dotenv = require('dotenv');
dotenv.config();

const express = require('express');
const next = require('next');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const port = parseInt(process.env.PORT || 3000, 10);
const isProduction = process.env.NODE_ENV === 'production';

function createMongoConnectionString(
  user = process.env.DB_USER,
  password = process.env.DB_PASS,
  connectionUrl = '@punkbeer-ggdxi.mongodb.net/punkbeer?retryWrites=true&w=majority',
) {
  return 'mongodb+srv://' + user + ':' + password + connectionUrl;
}

function connect() {
  console.log('connecting to mongo ...');
  return mongoose.connect(createMongoConnectionString(), { useNewUrlParser: true, useUnifiedTopology: true });
}

const BeerSchema = new Schema({
  food_pairing: [String],
  name: String,
  tagline: String,
  first_brewed: String,
  description: String,
  image_url: String,
  abv: Number,
  ibu: Number,
  target_fg: Number,
  target_og: Number,
  ebc: Number,
  srm: Number,
  ph: Number,
  attenuation_level: Number,
  volume: {
    value: Number,
    unit: String
  },
  boil_volume: {
    value: Number,
    unit: String
  },
  method: {
    mash_temp: [
      {
        temp: {
          value: Number,
          unit: String
        },
        duration: Number
      }
    ],
    fermentation: {
      temp: {
        value: Number,
        unit: String
      }
    },
  },
  ingredients: {
    malt: [{name: String, amount: {value: Number, unit: String}}],
    hops: [{name: String, amount: {value: Number, unit: String}, add: String, attribute: String}],
    yeast: String
  },
  brewers_tips: String,
  contributed_by: String
});

const app = next({
    isProduction,
    dev: !isProduction,
    isDevelopment: !isProduction,
});

const handle = app.getRequestHandler();

app.prepare().then(() => connect()).then(() => {
    const server = express();
    const Beer = mongoose.model('beer', BeerSchema);

    server.get('/items', (req, res) => app.render(req, res, '/items'));

    server.get('/items/:id', (req, res) => {
      return app.render(req, res, '/item', Object.assign({id: req.params.id}, req.query))
    });

    server.get('/checkout', (req, res) => app.render(req, res, '/checkout'));
    server.get('/docs', (req, res) => app.render(req, res, '/docs'));

    server.get('/home', async (req, res) => {
      const beers = await Beer.find({});
      console.log(beers);
      return app.render(req, res, '/');
    });

    server.get('/', (req, res) => app.render(req, res, '/'));

    server.get('/*', (req, res) => handle(req, res));

    server.listen(port, err => {
        if(err) throw err;
        console.log(`> Read on http://localhost:${port}`);
    })
}).catch(err => console.error(err));

