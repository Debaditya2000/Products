const bodyParser = require("body-parser")
const express=require("express")
const app=express()
app.use(bodyParser.urlencoded({extended: false}))
app.set('view engine','ejs')
app.get('/',(req,res)=>
{
    var menu=['Home','About Us','Contact_us','Calculator']
    var link=['/','about','contact_us','calculator']
    var s="<h1>Welcome to Express</h1>";
    s+="<ul>";
    for(var i=0;i<4;i++)
    {
        s+="<li><a href='"+link[i]+"'>"+menu[i]+"</a></li>"
    }
    s+="</ul>";
    res.send(s);
    res.render('index',{x:'',y:'',result:''})
})    
app.get('/contact_us',(req,res)=>
{
    res.render('contact_us')
})
app.get('/calculator',(req,res)=>
{
        res.render('index',{x:'',y:'',result:''})    
})
app.get('/about',(req,res)=>
{
    res.send("<h1>ABOUT PAGE</h1>")
})
app.post("/calc",(req,res)=>{
    var x=parseInt(req.body.txt1);
    var y=parseInt(req.body.txt2);
    var op=req.body.op;
    var result=0;
    switch(op)
    {
        case "+": result=x+y; break;
    }
    res.render('index',{x:x,y:y,result:result})
    
})
app.listen(3003,()=>
{
    console.log("server is running ")
})