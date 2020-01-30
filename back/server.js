const express    = require('express'),
      helmet     = require('helmet'),
      bodyParser = require('body-parser'),
      cors       = require('cors'),
      morgan     = require('morgan');

require('dotenv').config();

const app = express();

var db = require('knex')({
    client: 'pg',
    connection: {
        host: '127.0.0.1',
        user: 'ariel.souza',
        password: '1234',
        database: 'rgpet'
    }
});

const whitelist = ['http://localhost:3001'];
const corsOptions = {
    origin: function(origin, callback) {
        if(whitelist.indexOf(origin) != -1 || !origin) {
            callback(null, true)
        } else {
            callback(new Error('Not allowed by CORS'))
        }
    }
};


app.use(helmet());
app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(morgan('combined')); // use 'tiny' or 'combined'


app.get('/', (req,res) => res.send('hello world'));
app.get('/crud', (req,res) => {
    db.select('*').from('ownerdata')
        .then(items => {
            if(items.length){
                res.json(items);
            } else {
                res.json({dataExists: 'false'});
            }
        })
        .catch(err => res.status(400).json({dbError: 'db error'}));
    });
app.post('/crud', (req,res) => {
    const { id, email, password } = req.body;
    const added = new Date();
    db('ownerdata').insert({id, email, password})
        .returning('*')
        .then(item => {
            res.json(item);
        })
        .catch(err => res.status(400).json({dbError: err}));
});
 
app.put('/crud', (req, res) => {
    const { id, email, password, first_name, last_name, phone, birth_date, city, address, address_num, postal_code, prof_pic } = req.body;
    db('testtable1').where({id}).update({email, password, first_name, last_name, phone, birth_date, city, address, address_num, postal_code, prof_pic})
        .returning('*')
        .then(item => {
            res.json(item);
        })
        .catch(err => res.status(400).json({dbError: 'db error'}));
});

// app.delete('/crud', (req,res) => main.deleteTableData(req, res, db));

app.listen(process.env.PORT || 3000, () => {
    console.log(`app running on port ${process.env.PORT} || 3000`)
});