import { describe, it } from 'vitest'
import { InMemoryProductRepository } from '../../../../../tests/repositories/in-memory-product-repository'
import { makeProduct } from '../../../../../tests/factories/make-product'
import { UpdateProduct } from '../update-product'
import { faker } from '@faker-js/faker'

describe('UpdateProduct', () => {
  it('should update a product', async () => {
    const inMemoryProductRepository = new InMemoryProductRepository()
    const sut = new UpdateProduct(inMemoryProductRepository)

    const initialProduct = makeProduct()

    await inMemoryProductRepository.create(initialProduct)

    const payloadUpdate = {
      productId: initialProduct.id.toString(),
      name: faker.commerce.productName(),
      description: faker.commerce.productDescription(),
      price: parseFloat(faker.commerce.price()),
      quantity: faker.number.int({ min: 1, max: 100 }),
      images: [faker.image.url(), faker.image.url()],
      userId: initialProduct.userId.toString(),
    }

    const { product } = await sut.execute(payloadUpdate)

    expect(inMemoryProductRepository.items).toHaveLength(1)
    expect(product.name).toBe(payloadUpdate.name)
  })
})
