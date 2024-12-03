import { UniqueEntityID } from '../../core/entities/unique-entity-id'
import { Optional } from '../../core/types/optional'
import { UserEntity, UserEntityProps } from './interfaces/user-entity'

enum TypeCompany {
  'MEI',
  'LTDA',
  'S/A',
}

interface EnterpriseProps extends UserEntityProps {
  name: string
  cnpj: string
  corporate_reason: string
  fantasy_name: string
  type_company: TypeCompany
}

export class Entrepise extends UserEntity<EnterpriseProps> {
  static create(
    props: Optional<EnterpriseProps, 'phone' | 'image' | 'createdAt'>,
    id?: UniqueEntityID,
  ) {
    return new Entrepise(
      { ...props, createdAt: props.createdAt ?? new Date() },
      id,
    )
  }

  get name() {
    return this.props.name
  }

  get cnpj() {
    return this.props.cnpj
  }
}
