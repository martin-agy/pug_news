// Denna ska du inte ändra i...
const fs = require('fs');

exports.getArticles = (callback) => {
  fs.readFile('./data.json', (err, data) => {
    if (err) throw err;
    callback(JSON.parse(data));
  });
};