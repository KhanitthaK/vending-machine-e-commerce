// /* istanbul ignore file */
// import {
//   AllowNull,
//   BelongsTo,
//   Column,
//   CreatedAt,
//   DataType,
//   DeletedAt,
//   ForeignKey,
//   HasMany,
//   Model,
//   PrimaryKey,
//   Table,
//   Unique,
//   UpdatedAt,
// } from 'sequelize-typescript';

// import { getDate, getDateTime } from 'src/utils/helpers/date-time';
// import { Branch } from '../branches/branch.entity';
// import { Product } from '../products/product.entity';

// @Table({
//   underscored: true,
//   timestamps: true,
// })
// export class Stock extends Model<Stock> {
//   @PrimaryKey
//   @Column({ autoIncrement: true })
//   id: number;

//   @AllowNull(false)
//   @Column({ field: 'quantity' })
//   quantity: number;

//   @BelongsTo(() => Product)
//   products: Product;

//   @ForeignKey(() => Product)
//   @AllowNull(false)
//   @Column({ field: 'product_id' })
//   productId: number;

//   @BelongsTo(() => Branch)
//   branchs: Product;

//   @ForeignKey(() => Branch)
//   @AllowNull(false)
//   @Column({ field: 'branch_id' })
//   branchId: number;

//   @Column({ field: 'created_by' })
//   createdBy: string;

//   @Column({ field: 'updated_by' })
//   updatedBy: string;

//   @Column({ field: 'deleted_by' })
//   deletedBy: string;

//   @CreatedAt
//   @Column({
//     field: 'created_at',
//     type: DataType.DATE,
//     get(this: Stock) {
//       return getDateTime(this.getDataValue('createdAt'));
//     },
//   })
//   createdAt: string;

//   @UpdatedAt
//   @Column({
//     field: 'updated_at',
//     type: DataType.DATE,
//     get(this: Stock) {
//       return getDateTime(this.getDataValue('updatedAt'));
//     },
//   })
//   updatedAt: string;

//   @DeletedAt
//   @Column({
//     field: 'deleted_at',
//     type: DataType.DATE,
//     get(this: Stock) {
//       return getDateTime(this.getDataValue('deletedAt'));
//     },
//   })
//   deletedAt: string;
// }
