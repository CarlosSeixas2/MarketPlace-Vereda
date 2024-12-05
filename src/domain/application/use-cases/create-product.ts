import { Product } from '@/domain/entities/product'
import { ProductRepository } from '../repositories/product-repository'
import { UniqueEntityID } from '@/core/entities/unique-entity-id'

export interface CreateProductRequest {
  name: string
  description: string
  price: number
  quantity: number
  images?: string[]
  userId: UniqueEntityID
}

export interface CreateProductResponse {}

export class CreateProduct {
  constructor(private readonly productRepository: ProductRepository) {}

  async execute({
    name,
    description,
    price,
    quantity,
    images,
    userId,
  }: CreateProductRequest): Promise<CreateProductResponse> {
    const product = Product.create({
      name,
      description,
      price,
      quantity,
      images,
      userId,
    })

    this.productRepository.create(product)

    return {}
  }
}
