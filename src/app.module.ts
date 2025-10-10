import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { JwtModule } from './jwt/jwt.module';
import { SharedModule } from './shared/shared.module';
import { PrismaModule } from './prisma/prisma.module';
import { AuthModule } from './auth/auth.module';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { RedisModule } from './redis/redis.module';
import { BullmqModule } from './bullmq/bullmq.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [JwtModule, SharedModule, PrismaModule, AuthModule, RedisModule, BullmqModule, UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
