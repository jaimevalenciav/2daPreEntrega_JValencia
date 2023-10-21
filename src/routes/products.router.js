import { Router } from 'express'
import {getProducts, getProductsById, createProducts, addProduct} from '../controllers/products.controllers.js'




const router = Router()

router.get("/", getProducts)
router.get("/:pid", getProductsById)
router.post("/", createProducts)
router.post("/:pid/product", addProduct)



/* router.get("/", async (req, res) => {
    try {
        const { sort, category, limit } = req.query;
        const query = {};

        if (category) {
            query.category = category;
        }

        let productsQuery = productModel.find(query);

        if (sort) {
            productsQuery = productsQuery.sort(sort); 
        }

        if (limit) {
            productsQuery = productsQuery.limit(parseInt(limit)); 
        }

        const products = await productsQuery;

        res.send({ result: "success", payload: products });
    } catch (error) {
        console.error(error);
        res.status(500).send({ result: "error", message: "Ha ocurrido un error al obtener los productos." });
    }
}); */

/* router.get('/',
    productsController.getProducts
    ) */


/* router.post("/", async(req, res) => {
    let { id, name, description, features, price, keywords, url, category, subcategory} = req.body
    if (!id || !name || !description || !features || !price || !keywords || !url || !category || !subcategory) {
        res.send({status: error, error: "Faltan parámetros"})
    }

    let result = await productModel.create({id, name, description, features, price, keywords, url, category, subcategory})
    res.send({result: "Success", payload: result})
}) */

/* router.get('/',
    productsController.createProduct
    ) */
/* 
router.put("/:pid", async(req, res) =>{
    let { pid } = req.params

    let productToReplace = req.body
    if (!id || !name || !description || !features || !price || !keywords || !url || !category || !subcategory) {
        response.send({status: error, error: "Faltan parámetros"})
    }
    let result = await productModel.updateOne({_id: pid}, productToReplace)
    res.send({result: "Success", payload: result})
}) */

/* router.delete("/:pid", async(req, res) => {
    let pid = req.params
    let result = await productModel.deleteOne({_id: pid})
    res.send({result: "Success", payload: result})
}) */

export default router
