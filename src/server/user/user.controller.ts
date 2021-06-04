import {
  Body,
  Delete,
  Get,
  Post,
  Put,
  Param,
  Controller } from '@nestjs/common'
import { CreateUserDTO, EditUserDTO } from './user.dto'
import { User } from './user.interface'
import { UserService } from './user.service'

interface UserResponse<T = unknown> {
  code: Number,
  message: String,
  data?: T
}

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('users')
  async findAll(): Promise<UserResponse<User[]>> {
    return {
      code: 200,
      data: await this.userService.findAll(),
      message: 'success'
    }
  }

  // GET /user/:_id
  @Get(':_id')
  async findOne(@Param('_id') _id: String): Promise<UserResponse<User>> {
    return {
      code: 200,
      data: await this.userService.findOne(_id),
      message: 'success.'
    }
  }

  @Post()
  async addOne(@Body() body: CreateUserDTO): Promise<UserResponse> {
    await this.userService.addOne(body)
    return {
      code: 200,
      message: 'success'
    }
  }

  // PUT /user/:_id
  @Put(':_id')
  async editOne(
    @Param('_id') _id: string,
    @Body() body: EditUserDTO
  ): Promise<UserResponse> {
    await this.userService.editOne(_id, body);
    return {
      code: 200,
      message: 'Success.'
    };
  }
 
  // DELETE /user/:_id
  @Delete(':_id')
  async deleteOne(@Param('_id') _id: string): Promise<UserResponse> {
    await this.userService.delOne(_id);
    return {
      code: 200,
      message: 'Success.'
    };
  }
}
