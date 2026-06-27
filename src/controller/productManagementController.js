import { productManagement } from "../modals/productManagement.js";


export const createProductManagement = async (req, res, next) => {
    try {
        const productInstance = new productManagement(req.body);

        const createdProduct = await productInstance.save();

        res.status(200).json({
            success: true,
            message: 'success',
            result: createdProduct,
        })

    } catch (error) {
        next(error);
    }
}

// min=10000&max=50000&stock=true&sort=rating

export const getProductList = async (req, res, next) => {
    try {
        let { min = 0, max = Infinity, stock, sort, limit, offset = 1 } = req.query;
        let skip = (offset - 1) * limit;

        let query = {};
        query.price = {
            $gte: min,
            $lte: max
        };
        if (stock) {
            query.stock = stock;
        }
        let sortOrder = {};
        if (sort) {
            sortOrder = sort;
        } else {
            sortOrder = -createdAt;
        }

        const list = await productManagement.find(query).sort(sortOrder).skip(skip).limit(limit);

        res.status(200).json({
            success: true,
            message: 'success',
            result: list,
        })

    } catch (error) {
        next(error);
    }
}