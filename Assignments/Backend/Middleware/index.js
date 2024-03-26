const express = require('express');
const ExpressError = require('./ExpressError');

const app = express();

//SAMPLE MIDDLEWARE FOR ROOT PATH

// app.use((req, res, next) => {
//     console.log("I am a middleware");
//     // res.send('middleware finished');
//     next();
// });



//SAMPLE MIDDLEWARE FOR SPECIFIC PATH

// app.use('/random', (req, res, next) => {
//     console.log('Only for random');
//     next();
// });



//LOGGER - MORGON MIDDLEWARE

// app.use((req, res, next) => {
//     req.time = new Date(Date.now()).toLocaleString();
//     console.log('Method: ',req.method, ' Host: ', req.hostname, ' Path: ', req.path, ' Time', req.time);
//     next();
// });


app.get("/", (req, res) => {
    res.send("i am root");
});

app.get("/random", (req, res) => {
    res.send("This is random page");
});



//MIDDLEWARE FOR AUTHENTICATION USING PASSING API TOKEN AS QUERY STRING

app.use('/api', (req, res, next) => {
    let { token } = req.query;
    if (token === 'giveaccess') {
        next();
    } else throw new ExpressError(401, 'UNDEFINED VARIABLE');
});

// app.get('/api', (req, res) => {
//     res.send("data");
// });


//MIDDLEWARE AS A FUCNTION

const checkToken = (req, res, next) => {
    let { token } = req.query;
    if (token === 'giveaccess') {
        next();
    } else res.send("DENIED ACCESS");
};

app.get('/api', checkToken, (req, res) => {
    res.send("data");
});

app.get('/err', (re, res) => {
    abcd = abcd;
});

app.use((err, req, res, next) => {
    let { status, message } = err;
    console.log("-------ERROR 1-----------");
    res.status(status).send(message);
    next(err);
});

app.use((err, req, res, next) => {
    console.log("-------ERROR 2-----------");
    next(err);
});


//MIDDLEWARE FOR ERROR HANDLING, WILL BE CALLED AT THE END IF THERE IS NO PATH MATCHED
app.use((req, res) => {
    res.status(404).send("page not found!");
});

app.listen(8081, () => {
    console.log('Listening to 8081');
});

