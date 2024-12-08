import { Adress } from '@/domain/entities/adress'

export interface AdressRepository {
  create(adress: Adress): Promise<void>
  findById(id: string): Promise<Adress | null>
  delete(adress: Adress): Promise<void>
  save(adress: Adress): Promise<void>
}
