import { makeAdress } from '../../../../../tests/factories/make-adress'
import { InMemoryAdressRepository } from '../../../../../tests/repositories/in-memory-adress-repository'
import { CreateAdress } from '../create-adress'

describe('Create Adress', () => {
  it('create adress', () => {
    const inMemoryAdressRepository = new InMemoryAdressRepository()
    const sut = new CreateAdress(inMemoryAdressRepository)

    const adress = makeAdress()
    sut.execute(adress)

    expect(inMemoryAdressRepository.items).toHaveLength(1)
  })
})
