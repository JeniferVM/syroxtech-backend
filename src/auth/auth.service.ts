/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */

import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { AuthDto } from './dto/auth.dto';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly jwtService: JwtService,
  ) {}

  async register(authDto: AuthDto) {
    const hashedPassword: string = await bcrypt.hash(authDto.password, 10);
    return this.prisma.user.create({
      data: {
        email: authDto.email,
        password: hashedPassword,
      },
    });
  }

  async login(authDto: AuthDto) {
    const user = await this.prisma.user.findUnique({
      where: { email: authDto.email },
    });

    if (!user) return null;

    const isValid = await bcrypt.compare(authDto.password, user.password);
    if (!isValid) return null;

    const token = this.jwtService.sign({ id: user.id, email: user.email });
    return { token };
  }
}
