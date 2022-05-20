const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  // find all categories
  // be sure to include its associated Products
  Category.findAll({
    attributes: ['id', 'name'],
    include: [
      {
        model: Product,
        attributes: ['id', 'name', 'price', 'imageUrl', 'description'],
      },
    ],
  })
});

router.get('/:id', (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  Category.findOne({
    where: {
      id: req.params.id,
    },
    attributes: ['id', 'name'],
    include: [
      {
        model: Product,
        attributes: ['id', 'name', 'price', 'imageUrl', 'description'],
      },
    ],
  })
});

router.post('/', (req, res) => {
  // create a new category
  Category.create(req.body)
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
  Category.update(req.body, {
    where: {
      id: req.params.id,
    },
  })
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
  Category.destroy({
    where: {
      id: req.params.id,
    },
  })
});

module.exports = router;
