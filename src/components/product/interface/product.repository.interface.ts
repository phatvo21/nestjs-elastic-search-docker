import { BaseInterfaceRepository } from '@repositories/base/base.interface.repository';
import { Product } from "@components/product/entity/product.entity";

export interface ProductRepositoryInterface extends BaseInterfaceRepository<Product> {
}
