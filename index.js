const express = require('express');
const morgan = require('morgan');
const dotenv = require('dotenv');
dotenv.config({ path: './config.env' });


const app = express();


//routes
app.use('/api', require('./routes/profile'));


if(process.env.NODE_ENV === 'development'){
    app.use(morgan('dev'));
}

app.set('port', process.env.PORT || 3000);



//Server listening
app.listen(app.get('port'), ()=>{
    console.log('server on port', app.get('port'));
});