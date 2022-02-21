require('dotenv').config();
const http = require('http');
const fs = require('fs');
const requests = require('requests');

const htmlFile = fs.readFileSync('index.html', 'utf-8');
const cssFile = fs.readFileSync('style.css', 'utf-8');
const jsFile = fs.readFileSync('app.js', 'utf-8');

const replaceVal = (tempval, orgVal) => {
    let temperature = tempval.replace("{%temp%}", orgVal.main.temp).replace("{%minTemp%}", orgVal.main.temp_min).replace("{%minTemp%}", orgVal.main.temp_min).replace("{%maxTemp%}", orgVal.main.temp_max).replace("{%city%}", orgVal.name).replace("{%cuntry%}", orgVal.sys.country).replace("/*{%cssFile%}*/", cssFile).replace("//{%jsfile%}", jsFile).replace("{%tempstatus%}", orgVal.weather[0].main);

    return temperature;
}

const server = http.createServer((req, res) => {
    if (req.url == '/') {
        requests(`https://api.openweathermap.org/data/2.5/weather?q=kolkata&appid=${process.env.API_KEY}&units=metric`)
            .on("data", (chunk) => {
                let bojData = JSON.parse(chunk);
                let arrData = [bojData];
                const realTimedata = arrData.map((val) => replaceVal(htmlFile, val));
                res.write(realTimedata.toString());
            })
            .on("end", (err) => {
                if (err) {
                    return console.log("some error occuerd");
                }
                res.end();
            });
    }
});

server.listen(8000, 'localhost', () => {
    console.log("Server is listening at http://localhost:8000");
});