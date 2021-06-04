import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'
import { CreateUserDTO, EditUserDTO } from './user.dto'
import { User } from './user.interface'

@Injectable()
export class UserService {
  constructor(@InjectModel('Users') private readonly userModal: Model<User>) {}

  async findAll(): Promise<User[]> {
    return await this.userModal.find()
  }

  async findOne(_id: String): Promise<User> {
    return await this.userModal.findOne(_id)
  } 

  async addOne(body: CreateUserDTO): Promise<void> {
    await this.userModal.create(body)
  }

  async editOne(_id: String, body: EditUserDTO): Promise<void> {
    await this.userModal.findByIdAndUpdate(_id, body)
  }

  async delOne(_id: String): Promise<void> {
    await this.userModal.findByIdAndUpdate(_id)
  }
}
