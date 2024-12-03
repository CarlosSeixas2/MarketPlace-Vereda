import { UserRepository } from '../../src/domain/application/repositories/user-repository'
import { User } from '../../src/domain/entities/user'

export class InMemoryUserRepository implements UserRepository {
  public items: User[] = []

  async create(user: User) {
    this.items.push(user)
  }
}
