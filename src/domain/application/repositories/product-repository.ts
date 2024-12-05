import { Product } from '@/domain/entities/product'

export interface ProductRepository {
  create(product: Product): Promise<void>
  findById(id: string): Promise<Product | null>
  delete(product: Product): Promise<void>
  save(product: Product): Promise<void>
  findUserIdByProduct(userId: string): Promise<Product | null>
}
