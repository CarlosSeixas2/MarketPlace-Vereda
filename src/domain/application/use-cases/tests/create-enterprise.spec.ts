import { describe, expect, it } from 'vitest'
import { makeEnterprise } from '../../../../../tests/factories/make-enterprise'
import { InMemoryEnterpriseRepository } from '../../../../../tests/repositories/in-memory-enterprise-repository'
import { CreateEnterprise } from '../create-enterprise'

describe('CreateEnterprise', () => {
  it('should create a enterprise', async () => {
    const enterprise = makeEnterprise()

    const inMemoryEnterpriseRepository = new InMemoryEnterpriseRepository()
    const enterpriseCreate = new CreateEnterprise(inMemoryEnterpriseRepository)

    await enterpriseCreate.execute(enterprise)

    expect(inMemoryEnterpriseRepository.items).toHaveLength(1)
    expect(inMemoryEnterpriseRepository.items[0].cnpj).toEqual(enterprise.cnpj)
  })
})
