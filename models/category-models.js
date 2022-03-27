const fs = require("fs");

const filePath = './data/categories.json';

// function to get categories from JSON file
exports.getAll = () => {
  const categoriesArr = fs.readFileSync(filePath);
  return JSON.parse(categoriesArr);
}
