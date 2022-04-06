const fs = require("fs");

const filePath = './data/guides.json';


// function to get guides from JSON file
exports.getAllGuides = () => {
    const guidesArr = fs.readFileSync(filePath);
    return JSON.parse(guidesArr);
  }

  // function to get guides of one specific category from JSON file
  exports.getAllGuidesOfCat = () => {
    const guidesCatCall = fs.readFileSync(filePath);
    return JSON.parse(guidesCatCall)
  }

  // function to get one specific guide from JSON file
  exports.getGuideById = () => {
    const findGuide = fs.readFileSync(filePath);
    return JSON.parse(findGuide)
  }

  // Function to save guide arr to JSON file
  exports.saveAll = (guidesArr) => {
    fs.writeFileSync(filePath, JSON.stringify(guidesArr))
  }
 

  

  