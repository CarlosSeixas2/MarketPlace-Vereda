import { Entity } from '../../core/entities/entity'

interface UserProps {
  name: string
  cpf: string
  email: string
  password: string
  image?: string
  phone?: string
}

export class User extends Entity<UserProps> {}
