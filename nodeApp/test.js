const http = require('http');

http.createServer((request, response) => {
  const { headers, method, url } = request;
  let body = [];
  request.on('error', (err) => {
    console.error(err);
  }).on('data', (chunk) => {
    body.push(chunk);
  }).on('end', () => {
    body = Buffer.concat(body).toString();
    // BEGINNING OF NEW STUFF
    response.on('error', (err) => {
      console.error(err);
    });
    response.statusCode = 200;
    response.setHeader('Content-Type', 'application/json');
    // Note: the 2 lines above could be replaced with this next one:
    // response.writeHead(200, {'Content-Type': 'application/json'})
    const responseBody = { headers, method, url, body };
    response.write(JSON.stringify(responseBody));
    response.end();
    // Note: the 2 lines above could be replaced with this next one:
    // response.end(JSON.stringify(responseBody))
    // END OF NEW STUFF
  });
}).listen(8080);

/*var http = require('http');
const options = {host: 'www.google.com',};
const req = http.get(options);
req.end();
req.once('response', (res) => {
  const ip = req.socket.localAddress;
  const port = req.socket.localPort;
  console.log(`Your IP address is ${ip} and your source port is ${port}.`);
  // consume response object
});
*/

/*var http = require('http');
var server = http.createServer(function (request, response) {
console.log('request starting...');
request.setHeader('Content-Type', 'application/json');

// respond
response.write('hello Avinash !!!');
response.end();
});
server.listen(3000);
console.log('Server running at http://127.0.0.1:3000/');
*/

/*const https = require('https');

https.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY', (resp) => {
//http.get('http://localhost/Module2/exp.php',(resp) => {
  let data = '';

  // A chunk of data has been recieved.
  resp.on('data', (chunk) => {
    data += chunk;
  });

  // The whole response has been received. Print out the result.
  resp.on('end', () => {
    console.log(JSON.parse(data).explanation);
  });
  // error display 
}).on("error", (err) => {
  console.log("Error: " + err.message);
});
*/
