import { Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';

@Module({
  providers: [PrismaService],
  // constructor(private prisma: PrismaService) olarak kullanmak için provider kısmına ekledim
  // Yani provider olarak vermeseydik, NestJS bu servisi tanımaz ve injection yapamazdı.
  exports: [PrismaService],
})
export class PrismaModule {}
