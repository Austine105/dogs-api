const router = require('express').Router();
const Dog = require("../database/models/index").Dog;
const { body, validationResult } = require('express-validator');


router.get("/", (req, res) => {
  Dog.findAll({
  })
    .then(dogs => {
      res.json(dogs);
    })
    .catch(err => res.json(err));
});

router.get("/:id", (req, res) => {
  Dog.findAll({
    where: {
      id: req.params.id
    }
  })
    .then(dog => {
      res.json(dog);
    })
    .catch(err => res.json(err));
});

router.post("/", [
  // validations
  body('name').isString(),
  body('age').isInt(),
  body('color').isString(),
  body('breed').isString(),
  body('weight').isInt()
], (req, res) => {

  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  Dog.create(req.body)
    .then(res => {
      res.json(res);
    })
    .catch(err => res.json(err));
});

router.put("/:id",
  [
    // validations
    body('name').optional().isString(),
    body('age').optional().isInt(),
    body('color').optional().isString(),
    body('breed').optional().isString(),
    body('weight').optional().isInt()
  ], (req, res) => {
    Dog.update(req.body,
      {
        where: { 
          id: req.params.id 
        }
      })
      .then(updatedDog => {
        res.json(updatedDog);
      })
      .catch(err => res.json(err));
  });

router.delete("/:id", (req, res) => {
  Dog.destroy({
    where: { 
      id: req.params.id 
    }
  })
    .then(dog => {
      res.json(dog);
    })
    .catch(err => res.json(err));
});

module.exports = router;
