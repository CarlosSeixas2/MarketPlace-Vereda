import { describe, expect, it } from 'vitest'
import { makeEnterprise } from '../../../../../tests/factories/make-enterprise'
import { InMemoryEnterpriseRepository } from '../../../../../tests/repositories/in-memory-enterprise-repository'
import { CreateEnterprise } from '../create-enterprise'
import { makeAdress } from '../../../../../tests/factories/make-adress'

describe('CreateEnterprise', () => {
  it('should create a enterprise', async () => {
    const inMemoryEnterpriseRepository = new InMemoryEnterpriseRepository()
    const enterpriseCreate = new CreateEnterprise(inMemoryEnterpriseRepository)

    const enterprise = makeEnterprise()

    await enterpriseCreate.execute(enterprise)

    expect(inMemoryEnterpriseRepository.items).toHaveLength(1)
    expect(inMemoryEnterpriseRepository.items[0].cnpj).toEqual(enterprise.cnpj)
  })

  it('should create a enterprise with adress', async () => {
    const inMemoryEnterpriseRepository = new InMemoryEnterpriseRepository()
    const enterpriseCreate = new CreateEnterprise(inMemoryEnterpriseRepository)

    const enterprise = makeEnterprise()
    const adress = makeAdress({
      userId: enterprise.id,
    })

    await enterpriseCreate.execute(enterprise)

    expect(inMemoryEnterpriseRepository.items).toHaveLength(1)
    expect(inMemoryEnterpriseRepository.items[0].cnpj).toEqual(enterprise.cnpj)
    expect(adress.userId).toBe(enterprise.id)
  })
})
