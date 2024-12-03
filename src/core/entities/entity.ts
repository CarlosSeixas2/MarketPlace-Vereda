import { UniqueEntityID } from './unique-entity-id'

export interface EntityProps {
  name: string
  email: string
  password: string
  image?: string
  phone?: string
  createdAt: Date
  updatedAt?: Date
}

export class Entity<Props extends EntityProps> {
  private _id: UniqueEntityID
  protected props: Props

  constructor(props: Props, id?: UniqueEntityID) {
    this.props = props
    this._id = id ?? new UniqueEntityID()
  }

  get id() {
    return this._id
  }

  get name() {
    return this.props.name
  }

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
