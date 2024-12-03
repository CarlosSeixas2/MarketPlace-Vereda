import { PersonRepository } from '../repositories/person-repository'

export interface DeletePersonRequest {
  id: string
}

export interface DeletePersonResponse {}

export class DeletePerson {
  constructor(private readonly personRepository: PersonRepository) {}

  async execute({ id }: DeletePersonRequest): Promise<DeletePersonResponse> {
    const person = await this.personRepository.findById(id)

    if (!person) {
      throw new Error('Person not found')
    }

    await this.personRepository.delete(person)

    return {}
  }
}
