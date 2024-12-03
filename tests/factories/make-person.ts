import { faker } from '@faker-js/faker'

import { UniqueEntityID } from '@/core/entities/unique-entity-id'
import { Person, PersonProps } from '@/domain/entities/person'

export function makePerson(
  override: Partial<PersonProps> = {},
  id?: UniqueEntityID,
) {
  const person = Person.create(
    {
      cpf: faker.string.numeric(11),
      email: faker.internet.email(),
      name: faker.person.fullName(),
      password: faker.internet.password(),
      ...override,
    },
    id,
  )

  return person
}
