import { User } from '../../entities/person'

export interface UserRepository {
  create(user: User): Promise<void>
  findByCpf(cpf: string): Promise<User | null>
}
