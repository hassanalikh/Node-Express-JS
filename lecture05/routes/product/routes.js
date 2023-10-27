import express from 'express';
const productRoutes = express.Router();



productRoutes.get("/", (req, res) => {
    res.send('Hello World! - get product.');
});

productRoutes.post("/", (req, res) => {
    console.log(req.body);
    res.send('Hello World! - post product.');
});

productRoutes.put("/:product/:id", (req, res) => {
    let {product, id} = req.params;
    console.log(product, id);
    res.send('Hello World! - put product.');
});

productRoutes.delete("/:id", (req, res) => {
    console.log(req.body);
    res.send('Hello World! - delete product.');
});

export default productRoutes;