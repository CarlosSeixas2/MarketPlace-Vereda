import { User } from '../../entities/user'
import { UserRepository } from '../repositories/user-repository'

export interface CreateUserRequest {
  name: string
  cpf: string
  email: string
  password: string
  image?: string
  phone?: string
}

interface CreateUserResponse {}

export class CreateUser {
  constructor(private readonly userRepository: UserRepository) {}

  async execute({
    cpf,
    email,
    name,
    password,
    image,
    phone,
  }: CreateUserRequest): Promise<CreateUserResponse> {
    const user = User.create({
      cpf,
      email,
      name,
      password,
      image,
      phone,
    })

    this.userRepository.create(user)

    return {}
  }
}