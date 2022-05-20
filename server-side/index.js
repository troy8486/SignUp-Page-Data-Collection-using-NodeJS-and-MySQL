var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var cors = require("cors");
const sequelize = require("./database");
const Students = require("./models/Students");
const Subjects = require("./models/Subject");

Students.hasMany(Subjects);

sequelize
  .sync()


app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(cors());

app.get("/students",function(req,res) {
    
    
    Students.count()
    .then(count => {



    Students.findAll({include : [{model : Subjects}] ,


    })
    .then(tempdata => {
        console.log("params are " , req.query);
        let sub;
        let data = [];
        console.log(tempdata)
       
       
        
        data = tempdata.map((student)=>{
            sub = student.subjects.map((element)=>{
                return element.subject
            })
            return {"id":student.id , "name": student.name , "email": student.email , "phoneNo": student.phoneNo , "subjects": sub.toString()}
        })
        return data;
    }).then(data => res.json(data))
    

    })

});

app.get('/subjects',function(req,res){
    Subjects.findAll({
        where: {studentId:req.query.id}
    })
   .then(subjects=>{
        //console.log(subjects);
        res.json(subjects);
    })
    
})



app.post("/postdetails",async (req,res)=>{
    const name = req.body.name;
    const email = req.body.email;
    const phoneNo = req.body.phoneNo;
    const subject = req.body.subject;
    console.log(name,email,phoneNo,subject);


    const user = await Students.create({name: name, email: email , phoneNo: phoneNo})
    
    if(user){
        const user_id = user.id;
        var data = subject.map((val,i)=>{
            return {subject: val , studentId: user_id}
        });

        await Subjects.bulkCreate(data);
        console.log(data);
    }

    
    console.log(user);
    res.json(user);
}) 
app.listen(4000,function(){
    console.log("listening to port 4000");
   
});

                                   