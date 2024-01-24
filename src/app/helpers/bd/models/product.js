import { DataTypes } from 'sequelize';
import db from '@/app/helpers/bd/bd';

const ProductModel = db.define('PRODUCTS', {
    productName: {
        type: DataTypes.STRING
    },
    categoryID: {
        type: DataTypes.INTEGER
    },
    productDescription: {
        type: DataTypes.STRING
    },
    price: {
        type: DataTypes.INTEGER
    },
    rating: {
        type: DataTypes.INTEGER
    },
    productImage: {
        type: DataTypes.STRING
    },
},
    {
        tableName: 'PRODUCTS',
        timestamps: false
    });

export default ProductModel;