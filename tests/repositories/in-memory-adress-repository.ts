import { Adress } from '@/domain/entities/adress'
import { AdressRepository } from '../../src/domain/application/repositories/adress-repository'

export class InMemoryAdressRepository implements AdressRepository {
  public items: Adress[] = []

  async create(adress: Adress) {
    this.items.push(adress)
  }

  async findById(id: string) {
    return this.items.find((item) => item.id.toString() === id) ?? null
  }
}
