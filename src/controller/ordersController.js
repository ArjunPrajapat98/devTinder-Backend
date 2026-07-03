import { ordersModel } from "../modals/orders.js";

export const createOrders = async (req, res, next) => {
    try {
        // let { firstName, lastName, email, age, role, status, phone } = req.body;
        const createdUser = new ordersModel(req.body);
        const userInstance = await createdUser.save();

        res.status(200).json({
            success: true,
            message: 'success',
            result: userInstance,
        })

    } catch (error) {
        next(error);
    }
}

export const getListOrders = async (req, res, next) => {
    try {
        let { status = "", limit, offset = 1 } = req.body;
        let skip = (offset - 1) * limit;

        let result =

            res.status(200).json({
                success: true,
                message: 'success',
                result,
            })

    } catch (error) {
        next(error);
    }
}
// check github = https://github.com/vivekpandey76/mongodb-notes/tree/main/docs/06-atlas-search
// Aggregation

// 1. find all orders with status "shipped"
// [
//     { $match : {
//         status: "shipped"
//     }}
// ]

// 2. find all product with price greater than 10000 and show only name price
// [
//     {
//         $match: {
//             price: { $gte: 100 }
//         },
//     },
//     {
//         $project: {
//             name: 1,
//             price: 1
//         }
//     }
// ]

// 3. find total number of orders
// [
//     {
//         $group: {
//             _id: null,
//             total_orders: { $sum: 1 }
//         }
//     }
// ]

// 4. Total revenue generated or (find overall collection total of amount)
// [
//     {
//         $group: {
//             _id: null,
//             total_amount: { $sum: "$totalAmount" }
//         }
//     }
// ]

// 5. Total revenue per status 
// According to status, find total records and find total amount according to status
// [
//     {
//         $group: {
//             _id: "$status",
//             total_record: { $sum: 1 },
//             total_amount: { $sum: "$totalAmount" }
//         }
//     }
// ]

// 6. Find top 3 most expensive products 
// [
//     {
//         $sort: {
//             price: -1
//         }
//     },
//     {
//         $limit: 3
//     }
// ]

// 7 Average product price per category
// total records category wise
// average product price
// [
//     {
//         $group: {
//             _id: "$category",
//             total_records: { $sum: 1 },
//             average: { $avg: "$price" }
//         }
//     }
// ]

// Find total spending of each customer who used UPI as payment method, 
// and display only customerId and total_amount
// [
//     {
//         $match: {
//             paymentMethod: "UPI"
//         }
//     },
//     {
//         $group: {
//             _id: "$customerId",
//             total_amount: { $sum: "$totalAmount" }
//         }
//     },
//     {
//         $project: {
//             customerId: "$_id",
//             total_amount: 1,
//             _id: 0
//         }
//     }
// ]

// find top 2 customers by total spent

// Get all orders with customer details
// [
//   { $lookup: {
//     	from: "usermanagementmodals",
//     	localField: "customerId",
//     	foreignField: "_id",
//     	as: "customerDetails"
//   }}
// ]

// Convert customer array into object
// [
//     {
//         $lookup: {
//             from: "usermanagementmodals",
//             localField: "customerId",
//             foreignField: "_id",
//             as: "customerDetails"
//         }
//     },
//     {
//         $unwind: {
//             path: "$customerDetails",
//             preserveNullAndEmptyArrays: true
//         }
//     },
//     {
//         $project: {
//             firstName: "$customerDetails.name",
//             email: "$customerDetails.email",
//             status: 1,
//             totalAmount: 1,
//         }
//     }
// ]

// Get each order item as separate document.
// [
//     {
//         $unwind: {
//             path: "$items",
//             preserveNullAndEmptyArrays: true
//         }
//     }
// ]


// Find total quantity sold per product.
// [
//     {
//         $unwind: {
//             path: "$items",
//             preserveNullAndEmptyArrays: true
//         }
//     },
//     {
//         $group: {
//             _id: "$items.productId",
//             total_quatity: { $sum: "$items.quantity" }
//         }
//     }
// ]

// Use $facet to get multiple insights expensive Products price greater then 1000 and less then 50000 are expensive and lowProducts less then 100 are low Products
// [
//     {
//         $facet: {
//             expensiveProducts: [
//                 {
//                     $match: {
//                         price: { $gt: 1000, $lt: 50000 }
//                     }
//                 }
//             ],
//             lowProducts: [
//                 {
//                     $match: {
//                         price: { $lt: 100 }
//                     }
//                 }
//             ]
//         }
//     }
// ]


// Get total spending per customer with their name.
// [
//     {
//         $group: {
//             _id: "$customerId",
//             total_amount: { $sum: "$totalAmount" }
//         }
//     },
//     {
//         $lookup: {
//             from: "usermanagementmodals",
//             localField: "_id",
//             foreignField: "_id",
//             as: "customerDetails"
//         }
//     },
//     {
//         $unwind: {
//             path: "$customerDetails",
//             preserveNullAndEmptyArrays: true
//         }
//     },
//     {
//         $project: {
//             _id: 1,
//             total_amount: 1,
//             customerId: "$customerDetails._id",
//             firstName: "$customerDetails.firstName",
//             email: "$customerDetails.email"
//         }
//     }
// ]