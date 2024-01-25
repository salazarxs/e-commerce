import { DataTypes, Model } from 'sequelize';
import db from '@/app/helpers/bd/bd';

interface ProductAttributes {
    productName: string;
    categoryID: number;
    productDescription: string;
    price: number;
    rating: number;
    productImage: string;
}

// Definir la interfaz para el modelo de Sequelize
interface ProductInstance extends Model<ProductAttributes>, ProductAttributes { }

// Definir el modelo de Sequelize
const ProductModel = db.define < ProductInstance > ('PRODUCTS', {
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
