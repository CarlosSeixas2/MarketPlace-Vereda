import { describe, it } from 'vitest'
import { InMemoryAdressRepository } from '../../../../../tests/repositories/in-memory-adress-repository'
import { makeAdress } from '../../../../../tests/factories/make-adress'
import { DeleteAdress } from '../delete-adress'

describe('DeleteAdress', () => {
  it('should delete a adress', async () => {
    const inMemoryAdressRepository = new InMemoryAdressRepository()
    const sut = new DeleteAdress(inMemoryAdressRepository)

    const adress = makeAdress()

    await inMemoryAdressRepository.create(adress)

    await sut.execute({
      id: adress.id.toString(),
    })

    expect(inMemoryAdressRepository.items).toHaveLength(0)
  })
})
