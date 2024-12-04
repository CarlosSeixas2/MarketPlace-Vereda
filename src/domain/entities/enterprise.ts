import { UniqueEntityID } from '../../core/entities/unique-entity-id'
import { Optional } from '../../core/types/optional'
import { UserEntity, UserEntityProps } from './interfaces/user-entity'

export enum TypeCompany {
  'MEI',
  'LTDA',
  'S/A',
}

export interface EnterpriseProps extends UserEntityProps {
  name: string
  cnpj: string
  corporateReason: string
  fantasyName: string
  typeCompany: TypeCompany
}

export class Enterprise extends UserEntity<EnterpriseProps> {
  static create(
    props: Optional<EnterpriseProps, 'phone' | 'image' | 'createdAt'>,
    id?: UniqueEntityID,
  ) {
    return new Enterprise(
      { ...props, createdAt: props.createdAt ?? new Date() },
      id,
    )
  }

  get name() {
    return this.props.name
  }

  set name(name: string) {
    this.props.name = name
  }

  get cnpj() {
    return this.props.cnpj
  }

  set cnpj(cnpj: string) {
    this.props.cnpj = cnpj
  }

  get corporateReason() {
    return this.props.corporateReason
  }

  set corporateReason(corporateReason: string) {
    this.props.corporateReason = corporateReason
  }

  get fantasyName() {
    return this.props.fantasyName
  }

  set fantasyName(fantasyName: string) {
    this.props.fantasyName = fantasyName
  }

  get typeCompany() {
    return this.props.typeCompany
  }

  set typeCompany(typeCompany: TypeCompany) {
    this.props.typeCompany = typeCompany
  }
}
