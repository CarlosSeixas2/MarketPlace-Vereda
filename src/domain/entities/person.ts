import { UniqueEntityID } from '../../core/entities/unique-entity-id'
import { Optional } from '../../core/types/optional'
import { UserEntity, UserEntityProps } from './interfaces/user-entity'

export interface PersonProps extends UserEntityProps {
  name: string
  cpf: string
}

export class Person extends UserEntity<PersonProps> {
  static create(
    props: Optional<PersonProps, 'phone' | 'image' | 'createdAt'>,
    id?: UniqueEntityID,
  ) {
    return new Person(
      { ...props, createdAt: props.createdAt ?? new Date() },
      id ?? new UniqueEntityID(),
    )
  }

  get name() {
    return this.props.name
  }

  set name(name: string) {
    this.props.name = name
  }

  get cpf() {
    return this.props.cpf
  }

  set cpf(cpf: string) {
    this.props.cpf = cpf
  }
}
