import { describe, it } from 'vitest'
import { InMemoryEnterpriseRepository } from '../../../../../tests/repositories/in-memory-enterprise-repository'
import { makeEnterprise } from '../../../../../tests/factories/make-enterprise'
import { DeleteEnterprise } from '../delete-enterprise'

describe('DeleteEnterprise', () => {
  it('should delete a enterprise', async () => {
    const inMemoryEnterpriseRepository = new InMemoryEnterpriseRepository()
    const sut = new DeleteEnterprise(inMemoryEnterpriseRepository)

    const enterprise = makeEnterprise()

    await inMemoryEnterpriseRepository.create(enterprise)

    await sut.execute({
      id: enterprise.id.toString(),
    })

    expect(inMemoryEnterpriseRepository.items).toHaveLength(0)
  })
})
