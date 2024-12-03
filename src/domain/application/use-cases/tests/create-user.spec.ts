import { describe, expect, it } from 'vitest'
import { Person } from '../../../entities/person'
import { CreateUser } from '../create-user'
import { InMemoryUserRepository } from '../../../../../tests/repositories/in-memory-user-repository'

describe('CreateUser', () => {
  it('should create a user', async () => {
    const user = Person.create({
      cpf: '123456789',
      email: 'test@gmail.com',
      name: 'Test',
      password: '123456',
    })

    const inMemoryUserRepository = new InMemoryUserRepository()
    const userCreate = new CreateUser(inMemoryUserRepository)

    await userCreate.execute({
      cpf: user.cpf,
      email: user.email,
      name: user.name,
      password: user.password,
    })

    console.log(inMemoryUserRepository.items.length)

    expect(inMemoryUserRepository.items).toHaveLength(1)
    expect(inMemoryUserRepository.items[0].cpf).toBe('123456789')
  })
})
