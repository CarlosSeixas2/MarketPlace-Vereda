import { describe, it } from 'vitest'
import { InMemoryPersonRepository } from '../../../../../tests/repositories/in-memory-person-repository'
import { makePerson } from '../../../../../tests/factories/make-person'
import { DeletePerson } from '../delete-person'

describe('DeletePerson', () => {
  it('should delete a person', async () => {
    const inMemoryPersonRepository = new InMemoryPersonRepository()
    const sut = new DeletePerson(inMemoryPersonRepository)

    const person = makePerson()

    await inMemoryPersonRepository.create(person)

    await sut.execute({
      id: person.id.toString(),
    })

    expect(inMemoryPersonRepository.items).toHaveLength(0)
  })
})
