import { Person } from '../../entities/person'

export interface PersonRepository {
  create(person: Person): Promise<void>
  findByCpf(cpf: string): Promise<Person | null>
  findById(id: string): Promise<Person | null>
  delete(person: Person): Promise<void>
  save(person: Person): Promise<void>
}
