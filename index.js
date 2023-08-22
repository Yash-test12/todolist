import express from "express"
import bodyparser from "body-parser"
const app= express();
const port =3000;
let result=[];
let i;
i=0;

app.use(bodyparser.urlencoded({extended:true}));
app.get("/",(req,res)=>{
    res.render("index.ejs",{data:result});
})
app.post("/submit",(req,res)=>{
result[i]=req.body.value;
i=i+1;
res.redirect("/")
})

app.listen(port,()=>{
    console.log("listing on port 3000")
})