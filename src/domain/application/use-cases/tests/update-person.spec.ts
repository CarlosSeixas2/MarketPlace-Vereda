import { describe, it } from 'vitest'
import { InMemoryPersonRepository } from '../../../../../tests/repositories/in-memory-person-repository'
import { makePerson } from '../../../../../tests/factories/make-person'
import { UpdatePerson } from '../update-person'

describe('UpdatePerson', () => {
  it('should update a person', async () => {
    const inMemoryPersonRepository = new InMemoryPersonRepository()
    const sut = new UpdatePerson(inMemoryPersonRepository)

    const person = makePerson()

    await inMemoryPersonRepository.create(person)

    await sut.execute({
      userId: person.id.toString(),
      cpf: 'new-cpf',
      name: 'new-name',
      email: 'new-email',
      password: 'new-password',
    })

    expect(inMemoryPersonRepository.items).toHaveLength(1)
    expect(inMemoryPersonRepository.items[0].cpf).toBe('new-cpf')
  })
})
