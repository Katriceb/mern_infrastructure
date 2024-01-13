//import Resource from '../models/resource.cjs';
import Resource from './models/resource.cjs';

// bring in all dependencies
require('dotenv').config();
const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');

// define variables
const PORT = process.env.PORT || 3001;

// Connect to the database
require('./config/database.cjs');

// create my app
const app = express();

app.use(logger('dev'));
app.use(express.json());

// Configure both serve-favicon and static middlewares
// to serve from the production build folder
// in our case, the folder is called 'dist' because that is
// what vite names it when we run the build script

// == note == we may not use this, so I'm commenting it out for now
// and I'll uncomment when we use it
// ==
// app.use(favicon(path.join(__dirname, 'static', 'favicon.ico')));
app.use(express.static(path.join(__dirname, 'dist')));

// Middleware to verify token and assign user object of payload to req.user.
// Be sure to mount before routes
app.use(require('./config/checkToken.cjs'));

// Put API routes here, before the "catch all" routes
app.get('/api/test', (req, res) => {
    res.send('This is my resource route');
  });

app.use('/api/users', require('./routes/api/users.cjs'));
// we have included the line 
// const userRouter = require('./routes/api/users.cjs')
// app.use('/api/user', userRouter);

// The following "catch all" route (note the /*) is necessary
// to return the index.html on all non-AJAX requests
app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname, 'dist', 'index.html'));

});
// I - INDEX - dsiplays a list of all resources
app.get('/resources/', async (req, res) => {
    // res.send(resource);
    try {
        const foundResources = await Resource.find({});
        res.status(200).render('Index', {resources: foundResources});
    } catch (err) {
        res.status(400).send(err);
    }
    
});


// N - NEW - allows a user to input a new resource
app.get('/resources/new', (req, res) => {
    res.render('New');
});

// D - DELETE - PERMANENTLY removes resource from the database
app.delete('/resources/:id', async (req, res) => {
    // res.send('deleting...');
    try {
        const deletedResource = await Resource.findByIdAndDelete(req.params.id);
        console.log(deletedResource);
        res.status(200).redirect('/resources');
    } catch (err) {
        res.status(400).send(err);
    }
})

// U - UPDATE - makes the actual changes to the database based on the EDIT form
app.put('/resources/:id', async (req, res) => {
    if (req.body.seeDetails === 'on') {
        req.body.seeDetails = true;
    } else {
        req.body.seeDetails = false;
    }

    try {
        const updatedResource = await Resource.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true },
        );
        console.log(updatedResource);
        res.status(200).redirect(`/resources/${req.params.id}`);
    } catch (err) {
        res.status(400).send(err);
    }
 })

// C - CREATE - update our data store
app.post('/resources', async (req, res) => {
    if(req.body.seeDetails === 'on') { //if checked, req.body.readyToEat is set to 'on'
        req.body.seeDetails = true;
    } else {  //if not checked, req.body.seeDetails is undefined
        req.body.seeDetails = false;
    }

    try {
        const createdResource = await Resource.create(req.body);
        res.status(200).redirect('/resources');
    } catch (err) {
        res.status(400).send(err);
    }
    // resources.push(req.body);
    // console.log(resources);
    // console.log(req.body)
    // res.send('data received');
    //  *** We will add this back in later
    //  ***
    // res.redirect('/resources'); // send user back to /resources
})

// E - EDIT - allow the user to provide the inputs to change the resource
app.get('/resources/:id/edit', async (req, res) => {
    try {
        const foundResource = await Resource.findById(req.params.id);
        console.log('foundResource');
        console.log(foundResource)
        res.status(200).render('Edit', {resource: foundResource});
    } catch (err) {
        res.status(400).send(err);
    }
})

// S - SHOW - show route displays details of an individual resource
app.get('/resources/:id', async (req, res) => {
    // res.send(resources[req.params.indexOfResourcesArray]);
    try {
        const foundResource = await Resource.findById(req.params.id);
        res.render('Show', {fruit: foundResource});
    } catch (err) {
        res.status(400).send(err);
    }

})



app.listen(PORT, function () {
    console.log(`Express app running on port: ${PORT}`);
})