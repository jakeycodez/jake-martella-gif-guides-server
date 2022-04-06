const { runInNewContext } = require("vm");
const { v4: uuidv4 } = require("uuid");
const requestModel = require("../models/request-models");
const { default: isEmail } = require('validator/lib/isEmail');

exports.getAll = (req, res) => {
  const requestsArr = requestModel.getAll()
  .map((request) => {
    return {
      "id": request.id,
      "request": request.request,
      "email": request.email
    }
  })
  res.status(200).json(requestsArr);
};



exports.requestGuide = (req, res) => {

    const newGuideRequest = {
      id: uuidv4(),
      request: req.body.request,
      email: req.body.email,
    };

    let requests = requestModel.getAll();
    requests.push(newGuideRequest);

    requestModel.saveAll(requests);

    res.status(201).send({
      id: newGuideRequest.id,
      request: req.body.request, 
      status: "'Guide request success'",
    });
  

  res.send({
    status: "unsuccessful",
  });
};
