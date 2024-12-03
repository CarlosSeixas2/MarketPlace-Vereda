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

  set email(email: string) {
    this.props.email = email
    this.updateItem()
  }

  get password() {
    return this.props.password
  }

  set password(password: string) {
    this.props.password = password
    this.updateItem()
  }

  get image() {
    return this.props.image ?? ''
  }

  set image(image: string) {
    this.props.image = image
    this.updateItem()
  }

  get phone() {
    return this.props.phone ?? ''
  }

  set phone(phone: string) {
    this.props.phone = phone
    this.updateItem()
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
