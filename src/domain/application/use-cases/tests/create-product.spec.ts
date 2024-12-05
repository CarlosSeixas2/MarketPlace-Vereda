import { makeProduct } from '../../../../../tests/factories/make-product'
import { InMemoryProductRepository } from '../../../../../tests/repositories/in-memory-product-repository'
import { CreateProduct } from '../create-product'

describe('Create Product', () => {
  it('should be create a product', async () => {
    const inMemoryProductRepository = new InMemoryProductRepository()
    const sut = new CreateProduct(inMemoryProductRepository)

    const product = makeProduct()

    await sut.execute(product)

    expect(inMemoryProductRepository.items).toHaveLength(1)
  })
})
