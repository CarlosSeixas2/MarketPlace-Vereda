import { AdressRepository } from '../repositories/adress-repository'

export interface DeleteAdressRequest {
  id: string
}

export interface DeleteAdressResponse {}

export class DeleteAdress {
  constructor(private readonly adressRepository: AdressRepository) {}

  async execute({ id }: DeleteAdressRequest): Promise<DeleteAdressResponse> {
    const adress = await this.adressRepository.findById(id)

    if (!adress) {
      throw new Error('Adress not found')
    }

    await this.adressRepository.delete(adress)

    return {}
  }
}
