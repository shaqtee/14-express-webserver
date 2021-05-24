const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/about', (req, res) => {
  res.send('Ini adalah halaman about!')
})

app.get('/contact', (req, res) => {
  res.send('Ini adalah halaman contact!')
})

app.use('/', (req, res) => {
    res.send('<h1>404</h1>');
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})













// const http = require('http');
// const fs = require('fs');
// const port = 3000;

// const renderHTML = (path, res) => {
//     fs.readFile(path, (err, data) => {
//         if(err) {
//             res.writeHead(404);
//             res.write('File not found');
//         }else{
//             res.write(data);
//         }
//         res.end();
//     });
// }

// http
// .createServer((req,res) => {

//     res.writeHead(200, {
//         "Content-Type": "text/html"
//     })

//     const url = req.url;

//     //Menggunakan switch statement.
//     switch(url){
//         case '/about':
//             renderHTML('./about.html', res);
//             break;
//         case '/contact':
//             renderHTML('./contact.html', res);
//             break;
//         default:
//             renderHTML('./index.html', res);
//             break;
//     }

//     // Menggunakan if statement.
//     // if( url === '/about'){
//     //     // res.write('<h1>Ini adalah halaman About</h1>');
//     //     // res.end();

//     //     renderHTML('./about.html', res);

//     // }else if( url === '/contact'){
//     //     // res.write('<h1>Ini adalah halaman Contact</h1>');
//     //     // res.end();

//     //     renderHTML('./contact.html', res);

//     // }else{
//     //     // res.write('Hello World');

//     //     renderHTML('./index.html', res);
//     // }

// }).listen(3000, () => {
//     console.log(`Server is listening on Port:${port}`);
// });