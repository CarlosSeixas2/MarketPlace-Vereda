import { faker } from '@faker-js/faker'

import { UniqueEntityID } from '@/core/entities/unique-entity-id'
import { Product, ProductProps } from '@/domain/entities/product'

export function makeProduct(
  override: Partial<ProductProps> = {},
  id?: UniqueEntityID,
) {
  const product = Product.create(
    {
      name: faker.commerce.productName(),
      price: parseFloat(faker.commerce.price()),
      description: faker.commerce.productDescription(),
      quantity: faker.number.int({ min: 1, max: 100 }),
      userId: new UniqueEntityID(),
      ...override,
    },
    id,
  )

  return product
}
