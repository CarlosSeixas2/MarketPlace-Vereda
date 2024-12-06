import { describe, it } from 'vitest'
import { CreatePerson } from '../create-person'
import { InMemoryPersonRepository } from '../../../../../tests/repositories/in-memory-person-repository'
import { makePerson } from '../../../../../tests/factories/make-person'
import { makeAdress } from '../../../../../tests/factories/make-adress'

describe('CreatePerson', () => {
  it('should be create a person', async () => {
    const inMemoryPersonRepository = new InMemoryPersonRepository()
    const personCreate = new CreatePerson(inMemoryPersonRepository)

    const person = makePerson({})
    await personCreate.execute(person)

    expect(inMemoryPersonRepository.items).toHaveLength(1)
    expect(inMemoryPersonRepository.items[0].cpf).toBe(person.cpf)
  })

  it('should be create a person with adress', async () => {
    const inMemoryPersonRepository = new InMemoryPersonRepository()
    const personCreate = new CreatePerson(inMemoryPersonRepository)

    const person = makePerson()
    const adress = makeAdress({
      userId: person.id,
    })
    await personCreate.execute(person)

    expect(inMemoryPersonRepository.items).toHaveLength(1)
    expect(inMemoryPersonRepository.items[0].cpf).toBe(person.cpf)
    expect(adress.userId).toBe(person.id)
  })
})
