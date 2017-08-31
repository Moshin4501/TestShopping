var passport = require("passport");
var LocalStrategy = require("passport-local").Strategy;

var db = require("../models");

// Telling passport we want to use a Local Strategy. In other words, we want login with a username/email and password
var passport = require('passport'),
local = require("../config/api-routes.js");.Strategy,
Facebook = require('passport-Facebook').Strategy,
Twitter = require('passport-twitter').Strategy;
    
 // passport.use(new FacebookStrategy());
 //  passport.use(new TwitterStrategy());
passport.use(new local({
  // Our user will sign in using an email, rather than a "username"
  
    usernameField: "email"
  },
  function(email, password, done) {
    // When a user tries to sign in this code runs
    db.User.findOne({
      where: {
        email: email
      }
    }).then(function(dbUser) {
      // If there's no user with the given email
      if (!dbUser) {
        return done(null, false, {
          message: "Incorrect email."
        });
      }
      // If there is a user with the given email, but the password the user gives us is incorrect
      else if (!dbUser.validPassword(password)) {
        return done(null, false, {
          message: "Incorrect password."
        });
      }
      // If none of the above, return the user
      return done(null, dbUser);
    });
  }
));

// In order to help keep authentication state across HTTP requests,
// Sequelize needs to serialize and deserialize the user
// Just consider this part boilerplate needed to make it all work
passport.serializeUser(function(user, cb) {
  cb(null, user);
});

passport.deserializeUser(function(obj, cb) {
  cb(null, obj);
});

passport.use(new Facebook({
    clientID: '[113547556021868]',
    clientSecret: '[439278fd3678780e2f2e762dd16646e2]',
    callbackURL: 'https://127.0.0.1:'+port+'/facebook-token'
  },
  function(accessToken, refreshToken, profile, done) {
    // asynchronous verification, for effect...
    process.nextTick(function () {
      
      // To keep the example simple, the user's Facebook profile is returned to
      // represent the logged-in user.  In a typical application, you would want
      // to associate the Facebook account with a user record in your database,
      // and return that user instead.
      return done(null, profile);
    });
  }
));

passport.use(new Twitter({
  consumerKey: '[wy5wZKgGupE2bsxUNFGHAgYMN]',
  consumerSecret: '[Iw5k9bs4xZXWNl8t3XmIgeG7Dkb6iMbBQHiTwg8ll9XPfiOAy9]',
  callbackURL: 'https://127.0.0.1:'+port+'/twitter-token' //this will need to be dealt with
  }, function(token, tokenSecret, profile, done) {
    process.nextTick(function () {
      return done(null, profile);
    });
  }));

// Exporting our configured passport
module.exports = passport;
