import { ProductRepository } from '../repositories/product-repository'

export interface DeleteProductRequest {
  id: string
}

export interface DeleteProductResponse {}

export class DeleteProduct {
  constructor(private readonly productRepository: ProductRepository) {}

  async execute({ id }: DeleteProductRequest): Promise<DeleteProductResponse> {
    const product = await this.productRepository.findById(id)

    if (!product) {
      throw new Error('Product not found')
    }

    await this.productRepository.delete(product)

    return {}
  }
}
