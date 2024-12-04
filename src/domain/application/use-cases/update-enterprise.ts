import { Enterprise, TypeCompany } from '@/domain/entities/enterprise'
import { EnterpriseRepository } from '../repositories/enterprise-repository'

export interface UpdateEnterpriseRequest {
  enterpriseId: string
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

export interface UpdateEnterpriseResponse {
  enterprise: Enterprise
}

export class UpdateEnterprise {
  constructor(private readonly enterpriseRepository: EnterpriseRepository) {}

  async execute({
    enterpriseId,
    name,
    cnpj,
    corporateReason,
    fantasyName,
    typeCompany,
    email,
    password,
    image,
    phone,
  }: UpdateEnterpriseRequest): Promise<UpdateEnterpriseResponse> {
    const enterprise = await this.enterpriseRepository.findById(enterpriseId)

    if (!enterprise) {
      throw new Error('Enterprise not found')
    }

    enterprise.cnpj = cnpj
    enterprise.name = name
    enterprise.corporateReason = corporateReason
    enterprise.fantasyName = fantasyName
    enterprise.typeCompany = typeCompany
    enterprise.email = email
    enterprise.password = password
    enterprise.image = image ?? enterprise.image
    enterprise.phone = phone ?? enterprise.phone

    await this.enterpriseRepository.save(enterprise)

    return { enterprise }
  }
}
