import { Entity } from '@/core/entities/entity'
import { UniqueEntityID } from '@/core/entities/unique-entity-id'
import { Optional } from '@/core/types/optional'

export interface AdressProps {
  street: string
  number: string
  city: string
  state: string
  country: string
  zipcode: string
  complement?: string
  createdAt: Date
}

export class Adress extends Entity<AdressProps> {
  static create(
    props: Optional<AdressProps, 'createdAt'>,
    id?: UniqueEntityID,
  ) {
    return new Adress(
      { ...props, createdAt: props.createdAt ?? new Date() },
      id ?? new UniqueEntityID(),
    )
  }

  get street() {
    return this.props.street
  }

  get number() {
    return this.props.number
  }

  get city() {
    return this.props.city
  }

  get state() {
    return this.props.state
  }

  get country() {
    return this.props.country
  }

  get zipcode() {
    return this.props.zipcode
  }

  get complement() {
    return this.props.complement
  }

  set street(value: string) {
    this.props.street = value
  }

  set number(value: string) {
    this.props.number = value
  }

  set city(value: string) {
    this.props.city = value
  }

  set state(value: string) {
    this.props.state = value
  }

  set country(value: string) {
    this.props.country = value
  }

  set zipcode(value: string) {
    this.props.zipcode = value
  }

  set complement(value: string | undefined) {
    this.props.complement = value
  }
}
