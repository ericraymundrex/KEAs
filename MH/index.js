const express = require('express');
const mongoose = require('mongoose');
const app = express();

//-------MODELS-------

const User = require('./models/user');

const bcrypt = require('bcrypt');
const session = require("express-session");
const db = "MH_4";
mongoose.connect('mongodb://localhost:27017/'+db, { useNewUrlParser: true, useUnifiedTopology: true }).then(() => { console.log("MONGO CONNECTION OPEN") }).catch(err => {
    console.log("THERE IS A PROBLEM");
    console.log(err)
});

mongoose.set('useFindAndModify', false);

app.set("view engine", "ejs");
app.set("views", "views");
app.use(express.static(__dirname + '/Assets'));
app.use(express.urlencoded({ extended: true }));
app.use(session({ secret: "I love MozzoHack" }));

//Middleware for login - AUTENTICATION
const requireLogin = (req, res, next) => {
    if (!req.session.user_id) {
        return res.redirect("/register");
    }
    next();
}


// MY ROUTES

//---------HOME paGE-------

app.get("/",(req,res)=>{
    res.render("home");
});

//-------AUTENTICATION-----
//-------LOG-IN       -----


app.post("/login",async(req,res)=>{
    const {Email,Password}=req.body;

    try {
        const user = await User.findOne({ Email });
        const validPassword = await bcrypt.compare(Password, user.Password);

        if (validPassword) {
            req.session.user_id = user._id;
            res.redirect("/portal/"+user._id);
        }else{
            res.render("register",{message:"Wrong Email or password"});
        }
    }catch(error){
                console.log(error);
                res.render("register",{message:"Wrong Email or password"});
            } 
});
app.post("/logout", (req, res) => {
    req.session.user_id = null;
    req.session.destroy();
    res.redirect("/register");
});
app.get("/portal/:id",requireLogin,(req,res)=>{

    User.find({}).then(allUser=>{
        const _id=req.params.id;
        User.findOne({_id}).then(user=>{
            if(user.Position=="Admin"){
                res.redirect("/admin1/"+_id);
            }
            if(user.Position=="chari"){
            res.render("admin",{user:user,allUser:allUser});}
            if(user.Position=="vol"){
                res.send("Vol");
            }
        });  
    })
});
app.get("/admin1/:id",requireLogin,(req,res)=>{
    User.find({}).then(users=>{
        console.log(users);
        res.render("admin1",{users:users});
    });
});
app.get("/event",(req,res)=>{
    res.render("event");
});
// REGISTER AS ADMIN, VOLENTEER and DONATOR
app.get("/register",(req,res)=>{
    res.render("register");
});
app.get("/register1",(req,res)=>{
    res.render("register1");
});
app.post("/register",async(req,res)=>{

    //Counting number of users in User Collection before saveing the data
    const countUser=await User.countDocuments();

    //For encryption
    const {Name,Email,Password,Address,text,age,sex,reason}=req.body;
    const hash = await bcrypt.hash(Password, 12);

    //Checking the Email is already registered
    User.findOne({ Email: Email }).then(user => {
        if(user){
            res.redirect("/register");
        }else{
            if(countUser==0){
                //If the userCount is 0 make the position as Admin
                const user=new User({
                    Name,Email,Password:hash,Address,text,age,sex,reason,Position:"Admin"
                });
                user.save();
            }else{
                //Else Dont care about admin
                const user=new User({
                    Name,Email,Password:hash,Address,text,age,sex,reason,Position:"vol"
                });
                user.save();
                
            }
            res.redirect("/register");
        }
    });
});
app.post("/register1",async(req,res)=>{

    //Counting number of users in User Collection before saveing the data
    const countUser=await User.countDocuments();

    //For encryption
    const {Name,Email,Password,Address,text,age,sex,reason,Coor}=req.body;
    const hash = await bcrypt.hash(Password, 12);

    //Checking the Email is already registered
    User.findOne({ Email: Email }).then(user => {
        if(user){
            res.redirect("/register");
        }else{
            if(countUser==0){
                //If the userCount is 0 make the position as Admin
                const user=new User({
                    Name,Email,Password:hash,Address,text,age,sex,reason,Position:"chari",Coor
                });
                user.save();
            }else{
                //Else Dont care about admin
                const user=new User({
                    Name,Email,Password:hash,Address,text,age,sex,reason,Position:"chari",Coor
                });
                user.save();
                
            }
            res.redirect("/register");
        }
    });
});
app.get("*",(req,res)=>{
    res.redirect("/register");
});
// The SSERVER starts in port::3000
app.listen(3000, () => {
    console.log("SERVER STARTED");
});