import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UsersService {
  constructor(private readonly prisma: PrismaService) {}
  async create(createUserDto: any) {
    const user = await this.prisma.user.create({ data: createUserDto });
    return user;
  }

  async findAll() {
    const users = await this.prisma.user.findMany();
    return users;
  }
}
