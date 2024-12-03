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
    this._id = id ?? new UniqueEntityID(id)
  }

  get id() {
    return this._id
  }
}
