import { Module } from '@nestjs/common';
import { JwtService } from './jwt.service';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  providers: [JwtService],
  imports: [PrismaModule],
  exports: [JwtService],
})
export class JwtModule {}
