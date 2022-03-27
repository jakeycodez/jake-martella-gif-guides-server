const fs = require("fs");

const filePath = './data/guides.json';



// function to get guides from JSON file
exports.getAllGuides = () => {
    const guidesArr = fs.readFileSync(filePath);
    return JSON.parse(guidesArr);
  }


  