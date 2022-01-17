const http = require('http');
const path = require('path');
const fs = require('fs');
const url = require('url');
const querystring = require('querystring');

const PORT = process.argv[2];

const server = http.createServer(function(req,res){

  console.log(req.method+' '+req.url);
  console.log('path = '+req.url);

  var path = req.url;

  path = path.slice(1);
  if (path == ""){
    console.log('Server is running!');
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('Server works!');
    res.end();
    }

  else if (path == "kill"){
    console.log('Server is not running!');
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('Server is finished!');
    res.end();
    process.exit(0);
    }

  else if (path.slice(0,5) == "root/"){
    var file = path.slice(4);
    if (fs.existsSync(file)){
      if (path.slice(-4) == 'html'){
        res.writeHead(200, {'Content-Type': 'text/html'});
      }
      else if (file.slice(-3) == 'css'){
        res.writeHead(200, {'Content-Type': 'text/css'});
      }
      else if (file.slice(-3) == 'txt'){
        res.writeHead(200, {'Content-Type': 'text/plain'});
      }
      else if (file.slice(-2) == 'js'){
        res.writeHead(200, {'Content-Type': 'application/javascript'});
      }

      var fl = fs.readFileSync(file);
      res.write(fl);
      res.end();
    }
    else {
      res.writeHeader(404, {'Content-Type': 'text/html'});
      res.write('404 not found');
      res.end();
    }
  }

  else if(path.slice(0,2)=="hi"){
    var name = path.slice(11);
    res.writeHeader(200, { 'Content-Type':"text/html"});
    res.write("hi " + querystring.unescape(name));
    res.end();
  }

else if(path.slice(0,4)=="ciao"){
}

else if(path.slice(0,5)=="clear"){
}
else{
    res.writeHeader(200, { 'Content-Type': 'text/html' });
    res.write(path);
    res.end();
}
  });

server.listen(PORT);

console.log('server running on PORT = ', PORT);
