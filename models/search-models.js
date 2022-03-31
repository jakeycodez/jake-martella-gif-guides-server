const fs = require("fs");

const filePath = './data/guides.json';

exports.searchAllGuides = () => {
    const guidesArr = fs.readFileSync(filePath);
    return JSON.parse(guidesArr);
  }