import { Enterprise, TypeCompany } from '@/domain/entities/enterprise'
import { EnterpriseRepository } from '../repositories/enterprise-repository'

export interface CreateEnterpriseRequest {
  name: string
  cnpj: string
  corporateReason: string
  fantasyName: string
  typeCompany: TypeCompany
  email: string
  password: string
  image?: string
  phone?: string
}

export interface CreateEnterpriseResponse {}

export class CreateEnterprise {
  constructor(private readonly enterpriseRepository: EnterpriseRepository) {}

  async execute({
    cnpj,
    corporateReason,
    email,
    fantasyName,
    name,
    password,
    typeCompany,
    image,
    phone,
  }: CreateEnterpriseRequest): Promise<CreateEnterpriseResponse> {
    const cnpjAlreadyInUse = await this.enterpriseRepository.findByCnpj(cnpj)

    if (cnpjAlreadyInUse) {
      throw new Error('CNPJ already in use')
    }

    const enterprise = Enterprise.create({
      cnpj,
      corporateReason,
      email,
      fantasyName,
      name,
      password,
      typeCompany,
      image,
      phone,
    })

    this.enterpriseRepository.create(enterprise)

    return {}
  }
}
