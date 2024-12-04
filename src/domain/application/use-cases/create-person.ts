import { Person } from '@/domain/entities/person'
import { PersonRepository } from '../repositories/person-repository'
import { AdressRepository } from '../repositories/adress-repository'
import { UniqueEntityID } from '@/core/entities/unique-entity-id'

export interface CreatePersonRequest {
  name: string
  cpf: string
  email: string
  password: string
  image?: string
  phone?: string
  adressId?: UniqueEntityID
}

interface CreatePersonResponse {}

export class CreatePerson {
  constructor(
    private readonly personRepository: PersonRepository,
    private readonly adressRepository: AdressRepository,
  ) {}

  async execute({
    cpf,
    email,
    name,
    password,
    image,
    phone,
    adressId,
  }: CreatePersonRequest): Promise<CreatePersonResponse> {
    const cpfAlreadyInUse = await this.personRepository.findByCpf(cpf)

    if (cpfAlreadyInUse) {
      throw new Error('CPF already in use')
    }

    if (adressId) {
      const AdressExist = await this.adressRepository.findById(
        adressId.toString(),
      )

      if (!AdressExist) {
        throw new Error('Adress Not Found')
      }
    }

    const user = Person.create({
      cpf,
      email,
      name,
      password,
      image,
      phone,
      adressId: adressId ?? undefined,
    })

    await this.personRepository.create(user)

    return {}
  }
}
