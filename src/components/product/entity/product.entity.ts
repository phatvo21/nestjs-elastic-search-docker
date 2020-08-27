import {
  Column,
  Entity, ObjectIdColumn
} from "typeorm";

@Entity({ name: "products" })
export class Product {
  @ObjectIdColumn()
  id: number;

  @Column({
    type: "string"
  })
  name: string;

  @Column({
    type: "string"
  })
  description: string;

  @Column({
    type: "string"
  })
  price: string;

  @Column({
    type: "date"
  })
  createdAt: any;

  @Column({
    type: "date"
  })
  updatedAt: any;
}
