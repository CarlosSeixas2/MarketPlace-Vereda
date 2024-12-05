import { Product } from '@/domain/entities/product'
import { ProductRepository } from '../../src/domain/application/repositories/product-repository'

export class InMemoryProductRepository implements ProductRepository {
  public items: Product[] = []

  async create(product: Product) {
    this.items.push(product)
  }

  async findById(id: string) {
    return this.items.find((item) => item.id.toString() === id) ?? null
  }

  async delete(product: Product) {
    const index = this.items.findIndex((item) => item.id === product.id)

    this.items.splice(index, 1)
  }

  async save(product: Product): Promise<void> {
    const itemIndex = this.items.findIndex((item) => item.id === product.id)

    this.items[itemIndex] = product
  }

  async findUserIdByProduct(userId: string) {
    return this.items.find((item) => item.userId.toString() === userId) ?? null
  }
}
