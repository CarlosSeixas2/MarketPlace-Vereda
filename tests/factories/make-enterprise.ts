import { faker } from '@faker-js/faker'

import { UniqueEntityID } from '@/core/entities/unique-entity-id'
import {
  Enterprise,
  EnterpriseProps,
  TypeCompany,
} from '@/domain/entities/enterprise'

export function makeEnterprise(
  override: Partial<EnterpriseProps> = {},
  id?: UniqueEntityID,
  adressId?: UniqueEntityID,
) {
  const enterprise = Enterprise.create(
    {
      cnpj: faker.string.numeric(11),
      name: faker.person.fullName(),
      email: faker.internet.email(),
      corporateReason: faker.lorem.paragraph(),
      fantasyName: faker.lorem.paragraph(),
      password: faker.internet.password(),
      typeCompany: TypeCompany.MEI,
      adressId: adressId ?? new UniqueEntityID(),
      ...override,
    },
    id,
  )

  return enterprise
}
