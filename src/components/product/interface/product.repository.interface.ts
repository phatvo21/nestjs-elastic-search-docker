import { BaseInterfaceRepository } from '../../../repositories/base/base.interface.repository';
import { Product } from "../entity/product.entity";

export interface ProductRepositoryInterface extends BaseInterfaceRepository<Product> {
}
