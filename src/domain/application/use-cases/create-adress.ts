import { Adress } from '@/domain/entities/adress'
import { AdressRepository } from '../repositories/adress-repository'

export interface CreateAdressRequest {
  street: string
  number: string
  city: string
  state: string
  country: string
  zipcode: string
  complement?: string
}

export interface CreateAdressResponse {}

export class CreateAdress {
  constructor(private readonly adressRepository: AdressRepository) {}

  async execute({
    street,
    number,
    city,
    state,
    country,
    zipcode,
    complement,
  }: CreateAdressRequest): Promise<CreateAdressResponse> {
    const adress = Adress.create({
      street,
      number,
      city,
      state,
      country,
      zipcode,
      complement,
    })

    this.adressRepository.create(adress)

    return {}
  }
}
