const searchModels = require('../models/search-models');

exports.searchAllGuides = (_req, res) => {

    const guidesArr = searchModels.searchAllGuides() 
        .map(guides => {
            return {
                "id": guides.id,
                "name": guides.name,
                "author": guides.author, 
                "categoryID": guides.categoryID, 
                "categoryName": guides.categoryName, 
                "coverGIF": guides.coverGIF,
                // "steps": guides.steps
            }
        })
        res.status(200).json(guidesArr);
        console.log('Successfully called all guides')
}