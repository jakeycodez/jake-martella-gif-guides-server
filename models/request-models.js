const fs = require("fs");

const filePath = './data/requests.json';

// function to get requests from JSON file
exports.getAll = () => {
    const requestsArr = fs.readFileSync(filePath);
    return JSON.parse(requestsArr);
  }

  // function to save video arr to JSON file
exports.saveAll = (requestsArr) => {
    fs.writeFileSync(filePath, JSON.stringify(requestsArr))
  }