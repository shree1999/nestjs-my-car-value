import { Controller, Post, Body } from '@nestjs/common';
import {
  ApiCreatedResponse,
  ApiOperation,
  ApiTags,
  ApiBadRequestResponse,
} from '@nestjs/swagger';

import { CreateUserDTO } from './dtos/create-user.dto';
import { UserService } from './users.service';
import { User } from './entities/users.entity';

@ApiTags('users')
@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  @ApiOperation({ summary: 'Create new user' })
  @ApiCreatedResponse({ description: 'create user successful' })
  @ApiBadRequestResponse({ description: 'validation error' })
  async createNewUser(@Body() createUserDto: CreateUserDTO): Promise<User> {
    return this.userService.createNewUser(createUserDto);
  }
}
