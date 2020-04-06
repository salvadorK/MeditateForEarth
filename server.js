const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();

const PORT = process.env.PORT || 8083;

mongoose.connect('mongodb://localhost/meditate4earth',{
  useNewUrlParser: true,
  useUnifiedTopology: true
})

mongoose.connection.on('connected', () => {console.log('MongoDB is connected')});

// mongoose.Promise = global.Promise;
// mongoose.connect(process.env.MONGODB_URI || `mongodb://localhost:27017/small-project`);

const routes = require('./routes/api')


app.use(morgan('tiny'));
app.use('/api',routes);
app.use(bodyParser.json());




app.listen(PORT, () => {
  console.log(`app running on port ${PORT}`)
});