import { PersonRepository } from '../../src/domain/application/repositories/person-repository'
import { Person } from '../../src/domain/entities/person'

export class InMemoryPersonRepository implements PersonRepository {
  public items: Person[] = []

  async create(person: Person) {
    this.items.push(person)
  }

  async findByCpf(cpf: string) {
    return this.items.find((person) => person.cpf === cpf) ?? null
  }

  async findById(id: string) {
    return this.items.find((person) => person.id.toString() === id) ?? null
  }

  async delete(person: Person) {
    const itemIndex = this.items.findIndex((item) => item.id === person.id)

    this.items.splice(itemIndex, 1)
  }

  async save(person: Person) {
    const itemIndex = this.items.findIndex((item) => item.id === person.id)

    this.items[itemIndex] = person
  }
}
