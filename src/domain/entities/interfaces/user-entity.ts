import { UniqueEntityID } from '@/core/entities/unique-entity-id'
import { Entity } from '../../../core/entities/entity'

export interface UserEntityProps {
  email: string
  password: string
  image?: string
  phone?: string
  createdAt: Date
  updatedAt?: Date
  adressId?: UniqueEntityID
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

  get adressId() {
    return this.props.adressId
  }

  set adressId(adressId: UniqueEntityID | undefined) {
    if (adressId) {
      this.props.adressId = adressId
    }
  }

  protected updateItem() {
    this.props.updatedAt = new Date()
  }
}
