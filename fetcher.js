const args = process.argv.slice(2);
console.log(args);

const request = require('request');
const fs = require('fs');
let domainName =  args[0];
let filePath = args[1];
let fileName = filePath.replace("./", "");

const writeFile = function() {
  request(domainName, (error, response, body) => {
    if (response.statusCode === 200) {
      fs.writeFile(fileName, body, (err => {
        if (err) {
          throw error;
        } else {
          console.log(`Downloaded and saved ${body.length} bytes to ${filePath}`);
        }
      }));
    }
  });
};

if (filePath.includes('./')) {
  console.log("test");
  writeFile();
}

// fs.writeFile(filename,data[,options], callback)