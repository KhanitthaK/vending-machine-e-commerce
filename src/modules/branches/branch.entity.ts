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
//   Unique,
//   UpdatedAt,
// } from 'sequelize-typescript';

// import { getDateTime } from 'src/utils/helpers/date-time';
// import { Stock } from '../stock/Stock.entity';

// @Table({
//   underscored: true,
//   timestamps: true,
// })
// export class Branch extends Model<Branch> {
//   @PrimaryKey
//   @Column({ autoIncrement: true })
//   id: number;

//   @AllowNull(false)
//   @Unique
//   @Column({ field: 'branch_code' })
//   branchCode: string;

//   @Column({ field: 'branch_name'})
//   branchName: string;

//   @HasMany(() => Stock)
//   stock: Stock[];

//   @Column({ field: 'latitude'})
//   latitude: number;

//   @Column({ field: 'longtitude'})
//   longitude: number;

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
//     get(this: Branch) {
//       return getDateTime(this.getDataValue('createdAt'));
//     },
//   })
//   createdAt: string;

//   @UpdatedAt
//   @Column({
//     field: 'updated_at',
//     type: DataType.DATE,
//     get(this: Branch) {
//       return getDateTime(this.getDataValue('updatedAt'));
//     },
//   })
//   updatedAt: string;

//   @DeletedAt
//   @Column({
//     field: 'deleted_at',
//     type: DataType.DATE,
//     get(this: Branch) {
//       return getDateTime(this.getDataValue('deletedAt'));
//     },
//   })
//   deletedAt: string;
// }
