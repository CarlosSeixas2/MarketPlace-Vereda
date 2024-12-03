import { Entity, EntityProps } from '../../core/entities/entity'
import { UniqueEntityID } from '../../core/entities/unique-entity-id'
import { Optional } from '../../core/types/optional'

interface UserProps extends EntityProps {
  cpf: string
}

export class User extends Entity<UserProps> {
  static create(
    props: Optional<UserProps, 'phone' | 'image' | 'createdAt'>,
    id?: UniqueEntityID,
  ) {
    return new User({ ...props, createdAt: props.createdAt ?? new Date() }, id)
  }
}
