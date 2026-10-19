const http = require("http")
const server = http.createServer((req, res) =>{
    if(req.url === "/stores")
    {   
        res.end("Here are the stores " );
        return;
    }
    
    res.end("Unknown Resource");
});

server.listen(3000,()=>
{
    console.log("Running");
});
