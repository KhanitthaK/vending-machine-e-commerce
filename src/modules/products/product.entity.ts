// /* istanbul ignore file */
// import {
//   AllowNull,
//   Column,
//   CreatedAt,
//   DataType,
//   DeletedAt,
//   HasMany,
//   Model,
//   PrimaryKey,
//   Table,
//   UpdatedAt,
// } from 'sequelize-typescript';

// import { getDate, getDateTime } from 'src/utils/helpers/date-time';
// import { Stock } from '../stock/Stock.entity';

// @Table({
//   underscored: true,
//   timestamps: true,
// })
// export class Product extends Model<Product> {
//   @PrimaryKey
//   @Column({ autoIncrement: true })
//   id: number;

//   @AllowNull(false)
//   @Column({ field: 'product_name' })
//   productName: string;

//   @Column({ field: 'image'})
//   image: string;

//   @Column({ field: 'created_by' })
//   createdBy: string;

//   @Column({ field: 'updated_by' })
//   updatedBy: string;

//   @Column({ field: 'deleted_by' })
//   deletedBy: string;

//   @HasMany(() => Stock)
//   stock: Stock[];

//   @CreatedAt
//   @Column({
//     field: 'created_at',
//     type: DataType.DATE,
//     get(this: Product) {
//       return getDateTime(this.getDataValue('createdAt'));
//     },
//   })
//   createdAt: string;

//   @UpdatedAt
//   @Column({
//     field: 'updated_at',
//     type: DataType.DATE,
//     get(this: Product) {
//       return getDateTime(this.getDataValue('updatedAt'));
//     },
//   })
//   updatedAt: string;

//   @DeletedAt
//   @Column({
//     field: 'deleted_at',
//     type: DataType.DATE,
//     get(this: Product) {
//       return getDateTime(this.getDataValue('deletedAt'));
//     },
//   })
//   deletedAt: string;
// }
