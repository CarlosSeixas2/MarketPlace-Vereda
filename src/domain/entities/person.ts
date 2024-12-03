import { UniqueEntityID } from '../../core/entities/unique-entity-id'
import { Optional } from '../../core/types/optional'
import { UserEntity, UserEntityProps } from './interfaces/user-entity'

interface UserProps extends UserEntityProps {
  name: string
  cpf: string
}

export class Person extends UserEntity<UserProps> {
  static create(
    props: Optional<UserProps, 'phone' | 'image' | 'createdAt'>,
    id?: UniqueEntityID,
  ) {
    return new Person(
      { ...props, createdAt: props.createdAt ?? new Date() },
      id,
    )
  }

  get name() {
    return this.props.name
  }

  get cpf() {
    return this.props.cpf
  }
}
