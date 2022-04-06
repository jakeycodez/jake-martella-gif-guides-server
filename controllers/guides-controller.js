// const { v4: uuidv4 } = require('uuid');
const { writeHeapSnapshot } = require("v8");
const guidesModels = require("../models/guides-models");
// const categoryModel = require('../models/category-models');

// Get all guides
exports.getAllGuides = (_req, res) => {
  const guidesArr = guidesModels.getAllGuides().map((guides) => {
    return {
      id: guides.id,
      name: guides.name,
      author: guides.author,
      categoryID: guides.categoryID,
      categoryName: guides.categoryName,
      itemList: guides.itemList,
      likes: guides.likes,
      tags: guides.tags
      // "steps": guides.steps
    };
  });
  res.status(200).json(guidesArr);
  console.log("Successfully called all guides");
};

// Get all guides of one specific category
exports.getAllGuidesOfCat = (req, res) => {
  const guidesCatCall = guidesModels
    .getAllGuides()
    .filter((guide) => guide.categoryID === req.params.id);

  res.status(200).json(guidesCatCall);
  console.log("Successfully called guides of one category");
};

//Get guide by ID
exports.getGuideById = (req, res) => {
  const findGuide = guidesModels
    .getAllGuidesOfCat()
    .find((guide) => guide.id === req.params.id);

  res.status(200).json(findGuide);
  console.log("Successfully found guide by id");
  // console.log("Successfully found guide by id");
};


// POST req for creating/adding a new guide to JSON file 

  exports.addNewGuide = (req, res) => {
    const result = validate(req);
    console.log(result);
    if (result.errorCount === 0) {
      const newGuide = {
        id: uuidv(), 
        name: req.body.name, 
        author: req.body.author,
        categoryID: req.body.categoryID, 
        categoryName: req.body.categoryName, 
        coverGIF: req.body.coverGIF, 
        likes: 0, 
        itemsList: req.body.itemList, 
        tags: req.body.tags,
        steps: {
          step: req.body.step, 
          gif: req.body.gif 
        }
      };

      let guides = guidesModel.getAllGuides();
      guides.push(newGuide);

      guidesModel.saveAll(guides);

      res.status(201).send({
        result: result, 
        id: newGuide.id,
        status: "successful",
      })
    }
    res.send({
      result: result, 
      status: "unsuccessful",
    })
  }







