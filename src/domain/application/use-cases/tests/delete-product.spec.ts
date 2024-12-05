import { describe, it } from 'vitest'
import { InMemoryProductRepository } from '../../../../../tests/repositories/in-memory-product-repository'
import { makeProduct } from '../../../../../tests/factories/make-product'
import { DeleteProduct } from '../delete-product'

describe('DeleteProduct', () => {
  it('should delete a product', async () => {
    const inMemoryProductRepository = new InMemoryProductRepository()
    const sut = new DeleteProduct(inMemoryProductRepository)

    const product = makeProduct()

    await inMemoryProductRepository.create(product)

    await sut.execute({
      id: product.id.toString(),
    })

    expect(inMemoryProductRepository.items).toHaveLength(0)
  })
})
