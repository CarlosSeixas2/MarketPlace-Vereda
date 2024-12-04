import { Enterprise } from '@/domain/entities/enterprise'

export interface EnterpriseRepository {
  create(enterprise: Enterprise): Promise<void>
  findByCnpj(cnpj: string): Promise<Enterprise | null>
  findById(id: string): Promise<Enterprise | null>
  delete(enterprise: Enterprise): Promise<void>
  save(enterprise: Enterprise): Promise<void>
}
