import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UserRepository {
  constructor(private readonly prisma: PrismaService) {}
  async create(data: CreateUserDto) {
    return await this.prisma.user.create({
      data,
    });
  }
  async find(email: string) {
    return await this.prisma.user.findUnique({
      where: {
        email,
      },
    });
  }
  async delete(id: string) {
    return await this.prisma.user.delete({
      where: { id },
    });
  }
}
