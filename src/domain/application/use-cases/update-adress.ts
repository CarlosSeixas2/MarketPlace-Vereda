import { Adress } from '@/domain/entities/adress'
import { AdressRepository } from '../repositories/adress-repository'

export interface UpdateAdressRequest {
  adressId: string
  street: string
  number: string
  city: string
  state: string
  country: string
  zipcode: string
  complement?: string
}

export interface UpdateAdressResponse {
  adress: Adress
}

export class UpdateAdress {
  constructor(private readonly adressRepository: AdressRepository) {}

  async execute({
    adressId,
    street,
    number,
    city,
    state,
    country,
    zipcode,
    complement,
  }: UpdateAdressRequest): Promise<UpdateAdressResponse> {
    const adress = await this.adressRepository.findById(adressId)

    if (!adress) {
      throw new Error('Adress not found')
    }

    adress.street = street
    adress.number = number
    adress.city = city
    adress.state = state
    adress.country = country
    adress.zipcode = zipcode
    adress.complement = complement ?? undefined

    await this.adressRepository.save(adress)

    return { adress }
  }
}
