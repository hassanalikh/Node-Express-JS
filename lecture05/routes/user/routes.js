import express from 'express';
const userRoutes = express.Router();



userRoutes.get("/", (req, res) => {
    res.send('Hello World! - get.');
});

userRoutes.post("/", (req, res) => {
    console.log(req.body);
    res.send('Hello World! - post.');
});

userRoutes.put("/:product/:id", (req, res) => {
    let {product, id} = req.params;
    console.log(product, id);
    res.send('Hello World! - put.');
});

userRoutes.delete("/:id", (req, res) => {
    console.log(req.body);
    res.send('Hello World! - delete.');
});

export default userRoutes;