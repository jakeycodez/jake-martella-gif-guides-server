// const { v4: uuidv4 } = require('uuid');
const guidesModels = require('../models/guides-models');
// const categoryModel = require('../models/category-models');


// Get all guides 
exports.getAllGuides = (_req, res) => {

    const guidesArr = guidesModels.getAllGuides() 
        .map(guides => {
            return {
                "id": guides.id,
                "name": guides.name,
                "author": guides.author, 
                "categoryID": guides.categoryID, 
                "categoryName": guides.categoryName, 
                "steps": guides.steps
            }
        })
        res.status(200).json(guidesArr);
        console.log('Successfully called all guides')
}


// Get all guides of one specific category
exports.getAllGuidesOfCat = (req, res) => {
    const guidesCatCall = guidesModels.getAllGuides()
    .filter((guide) => guide.categoryID === req.params.id);

    res.status(200).json(guidesCatCall);
    console.log('Successfully called guides of one category')
}

//Get guide by ID 
exports.getGuideById = (req, res) => {
    const findGuide = guidesModels.getAllGuidesOfCat()
    .find((guide) => guide.id === req.params.id)
    
    res.status(200).json(findGuide);
    console.log('Successfully found guide by id')
}
