import { BaseAbstractRepository } from "./base/base.abstract.repository";
import { Injectable } from "@nestjs/common";
import { Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";
import { ProductRepositoryInterface } from "@components/product/interface/product.repository.interface";
import { Product } from "@components/product/entity/product.entity";

@Injectable()
export class ProductRepository extends BaseAbstractRepository<Product>
  implements ProductRepositoryInterface {
  constructor(
    @InjectRepository(Product)
    private readonly productRepository: Repository<Product>
  ) {
    super(productRepository);
  }
}
