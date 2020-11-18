import { CreateProductDto } from "@components/product/dto/create-product.dto";
import { Product } from "@components/product/entity/product.entity";

export interface ProductServiceInterface {
  create(productDto: CreateProductDto): Promise<Product>;

  update(productId: any, updateProduct: any): Promise<Product>;

  search(q: any): Promise<any>;
}
