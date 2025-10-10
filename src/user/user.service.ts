import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UserRepository } from './user.repository';

@Injectable()
export class UserService {
  constructor(private readonly userRepository: UserRepository) {}

  async find(email: string) {
    const existEmail = await this.userRepository.find(email);
    return existEmail ? existEmail : null;
  }

  create(data: CreateUserDto) {
    return this.userRepository.create(data);
  }

  remove(id: string) {
    return this.userRepository.delete(id);
  }
}
