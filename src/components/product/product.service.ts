import { Inject, Injectable } from "@nestjs/common";
import { ProductRepositoryInterface } from "./interface/product.repository.interface";
import { ProductServiceInterface } from "./interface/product.service.interface";
import { CreateProductDto } from "./dto/create-product.dto";
import { Product } from "./entity/product.entity";

@Injectable()
export class ProductService implements ProductServiceInterface {
  constructor(
    @Inject("ProductRepositoryInterface")
    private readonly productRepository: ProductRepositoryInterface
  ) {
  }

  public async create(productDto: CreateProductDto): Promise<Product> {
    const product = new Product();
    product.name = productDto.name;
    product.description = productDto.description;
    product.price = productDto.price;
    return await this.productRepository.create(product);
  }

  public async update(productId: any, updateProduct: any): Promise<Product> {
    const product = await this.productRepository.findOneById(productId);
    product.name = updateProduct.name;
    product.description = updateProduct.description;
    product.price = updateProduct.price;
    return await this.productRepository.create(product);
  }

}

