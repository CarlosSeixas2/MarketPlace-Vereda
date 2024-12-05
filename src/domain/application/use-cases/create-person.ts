import { Person } from '@/domain/entities/person'
import { PersonRepository } from '../repositories/person-repository'

export interface CreatePersonRequest {
  name: string
  cpf: string
  email: string
  password: string
  image?: string
  phone?: string
}

interface CreatePersonResponse {}

export class CreatePerson {
  constructor(private readonly personRepository: PersonRepository) {}

  async execute({
    cpf,
    email,
    name,
    password,
    image,
    phone,
  }: CreatePersonRequest): Promise<CreatePersonResponse> {
    const cpfAlreadyInUse = await this.personRepository.findByCpf(cpf)

    if (cpfAlreadyInUse) {
      throw new Error('CPF already in use')
    }

    const user = Person.create({
      cpf,
      email,
      name,
      password,
      image,
      phone,
    })

    await this.personRepository.create(user)

    return {}
  }
}
