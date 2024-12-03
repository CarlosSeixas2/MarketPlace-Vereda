import { describe, expect, it } from 'vitest'
import { CreatePerson } from '../create-person'
import { InMemoryPersonRepository } from '../../../../../tests/repositories/in-memory-person-repository'
import { makePerson } from '../../../../../tests/factories/make-person'

describe('CreatePerson', () => {
  it('should create a person', async () => {
    const person = makePerson()

    const inMemoryPersonRepository = new InMemoryPersonRepository()
    const personCreate = new CreatePerson(inMemoryPersonRepository)

    await personCreate.execute(person)

    expect(inMemoryPersonRepository.items).toHaveLength(1)
    expect(inMemoryPersonRepository.items[0].cpf).toBe(person.cpf)
  })
})
