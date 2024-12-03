import { Entity } from '../../../core/entities/entity'

export interface UserEntityProps {
  email: string
  password: string
  image?: string
  phone?: string
  createdAt: Date
  updatedAt?: Date
}

export class UserEntity<Props extends UserEntityProps> extends Entity<Props> {
  get email() {
    return this.props.email
  }

  get password() {
    return this.props.password
  }

  get image() {
    return this.props.image
  }

  get phone() {
    return this.props.phone
  }

  get createdAt() {
    return this.props.createdAt
  }

  get updatedAt() {
    return this.props.updatedAt
  }

  protected updateItem() {
    this.props.updatedAt = new Date()
  }
}
