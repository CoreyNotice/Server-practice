const http = require('http');
const PORT = 3000;
const fs= require('fs')

const server = http.createServer(function(req, res) {
res.writeHead(200,{'Content-Type':'text/html'})
fs.readFile('index.html', function(error,data){
  if (error){
    res.writeHead(404)
    res.write('Error: File Not Found')
  }else{
    res.write(data)
  }
  res.end();
})

});

server.listen(PORT, (error) => {
  if(error){
  console.log('Something is wrong!!', error);
  }else {
    console.log(`Server running at PORT:${PORT}/`);
  }
});