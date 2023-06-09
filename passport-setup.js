"use strict"
const passport  = require("passport");
const GoogleStrategy = require("passport-google-oauth2").Strategy;

passport.serializeUser((user , done) => {
    done(null , user);
})
passport.deserializeUser((user, done)=> {
    done(null, user);
});


passport.use(new GoogleStrategy({
    clientID: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
    callbackURL: process.env.CALLBACK_URL,
    passReqToCallback: true
},(request,accessToken,refreshToken,profile,done)=>{
    console.log(profile);
    return done(null,profile);
}));