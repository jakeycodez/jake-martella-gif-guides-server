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
                "itemList": guides.itemList,
                "tags": guides.tags
            }
        })
        res.status(200).json(guidesArr);
        console.log('Successfully called all guides')
}