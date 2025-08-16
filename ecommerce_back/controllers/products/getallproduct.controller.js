// const Product = require("../../models/productSchema.models");

// const getAllproduct = async (req, res) => {
//     try {
//         const { size } = req.query;
//         const limit = size ? Number(size) : 100;

//         const getproducts = await Product.find()
//             .sort({ createdAt: 1 })
//             .populate("category")
//             .limit(limit);

//         if (!getproducts || getproducts.length === 0) {
//             return res.status(404).json({ msg: "No products in collection" });
//         }

//         return res.status(200).json({ msg: "Here are your items", allProducts: getproducts });
//     } catch (error) {
//         console.log("catch err", error);
//         return res.status(500).json({ msg: "Server error", error: error.message });
//     }
// };

// module.exports = getAllproduct;



// const Product = require("../../models/productSchema.models");

// const getAllproduct = async (req, res) => {
//     try {
//         const { size } = req.query;
//         const limit = size ? Number(size) : 100;

//         const getproducts = await Product.find()
//             .sort({ createdAt: 1 })
//             .populate("category")
//             .limit(limit);

//         if (!getproducts || getproducts.length === 0) {
//             return res.status(404).json({ msg: "No products in collection" });
//         }

//         // prepend /uploads/ to every product image
//         const allProducts = getproducts.map((product) => ({
//             ...product.toObject(),
//             image: `/uploads/${product.image}`
//         }));

//         return res.status(200).json({ msg: "Here are your items", allProducts });
//     } catch (error) {
//         console.log("catch err", error);
//         return res.status(500).json({ msg: "Server error", error: error.message });
//     }
// };

// module.exports = getAllproduct;

const Product = require("../../models/productSchema.models");

const getAllproduct = async (req, res) => {
    try {
        const { size } = req.query;
        const limit = size ? Number(size) : 100;

        const getproducts = await Product.find()
            .sort({ createdAt: 1 })
            .populate("category")
            .limit(limit);

        if (!getproducts || getproducts.length === 0) {
            return res.status(404).json({ msg: "No products in collection" });
        }

        return res.status(200).json({ msg: "Here are your items", allProducts: getproducts });
    } catch (error) {
        console.log("catch err", error);
        return res.status(500).json({ msg: "Server error", error: error.message });
    }
};
module.exports = getAllproduct;