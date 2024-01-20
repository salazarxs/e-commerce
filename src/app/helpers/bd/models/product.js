import { DataTypes } from 'sequelize';
import bd from '@/app/helpers/bd/bd';

const ProductModel = bd.define('PRODUCTS', {
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
    reting: {
        type: DataTypes.INTEGER
    },
    productImage: {
        type: DataTypes.STRING
    },
},
    {
        tableName: 'PRODUCTS'
    });

export default ProductModel;