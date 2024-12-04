import { faker } from '@faker-js/faker'

import { UniqueEntityID } from '@/core/entities/unique-entity-id'
import { Adress, AdressProps } from '@/domain/entities/adress'

export function makeAdress(
  override: Partial<AdressProps> = {},
  id?: UniqueEntityID,
) {
  const adress = Adress.create(
    {
      city: faker.location.city(),
      complement: faker.location.secondaryAddress(),
      country: faker.location.country(),
      number: faker.location.buildingNumber(),
      state: faker.location.state(),
      street: faker.location.street(),
      zipcode: faker.location.zipCode(),
      ...override,
    },
    id,
  )

  return adress
}
