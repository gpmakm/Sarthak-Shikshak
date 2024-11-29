//import { link } from 'fs';

const express=require('express');
const app=express();
require('dotenv').config();
const port=3000;
const path=require('path')

const bodyParser=require('body-parser')
const mongoose=require('mongoose')
const mongodb=require('mongodb')

app.use(bodyParser.urlencoded({extended:true}))

const session=require('express-session')
const {SESSION_SECRET}=process.env;
app.use(session({secret:SESSION_SECRET}))

const cors=require('cors');
app.set('view engine','ejs')
app.set('views','./views');
mongoose.connection;
//const link="mongodb://localhost:27017"
const link="mongodb+srv://aakarshm826:abcd1234@cluster0.bqcw0tz.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
mongoose.connect(link).then(console.log("Connection Established")).catch((error)=>{
    console.log("Error generated"+error);
})

let marksSchema= new mongoose.Schema({
    regno:Number,
    marks:Number,
   satt:Number
});


let professorSchema= new mongoose.Schema(
    
    
    {
    profname:String,
    email:String,
    dept:String,
    passw:String,

    ce_syll_chap1:String,
    ce_syll_desc_chap1:String,
    ce_syll_chap2:String,
    ce_syll_desc_chap2:String,
    ce_syll_chap3:String,
    ce_syll_desc_chap3:String,
    ce_syll_chap4:String,
    ce_syll_desc_chap4:String,
    ce_syll_chap5:String,
    ce_syll_desc_chap5:String,
    ce_syll_chap6:String,
    ce_syll_desc_chap6:String,

    ece_syll_chap1:String,
    ece_desc_chap1:String,
    ece_syll_chap2:String,
    ece_desc_chap2:String,
    ece_syll_chap3:String,
    ece_desc_chap3:String,
    ece_syll_chap4:String,
    ece_desc_chap4:String,
    ece_syll_chap5:String,
    ece_desc_chap5:String,
    ece_syll_chap6:String,
    ece_desc_chap6:String,

    ee_syll_chap1:String,
    ee_desc_chap1:String,
    ee_syll_chap2:String,
    ee_desc_chap2:String,
    ee_syll_chap3:String,
    ee_desc_chap3:String,
    ee_syll_chap4:String,
    ee_desc_chap4:String,
    ee_syll_chap5:String,
    ee_desc_chap5:String,
    ee_syll_chap6:String,
    ee_desc_chap6:String,
    
    me_syll_chap1:String,
    me_desc_chap1:String,
    me_syll_chap2:String,
    me_desc_chap2:String,
    me_syll_chap3:String,
    me_desc_chap3:String,
    me_syll_chap4:String,
    me_desc_chap4:String,
    me_syll_chap5:String,
    me_desc_chap5:String,
    me_syll_chap6:String,
    me_desc_chap6:String,

    cse_syll_chap1:String,
    cse_desc_chap1:String,
    cse_syll_chap2:String,
    cse_desc_chap2:String,
    cse_syll_chap3:String,
    cse_desc_chap3:String,
    cse_syll_chap4:String,
    cse_desc_chap4:String,
    cse_syll_chap5:String,
    cse_desc_chap5:String,
    cse_syll_chap6:String,
    cse_desc_chap6:String
}
    )

let userSchema=new mongoose.Schema({
    user:String,
    email:String,
    dept:String,
    regno:Number,
  
    passw:String
 
})
let professor=new mongoose.model('professor',professorSchema);
let usersData=new mongoose.model('usersData',userSchema);
let score=new mongoose.model('score',marksSchema);
app.use(bodyParser.urlencoded({extended:true}))
app.use(cors())
app.listen(port,(error)=>{
    if (!error) {
        console.log("Server is running");
    } else {
        console.log("Error Generated!! Failed to start server");
    }
})



app.post('/professor-registration',async (req,res)=>{
    
    // let gmail=(req.body.email)
    // let file=(req.image.filename);
    // console.log(req.file)

    let person=new professor(
        {
        profname:req.body.profname,
        email:req.body.email,
        dept:req.body.dept,
        passw:req.body.passw,
        ce_syll_chap1:req.body.ce_syll_chap1,
        ce_syll_desc_chap1:req.body.ce_syll_desc_chap1,
        ce_syll_chap2:req.body.ce_syll_chap2,
        ce_syll_desc_chap2:req.body.ce_syll_desc_chap2,
        cse_syll_chap3:req.body.cse_syll_chap3,
        ce_syll_desc_chap3:req.body.ce_syll_desc_chap3,
        ce_syll_chap4:req.body.ce_syll_chap4,
        ce_syll_desc_chap4:req.body.ce_syll_desc_chap4,
        ce_syll_chap5:req.body.ce_syll_chap5,
        ce_syll_desc_chap5:req.body.ce_syll_desc_chap5,
        ce_syll_chap6:req.body.ce_syll_chap6,
        ce_syll_desc_chap6:req.body.ce_syll_desc_chap6,

        ece_syll_chap1:req.body.ece_syll_chap1,
        ece_desc_chap1:req.body.ece_desc_chap1,
        ece_syll_chap2:req.body.ece_syll_chap2,
        ece_desc_chap2:req.body.ece_desc_chap2,
        ece_syll_chap3:req.body.ece_syll_chap3,
        ece_desc_chap3:req.body.ece_desc_chap3,
        ece_syll_chap4:req.body.ece_syll_chap4,
        ece_desc_chap4:req.body.ece_desc_chap4,
        ece_syll_chap5:req.body.ece_syll_chap5,
        ece_desc_chap5:req.body.ece_desc_chap5,
        ece_syll_chap6:req.body.ece_syll_chap6,
        ece_desc_chap6:req.body.ece_desc_chap6,

        ee_syll_chap1:req.body.ee_syll_chap1,
        ee_desc_chap1:req.body.ee_desc_chap1,
        ee_syll_chap2:req.body.ee_syll_chap2,
        ee_desc_chap2:req.body.ee_desc_chap2,
        ee_syll_chap3:req.body.ee_syll_chap3,
        ee_desc_chap3:req.body.ee_desc_chap3,
        ee_syll_chap4:req.body.ee_syll_chap4,
        ee_desc_chap4:req.body.ee_desc_chap4,
        ee_syll_chap5:req.body.ee_syll_chap5,
        ee_desc_chap5:req.body.ee_desc_chap5,
        ee_syll_chap6:req.body.ee_syll_chap6,
        ee_desc_chap6:req.body.ee_desc_chap6,

        
        me_syll_chap1:req.body.me_syll_chap1,
        me_desc_chap1:req.body.me_desc_chap1,
        me_syll_chap2:req.body.me_syll_chap2,
        me_desc_chap2:req.body.me_desc_chap2,
        me_syll_chap3:req.body.me_syll_chap3,
        me_desc_chap3:req.body.me_desc_chap3,
        me_syll_chap4:req.body.me_syll_chap4,
        me_desc_chap4:req.body.me_desc_chap4,
        me_syll_chap5:req.body.me_syll_chap5,
        me_desc_chap5:req.body.me_desc_chap5,
        me_syll_chap6:req.body.me_syll_chap6,
        me_desc_chap6:req.body.me_desc_chap6,

        
        cse_syll_chap1:req.body.cse_syll_chap1,
        cse_desc_chap1:req.body.cse_desc_chap1,
        cse_syll_chap2:req.body.cse_syll_chap2,
        cse_desc_chap2:req.body.cse_desc_chap2,
        cse_syll_chap3:req.body.cse_syll_chap3,
        cse_desc_chap3:req.body.cse_desc_chap3,
        cse_syll_chap4:req.body.cse_syll_chap4,
        cse_desc_chap4:req.body.cse_desc_chap4,
        cse_syll_chap5:req.body.cse_syll_chap5,
        cse_desc_chap5:req.body.cse_desc_chap5,
        cse_syll_chap6:req.body.cse_syll_chap6,
        cse_desc_chap6:req.body.cse_desc_chap6


        
    }
   

);
   await person.save().then(()=>{res.send("Professor registered successfully")}).catch((error)=>{res.status(400).send(`Error occured${error}`)})
})

app.post('/student-registration',async (req,res)=>{
    // let gmail=(req.body.email)
    // let file=(req.image.filename);
    // console.log(req.file)
//const duplicate=await usersData.findOne({regno:regno})
    let student=new usersData({
        user:req.body.user,
        email:req.body.email,
        dept:req.body.dept,
        regno:req.body.regno,
        passw:req.body.passw
       
    });
    // if (duplicate) {
    //     await student.update().then(()=>{res.send("Student's data updated successfully")}).catch((error)=>{res.status(400).send(`Error happened - ${error}`)})
    // } else {
        await student.save().then(()=>{res.send("Student registered successfully")}).catch((error)=>{res.status(400).send(`Error occured`)})    
    //}
    
})  


app.post('/login',async (request,response)=>{

    
    
        const email = request.body.email; //Email aayega
        const password = request.body.password; //Password aayega
    
        let user;
        try {
            user = await usersData.findOne({ email: email }); //Email student data set se match krwayenge
            if (!user) {
                user = await professor.findOne({ email: email });
                let passwordMatch=await professor.findOne({passw:password});
                if (passwordMatch) {
                    request.session.s=user;
                    response.redirect('/professor-dashboard');
                }
                else{
                    response.send("Password not matched!!")
                }
            }
            else{
                let passMatch= await usersData.findOne({passw:password});
                if (passMatch) {
                    request.session.d=user;
                    response.redirect('/student-dashboard');
                }
                else{
                    response.send("Password not matched!!")
                }
                
            }
        } catch (error) {
            response.status(400).send(`Error occurred: ${error}`);
            return;
        }
    
        if (!user) {
            response.send("Register yourself, your data not found");
            return;
        }
    
        // if (user.passw !== password) {
        //     response.send("Password is incorrect!!");
        //     return;
        // }
    
        // Set session for user
       // request.session.user = user;
    
        // Redirect to respective dashboard
        // if (user instanceof usersData) {
        //     response.redirect('/student-dashboard');
        // } else {
        //     response.redirect('/professor-dashboard');
        // }
    });
    
    // Create separate routes for student and professor dashboards
    app.get('/student-dashboard', (request, response) => {
        try {
            response.render('dashboard',{usersData:request.session.d});
        } catch (error) {
            response.send("Error in dashboard loading, please login again")
        }
      
    });
    
    app.get('/professor-dashboard', (request, response) => {
        try {
            response.render('professordashboard', { professor: request.session.s})
        } catch (error) {
            response.send("Error in loading dashboard, please try again")
        }
       
            
        
    });



// app.get('/dashboard', (request, response) => {
//     response.render('professordashboard',{usersData:request.session.user});
// });
// app.get('/student-dashboard', (request, response) => {
//     response.render('studentdashboard',{usersData:request.session.user});
// });
app.get('/logout',async (req,res)=>{
    req.session.destroy();
   // res.send('Session destroyed, login again');
   res.render('logout');
})
app.post('/student-scores',async (req,res)=>{
    let teacherCode=req.body.code;
    let code=await professorSchema.findOne({code:teacherCode})
    if (!code) {
        res.send("Your code is wrong")
    } else {
        
    
    let data=new score({
        code:req.body.code,
        regno:req.body.regno,
        marks:req.body.marks,
        satt:req.body.satt
    });
    
    await data.save().then(()=>{res.send("Data saved")}).catch((error)=>{res.status(400).send(`Error happened ${error}`)})
}
})

app.get('/student-score-finder',async (req,res)=>{
    let studentScore= await score.find();
    res.send(studentScore);
    
})



