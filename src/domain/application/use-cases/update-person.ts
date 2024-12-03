import { Person } from '@/domain/entities/person'
import { PersonRepository } from '../repositories/person-repository'

export interface UpdatePersonRequest {
  userId: string
  cpf: string
  name: string
  email: string
  password: string
  image?: string
  phone?: string
}

export interface UpdatePersonResponse {
  person: Person
}

export class UpdatePerson {
  constructor(private readonly personRepository: PersonRepository) {}

  async execute({
    userId,
    cpf,
    email,
    name,
    password,
    image,
    phone,
  }: UpdatePersonRequest): Promise<UpdatePersonResponse> {
    const person = await this.personRepository.findById(userId)

    if (!person) {
      throw new Error('Person not found')
    }

    person.cpf = cpf
    person.email = email
    person.name = name
    person.password = password
    person.image = image ?? person.image
    person.phone = phone ?? person.phone

    await this.personRepository.save(person)

    return { person }
  }
}
