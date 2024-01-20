import bd from '@/app/helpers/bd/bd';
import { DataTypes } from 'sequelize';

const CategoryModel = db.define('CATEGORIES', {
    cateogry: {
        type: DataTypes.STRING
    }
},
    {
        tableName: 'CATEGORIES',
        timestamps: false
    });
export default CategoryModel;