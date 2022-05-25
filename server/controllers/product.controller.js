// Import Model Option 1
// const Product = require("../models/product.model");

// Import Model Option 2 (must have export option 2 to work)
const {Product} = require("../models/product.model");

// getAll
module.exports.allProducts = (req, res) => {
    Product.find() //gives an array
        .then(products => res.json(products)) //successful response
        .catch(err => res.json(err)) // unsuccessful response
}

// getOne
module.exports.oneProduct = (req, res) => {
    const id = req.params.id //naming of the params depends on the routes
    Product.findOne({ _id: id }) //_id (from mongodb) id (from params id)
        .then(product => res.json(product))
        .catch(err => res.json(err))
}

// create Option 1
module.exports.createProduct = (req, res) => {
    Product.create(req.body)
        .then(response => res.json(response))
        .catch(err => res.status(400).json(err))
}

// create Option 2
// module.exports.createProduct = (req, res) => {
//     const newProduct = new Product(req.body)
//     newProduct.save()
//         .then(response => res.json(response))
//         .catch(err => res.status(400).json(err))
// }

// update - getOne + create
module.exports.updateProduct = (req, res) => {
    const id = req.params.id
    Product.findOneAndUpdate(
        { _id: id },
        req.body,
        { new: true, runValidator: true }
    )
        .then(response => res.json(response))
        .catch(err => res.json(err))
}

// delete
module.exports.deleteProduct = (req, res) => {
    const id = req.params.id
    Product.deleteOne({ _id: id })
        .then(response => res.json(response))
        .catch(err => res.json(err))
}