import { Enterprise } from '@/domain/entities/enterprise'
import { EnterpriseRepository } from '../../src/domain/application/repositories/enterprise-repository'

export class InMemoryEnterpriseRepository implements EnterpriseRepository {
  public items: Enterprise[] = []

  async create(enterprise: Enterprise) {
    this.items.push(enterprise)
  }

  async findByCnpj(cnpj: string) {
    return this.items.find((enterprise) => enterprise.cnpj === cnpj) ?? null
  }

  async findById(id: string) {
    return (
      this.items.find((enterprise) => enterprise.id.toString() === id) ?? null
    )
  }

  async delete(enterprise: Enterprise) {
    const index = this.items.findIndex((item) => item.id === enterprise.id)

    this.items.splice(index, 1)
  }

  async save(enterprise: Enterprise) {
    const itemIndex = this.items.findIndex((item) => item.id === enterprise.id)

    this.items[itemIndex] = enterprise
  }
}
