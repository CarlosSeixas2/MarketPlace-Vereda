import { Entity } from '@/core/entities/entity'
import { UniqueEntityID } from '@/core/entities/unique-entity-id'
import { Optional } from '@/core/types/optional'

export interface ProductProps {
  name: string
  description: string
  price: number
  quantity: number
  images?: string[]
  userId: UniqueEntityID
  createdAt: Date
}

export class Product extends Entity<ProductProps> {
  static create(
    props: Optional<ProductProps, 'images' | 'createdAt'>,
    id?: UniqueEntityID,
  ) {
    return new Product(
      {
        ...props,
        createdAt: props.createdAt ?? new Date(),
      },
      id ?? new UniqueEntityID(),
    )
  }

  get name(): string {
    return this.props.name
  }

  set name(value: string) {
    this.props.name = value
  }

  get description(): string {
    return this.props.description
  }

  set description(value: string) {
    this.props.description = value
  }

  get price(): number {
    return this.props.price
  }

  set price(value: number) {
    this.props.price = value
  }

  get quantity(): number {
    return this.props.quantity
  }

  set quantity(value: number) {
    this.props.quantity = value
  }

  get images() {
    return this.props.images
  }

  set images(value: string[] | undefined) {
    this.props.images = value
  }

  get userId(): UniqueEntityID {
    return this.props.userId
  }

  set userId(value: UniqueEntityID) {
    this.props.userId = value
  }
}
