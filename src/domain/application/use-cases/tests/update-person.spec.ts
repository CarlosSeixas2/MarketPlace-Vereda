import { describe, it } from 'vitest'
import { InMemoryPersonRepository } from '../../../../../tests/repositories/in-memory-person-repository'
import { makePerson } from '../../../../../tests/factories/make-person'
import { UpdatePerson } from '../update-person'
import { faker } from '@faker-js/faker'

describe('UpdatePerson', () => {
  it('should update a person', async () => {
    const inMemoryPersonRepository = new InMemoryPersonRepository()
    const sut = new UpdatePerson(inMemoryPersonRepository)

    const person = makePerson()

    await inMemoryPersonRepository.create(person)

    const payloadDelete = {
      userId: person.id.toString(),
      cpf: faker.string.numeric(11),
      email: faker.internet.email(),
      name: faker.person.fullName(),
      password: faker.internet.password(),
    }

    await sut.execute(payloadDelete)

    expect(inMemoryPersonRepository.items).toHaveLength(1)
    expect(inMemoryPersonRepository.items[0].cpf).toBe(payloadDelete.cpf)
  })
})
