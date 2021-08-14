import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { CreateUserDTO } from './dtos/create-user.dto';
import { User } from './entities/users.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
  ) {}

  async createNewUser(user: CreateUserDTO): Promise<User> {
    const newUser = this.userRepository.create(user);

    return await this.userRepository.save(newUser);
  }
}
