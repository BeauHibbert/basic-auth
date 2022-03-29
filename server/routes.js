'use strict'

const { app } = require('./server.js');
const router = app.Router();
const { basicAuth } = require('../auth/basicAuth')

// Signup Route -- create a new user
// Two ways to test this route with httpie
// echo '{"username":"john","password":"foo"}' | http post :3000/signup

// http post :3000/signup usernmae=john password=foo
router.post('/signup', async (req, res) => {

  try {
    // req.body.password = await bcrypt.hash(req.body.password, 10);
    const record = await Users.create(req.body);
    res.status(201).json(record);
  } catch (e) { res.status(403).send("Error Creating User"); }
});


// Signin Route -- login with username and password
// test with httpie
// http post :3000/signin -a john:foo
app.post('/signin', basicAuth(req, res), async (req, res, next) => {

});