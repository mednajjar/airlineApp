const http = require('http');
const app = require('./app');
const Port = process.env.PORT | 4008;

app.set(Port)

const server = http.createServer(app);

server.listen(Port, (err)=>{
    !err ? console.log('server listening on port: '+ Port) 
    : console.log(err);
})