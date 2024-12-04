import { describe, it } from 'vitest'
import { CreatePerson } from '../create-person'
import { InMemoryPersonRepository } from '../../../../../tests/repositories/in-memory-person-repository'
import { makePerson } from '../../../../../tests/factories/make-person'
import { InMemoryAdressRepository } from '../../../../../tests/repositories/in-memory-adress-repository'
import { makeAdress } from '../../../../../tests/factories/make-adress'

describe('CreatePerson', () => {
  it('should create a person with adress', async () => {
    const inMemoryPersonRepository = new InMemoryPersonRepository()
    const inMemoryAdressRepository = new InMemoryAdressRepository()
    const personCreate = new CreatePerson(
      inMemoryPersonRepository,
      inMemoryAdressRepository,
    )

    const adress = makeAdress()
    inMemoryAdressRepository.create(adress)

    const person = makePerson({
      adressId: adress.id,
    })
    await personCreate.execute(person)

    expect(inMemoryPersonRepository.items).toHaveLength(1)
    expect(inMemoryPersonRepository.items[0].cpf).toBe(person.cpf)
    expect(inMemoryPersonRepository.items[0].adressId).toBe(person.adressId)
  })

  it('should be create a person', async () => {
    const inMemoryPersonRepository = new InMemoryPersonRepository()
    const inMemoryAdressRepository = new InMemoryAdressRepository()
    const personCreate = new CreatePerson(
      inMemoryPersonRepository,
      inMemoryAdressRepository,
    )

    const person = makePerson({})
    await personCreate.execute(person)

    expect(inMemoryPersonRepository.items).toHaveLength(1)
    expect(inMemoryPersonRepository.items[0].cpf).toBe(person.cpf)
    expect(inMemoryPersonRepository.items[0].adressId).toBeFalsy()
  })
})
