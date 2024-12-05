import { describe, it } from 'vitest'
import { InMemoryEnterpriseRepository } from '../../../../../tests/repositories/in-memory-enterprise-repository'
import { makeEnterprise } from '../../../../../tests/factories/make-enterprise'
import { UpdateEnterprise } from '../update-enterprise'
import { faker } from '@faker-js/faker'
import { TypeCompany } from '@/domain/entities/enterprise'

describe('UpdateEnterprise', () => {
  it('should update a enterprise', async () => {
    const inMemoryEnterpriseRepository = new InMemoryEnterpriseRepository()
    const sut = new UpdateEnterprise(inMemoryEnterpriseRepository)

    const enterprise = makeEnterprise()

    await inMemoryEnterpriseRepository.create(enterprise)

    const payloadUpdate = {
      enterpriseId: enterprise.id.toString(),
      name: faker.person.fullName(),
      cnpj: faker.string.numeric(11),
      corporateReason: faker.lorem.paragraph(),
      fantasyName: faker.lorem.paragraph(),
      typeCompany: TypeCompany.LTDA,
      email: faker.internet.email(),
      password: faker.internet.password(),
    }

    await sut.execute(payloadUpdate)

    expect(inMemoryEnterpriseRepository.items).toHaveLength(1)
    expect(inMemoryEnterpriseRepository.items[0].cnpj).toBe(payloadUpdate.cnpj)
  })
})
