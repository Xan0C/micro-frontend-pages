const dotenv = require('dotenv');
dotenv.config();

const redis = require('redis');
const express = require('express');
const next = require('next');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const port = parseInt(process.env.PORT || 5000, 10);
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
  //const client = redis.createClient(process.env.REDIS_URL);

  server.get('/beers', async (req, res) => {
    res.send(await Beer.find({}));
    // client.get('beersCache', (err, beers) => {
    //   if (beers) {
    //     console.log('from redis cache');
    //     res.send(JSON.parse(beers));
    //   } else {
    //     setTimeout(async () => {
    //       console.time('db_request');
    //       const beers = await Beer.find({});
    //       console.timeEnd('db_request');
    //       client.setex('beersCache', 120, JSON.stringify(beers));
    //       res.send(beers);
    //     }, 1000);
    //   }
    // });
  });

  server.get('/beerOfTheDay', (req, res) => app.render(req, res, '/beerOfTheDay'));

  server.get('/*', (req, res) => handle(req, res));

  server.listen(port, err => {
    if(err) throw err;
    console.log(`> Read on http://localhost:${port}`);
  })
}).catch(err => console.error(err));

