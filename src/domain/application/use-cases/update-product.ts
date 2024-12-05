import { Product } from '@/domain/entities/product'
import { ProductRepository } from '../repositories/product-repository'

export interface UpdateProductRequest {
  productId: string
  name: string
  description: string
  price: number
  quantity: number
  images?: string[]
  userId: string
}

export interface UpdateProductResponse {
  product: Product
}

export class UpdateProduct {
  constructor(private readonly productRepository: ProductRepository) {}

  async execute({
    productId,
    name,
    description,
    price,
    quantity,
    images,
    userId,
  }: UpdateProductRequest): Promise<UpdateProductResponse> {
    const product = await this.productRepository.findById(productId)

    if (!product) {
      throw new Error('Product not found')
    }

    const productOfUserId =
      await this.productRepository.findUserIdByProduct(userId)

    if (!productOfUserId) {
      throw new Error('Product of User not found')
    }

    product.name = name
    product.description = description
    product.price = price
    product.quantity = quantity
    product.images = images || []

    await this.productRepository.save(product)

    return { product }
  }
}
