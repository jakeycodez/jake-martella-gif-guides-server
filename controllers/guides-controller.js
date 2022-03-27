const { v4: uuidv4 } = require('uuid');
const guidesModels = require('../models/guides-models');
// const categoryModel = require('../models/category-models');

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
}

exports.getAllGuidesOfCat = (req, res) => {

    const guidesCatCall = guidesModels.getAllGuides()
    .filter((guide) => guide.categoryID === req.params.id);

    res.status(200).json(guidesCatCall);
}