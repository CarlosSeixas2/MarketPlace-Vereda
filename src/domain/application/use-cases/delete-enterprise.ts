import { EnterpriseRepository } from '../repositories/enterprise-repository'

export interface DeleteEnterpriseRequest {
  id: string
}

export interface DeleteEnterpriseResponse {}

export class DeleteEnterprise {
  constructor(private readonly enterpriseRepository: EnterpriseRepository) {}

  async execute({
    id,
  }: DeleteEnterpriseRequest): Promise<DeleteEnterpriseResponse> {
    const enterprise = await this.enterpriseRepository.findById(id)

    if (!enterprise) {
      throw new Error('Enterprise not found')
    }

    await this.enterpriseRepository.delete(enterprise)

    return {}
  }
}
