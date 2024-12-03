import { User } from '../../entities/user'

export interface UserRepository {
  create(user: User): Promise<void>
  findByCpf(cpf: string): Promise<User | null>
}
