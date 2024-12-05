import { describe, it } from 'vitest'
import { InMemoryAdressRepository } from '../../../../../tests/repositories/in-memory-adress-repository'
import { makeAdress } from '../../../../../tests/factories/make-adress'
import { UpdateAdress } from '../update-adress'
import { faker } from '@faker-js/faker'

describe('UpdateAdress', () => {
  it('should update a adress', async () => {
    const inMemoryAdressRepository = new InMemoryAdressRepository()
    const sut = new UpdateAdress(inMemoryAdressRepository)

    const initialAdress = makeAdress()

    await inMemoryAdressRepository.create(initialAdress)

    const payloadDelete = {
      adressId: initialAdress.id.toString(),
      street: faker.location.street(),
      number: '12',
      city: faker.location.city(),
      state: faker.location.state(),
      country: faker.location.country(),
      zipcode: faker.location.zipCode(),
      complement: faker.location.secondaryAddress(),
    }

    const { adress } = await sut.execute(payloadDelete)

    expect(inMemoryAdressRepository.items).toHaveLength(1)
    expect(adress.state).toBe(payloadDelete.state)
  })
})
